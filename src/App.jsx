import { useEffect, useMemo, useState } from 'react';
import AuthPanel from './components/AuthPanel';
import EventSidebar from './components/EventSidebar';
import FiltersPanel from './components/FiltersPanel';
import GlobeMap from './components/GlobeMap';
import InfoPanel from './components/InfoPanel';
import PersonalMapPanel from './components/PersonalMapPanel';
import DiaryTimeline from './components/DiaryTimeline';
import { historicalEvents, regionConfig } from './data/events';
import { searchWikipediaEvents } from './services/wikipedia';

const USERS_KEY = 'mystory_users';
const SESSION_KEY = 'mystory_session';
const MARKERS_KEY = 'mystory_personal_markers';
const DIARY_KEY = 'mystory_diary_entries';

const minYear = -10000;
const maxYear = 2026;

const epochOptions = [
  { id: 'antichita', label: 'Antichità (-10000 / -500)', range: [-10000, -500] },
  { id: 'tardoAntico', label: 'Tardo Antico (-500 / 500)', range: [-500, 500] },
  { id: 'medioevo', label: 'Medioevo (500 / 1500)', range: [500, 1500] },
  { id: 'moderna', label: 'Età moderna (1500 / 1900)', range: [1500, 1900] },
  { id: 'contemporanea', label: 'Contemporanea (1900 / 2026)', range: [1900, 2026] }
];

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedEpoch, setSelectedEpoch] = useState('antichita');
  const [yearRange, setYearRange] = useState(epochOptions.find((e) => e.id === 'antichita').range);
  const [selectedRegions, setSelectedRegions] = useState(Object.keys(regionConfig));
  const [showOnlyDiary, setShowOnlyDiary] = useState(false);
  const [personalMarkers, setPersonalMarkers] = useState([]);
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [focusedEvent, setFocusedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [wikiEvents, setWikiEvents] = useState([]);
  const [wikiLoading, setWikiLoading] = useState(false);
  const [wikiError, setWikiError] = useState('');

  const baseEvents = useMemo(
    () => [...historicalEvents, ...personalMarkers, ...wikiEvents],
    [personalMarkers, wikiEvents]
  );

  const mergedEvents = useMemo(
    () => [...baseEvents, ...(Array.isArray(diaryEntries) ? diaryEntries : [])],
    [baseEvents, diaryEntries]
  );

  const diarySuggestions = useMemo(() => {
    const sourceEvents = baseEvents
      .filter((event) => event.endYear >= yearRange[0] && event.startYear <= yearRange[1])
      .filter((event) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query)
        );
      });

    const seen = new Set();
    return sourceEvents
      .filter((event) => {
        if (seen.has(event.title)) return false;
        seen.add(event.title);
        return true;
      })
      .slice(0, 8);
  }, [baseEvents, yearRange, searchQuery]);

  const visibleEvents = useMemo(() => {
    const safeDiaryEntries = Array.isArray(diaryEntries) ? diaryEntries : [];
    const source = showOnlyDiary ? safeDiaryEntries : baseEvents;

    return source
      .filter((event) => (showOnlyDiary ? true : selectedRegions.includes(event.region)))
      .filter((event) => event.endYear >= yearRange[0] && event.startYear <= yearRange[1])
      .filter((event) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          (event.location && event.location.toLowerCase().includes(query)) ||
          (event.diaryNote && event.diaryNote.toLowerCase().includes(query)) ||
          (event.cityName && event.cityName.toLowerCase().includes(query))
        );
      })
      .sort((a, b) => a.startYear - b.startYear);
  }, [showOnlyDiary, diaryEntries, baseEvents, selectedRegions, yearRange, searchQuery]);

  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY);
    const savedMarkers = JSON.parse(localStorage.getItem(MARKERS_KEY) || '{}');
    const savedDiary = JSON.parse(localStorage.getItem(DIARY_KEY) || '{}');

    if (savedSession) {
      const session = JSON.parse(savedSession);
      setCurrentUser(session);
      setPersonalMarkers(savedMarkers[session.email] || []);
      setDiaryEntries(Array.isArray(savedDiary[session.email]) ? savedDiary[session.email] : []);
    }
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const savedMarkers = JSON.parse(localStorage.getItem(MARKERS_KEY) || '{}');
    savedMarkers[currentUser.email] = personalMarkers;
    localStorage.setItem(MARKERS_KEY, JSON.stringify(savedMarkers));
  }, [currentUser, personalMarkers]);

  useEffect(() => {
    if (!currentUser) return;

    const savedDiary = JSON.parse(localStorage.getItem(DIARY_KEY) || '{}');
    savedDiary[currentUser.email] = Array.isArray(diaryEntries) ? diaryEntries : [];
    localStorage.setItem(DIARY_KEY, JSON.stringify(savedDiary));
  }, [currentUser, diaryEntries]);

  useEffect(() => {
    const epoch = epochOptions.find((e) => e.id === selectedEpoch);
    if (epoch) {
      setYearRange(epoch.range);
    }
  }, [selectedEpoch]);

  useEffect(() => {
    if (!focusedEvent && visibleEvents.length > 0) {
      setFocusedEvent(visibleEvents[0]);
      return;
    }

    if (focusedEvent && !visibleEvents.some((event) => event.id === focusedEvent.id)) {
      setFocusedEvent(visibleEvents[0] || null);
    }
  }, [visibleEvents, focusedEvent]);

  useEffect(() => {
    const clean = searchQuery.trim();

    if (!clean) {
      setWikiEvents([]);
      setWikiError('');
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setWikiLoading(true);
        setWikiError('');

        const results = await searchWikipediaEvents(clean);
        setWikiEvents(results);

        if (results.length > 0 && !showOnlyDiary) {
          setFocusedEvent(results[0]);

          const starts = results.map((item) => item.startYear);
          const ends = results.map((item) => item.endYear);

          const newStart = Math.max(minYear, Math.min(...starts));
          const newEnd = Math.min(maxYear, Math.max(...ends));

          setYearRange([newStart, newEnd]);
        }
      } catch (error) {
        console.error(error);
        setWikiError('Errore nel caricamento dei dati da Wikipedia.');
        setWikiEvents([]);
      } finally {
        setWikiLoading(false);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchQuery, showOnlyDiary]);

  const toggleRegion = (regionId) => {
    setShowOnlyDiary(false);

    setSelectedRegions((prev) => {
      if (prev.includes(regionId)) {
        if (prev.length === 1) return prev;
        return prev.filter((id) => id !== regionId);
      }
      return [...prev, regionId];
    });
  };

  const handleToggleDiaryView = () => {
    setShowOnlyDiary((prev) => !prev);
  };

  const handleRegister = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const exists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());

    if (exists) {
      return { success: false, message: 'Esiste già un account con questa email.' };
    }

    const newUser = { name: name.trim(), email: email.trim(), password };
    const nextUsers = [...users, newUser];

    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ name: newUser.name, email: newUser.email })
    );

    setCurrentUser({ name: newUser.name, email: newUser.email });
    setPersonalMarkers([]);
    setDiaryEntries([]);

    return {
      success: true,
      message: 'Registrazione completata. Ora puoi creare la tua mappa.'
    };
  };

  const handleLogin = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password
    );

    if (!user) {
      return { success: false, message: 'Credenziali non valide.' };
    }

    const sessionUser = { name: user.name, email: user.email };
    const savedMarkers = JSON.parse(localStorage.getItem(MARKERS_KEY) || '{}');
    const savedDiary = JSON.parse(localStorage.getItem(DIARY_KEY) || '{}');

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    setPersonalMarkers(savedMarkers[user.email] || []);
    setDiaryEntries(Array.isArray(savedDiary[user.email]) ? savedDiary[user.email] : []);

    return { success: true, message: 'Accesso eseguito con successo.' };
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
    setPersonalMarkers([]);
    setDiaryEntries([]);
    setShowOnlyDiary(false);
  };

  const addPersonalMarker = (marker) => {
    const newMarker = {
      ...marker,
      id: `user-${Date.now()}`,
      yearLabel: marker.yearLabel || formatPeriod(marker.startYear, marker.endYear)
    };

    setPersonalMarkers((prev) => [newMarker, ...prev]);
    setFocusedEvent(newMarker);
  };

  const addDiaryNote = (note) => {
    const newDiaryEntry = {
      ...note,
      id: `diary-note-${Date.now()}`,
      yearLabel: note.yearLabel || formatPeriod(note.startYear, note.endYear),
      isDiaryItem: true,
      diaryType: 'note',
      sourceLabel: 'MyDiary'
    };

    setDiaryEntries((prev) => [newDiaryEntry, ...(Array.isArray(prev) ? prev : [])]);
    setShowOnlyDiary(true);
    setFocusedEvent(newDiaryEntry);
  };

  const addEventToDiary = (eventToSave) => {
    const diaryCopy = {
      ...eventToSave,
      id: `diary-copy-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      originalEventId: eventToSave.id,
      isDiaryItem: true,
      diaryType: 'savedEvent',
      sourceLabel: 'MyDiary',
      diaryNote:
        eventToSave.diaryNote ||
        `Evento salvato nel tuo diario personale: ${eventToSave.title}.`
    };

    setDiaryEntries((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const alreadyExists = safePrev.some(
        (entry) =>
          entry.originalEventId === eventToSave.id &&
          entry.title === eventToSave.title &&
          entry.diaryType === 'savedEvent'
      );

      if (alreadyExists) return safePrev;
      return [diaryCopy, ...safePrev];
    });

    setShowOnlyDiary(true);
    setFocusedEvent(diaryCopy);
  };

  const updateDiaryItem = (updatedEntry) => {
    setDiaryEntries((prev) =>
      (Array.isArray(prev) ? prev : []).map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );

    if (focusedEvent?.id === updatedEntry.id) {
      setFocusedEvent(updatedEntry);
    }
  };

  const deletePersonalMarker = (markerId) => {
    setPersonalMarkers((prev) => prev.filter((marker) => marker.id !== markerId));
  };

  const deleteDiaryItem = (entryId) => {
    setDiaryEntries((prev) => (Array.isArray(prev) ? prev : []).filter((entry) => entry.id !== entryId));

    if (focusedEvent?.id === entryId) {
      setFocusedEvent(null);
    }
  };

  const diaryTimelineData = useMemo(() => {
    const safeDiary = Array.isArray(diaryEntries) ? diaryEntries : [];
    return [...safeDiary].sort((a, b) => {
      const aYear = Number.isFinite(a.startYear) ? a.startYear : Number.isFinite(a.endYear) ? a.endYear : 0;
      const bYear = Number.isFinite(b.startYear) ? b.startYear : Number.isFinite(b.endYear) ? b.endYear : 0;
      return aYear - bYear;
    });
  }, [diaryEntries]);

  const diaryTimelineRange = useMemo(() => {
    if (diaryTimelineData.length === 0) return null;

    const years = diaryTimelineData
      .flatMap((item) => [Number(item.startYear), Number(item.endYear)])
      .filter((year) => Number.isFinite(year));

    if (years.length === 0) return null;

    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return { minYear, maxYear: maxYear === minYear ? maxYear + 1 : maxYear };
  }, [diaryTimelineData]);

  const timelineScale = (normalized) => {
    const value = Math.max(0, Math.min(1, normalized));
    return Math.pow(value, 0.68) * 100;
  };

  const timelinePosition = (year) => {
    if (!diaryTimelineRange) return 0;
    const { minYear, maxYear } = diaryTimelineRange;
    const span = maxYear - minYear;
    if (span <= 0) return 50;
    const normalized = (Number(year || minYear) - minYear) / span;
    return Math.min(100, Math.max(0, timelineScale(normalized)));
  };

  const timelineTickYears = useMemo(() => {
    if (!diaryTimelineRange) return [];

    const { minYear, maxYear } = diaryTimelineRange;
    const span = maxYear - minYear;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((fraction) => Math.round(minYear + span * fraction));
    return [...new Set([minYear, ...ticks, maxYear])].sort((a, b) => a - b);
  }, [diaryTimelineRange]);

  const formatTimelineYear = (year) => {
    if (year < 0) return `${Math.abs(year)} a.C.`;
    return String(year);
  };

  const getEventColor = (eventId) => {
    let hash = 0;
    for (let i = 0; i < eventId.length; i++) {
      const char = eventId.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 75%, 55%)`;
  };

  const timelineBarWidth = (startYear, endYear) => {
    const start = timelinePosition(startYear);
    const end = timelinePosition(endYear);
    return Math.max(1.5, end - start);
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">MyStory</p>
          <h1>La storia del mondo su un mappamondo interattivo</h1>
          <p className="hero-text">
            Accesso libero per esplorare gli eventi di default. Registrazione opzionale per creare
            una tua mappa storica personale. Ricerca intelligente con Wikipedia inclusa.
          </p>
          {wikiLoading && <p className="hero-text">Ricerca Wikipedia in corso...</p>}
          {wikiError && <p className="hero-text">{wikiError}</p>}
        </div>
      </header>

      <main className="layout-grid">
        <div className="left-column">
          <FiltersPanel
            minYear={minYear}
            maxYear={maxYear}
            yearRange={yearRange}
            setYearRange={setYearRange}
            selectedEpoch={selectedEpoch}
            setSelectedEpoch={setSelectedEpoch}
            epochOptions={epochOptions}
            selectedRegions={selectedRegions}
            toggleRegion={toggleRegion}
            visibleCount={visibleEvents.length}
            totalCount={showOnlyDiary ? (Array.isArray(diaryEntries) ? diaryEntries.length : 0) : mergedEvents.length}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showOnlyDiary={showOnlyDiary}
            onToggleDiaryView={handleToggleDiaryView}
            diaryCount={Array.isArray(diaryEntries) ? diaryEntries.length : 0}
          />
          <InfoPanel />
          <AuthPanel
            currentUser={currentUser}
            onLogin={handleLogin}
            onRegister={handleRegister}
            onLogout={handleLogout}
          />
          <PersonalMapPanel
            currentUser={currentUser}
            markers={personalMarkers}
            diaryItems={Array.isArray(diaryEntries) ? diaryEntries : []}
            suggestedDiaryEvents={diarySuggestions}
            onAddMarker={addPersonalMarker}
            onDeleteMarker={deletePersonalMarker}
            onAddDiaryNote={addDiaryNote}
            onAddEventToDiary={addEventToDiary}
            onDeleteDiaryItem={deleteDiaryItem}
          />
        </div>

        <div className="center-column">
          <GlobeMap
            events={visibleEvents}
            focusedEvent={focusedEvent}
            onFocusEvent={setFocusedEvent}
          />

          <section className="card" style={{ marginTop: '20px' }}>
            <div className="section-header" style={{ marginBottom: '14px' }}>
              <div>
                <h2>Linea del tempo grafica · MyDiary</h2>
                <p>I tuoi eventi e le tue note salvate, ordinati nel tempo.</p>
              </div>
              <span
                style={{
                  background: 'rgba(34,197,94,0.22)',
                  color: '#bbf7d0',
                  borderRadius: '999px',
                  padding: '6px 10px',
                  fontWeight: 700
                }}
              >
                {diaryTimelineData.length} elementi
              </span>
            </div>

            {diaryTimelineData.length === 0 ? (
              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
                Non ci sono eventi in MyDiary al momento.
              </div>
            ) : (
              <div className="graphic-timeline">
                <div className="timeline-track" />
                {diaryTimelineData.map((item) => {
                  const startYear = Number.isFinite(item.startYear) ? item.startYear : 0;
                  const endYear = Number.isFinite(item.endYear) ? item.endYear : startYear;
                  const left = timelinePosition(startYear);
                  const width = timelineBarWidth(startYear, endYear);
                  const isActive = focusedEvent?.id === item.id;
                  const barColor = getEventColor(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFocusedEvent(item)}
                      title={`${item.title} (${item.yearLabel || ''})`}
                      className={`timeline-bar ${isActive ? 'active' : ''}`}
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        backgroundColor: barColor,
                        minWidth: '2.4%'
                      }}
                    />
                  );
                })}
                <div className="timeline-axis">
                  {timelineTickYears.map((year) => (
                    <div
                      key={year}
                      className="timeline-axis-mark"
                      style={{ left: `${timelinePosition(year)}%` }}
                    >
                      <span className="timeline-axis-line" />
                      <span className="timeline-axis-label">{formatTimelineYear(year)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <DiaryTimeline
            diaryItems={Array.isArray(diaryEntries) ? diaryEntries : []}
            focusedEvent={focusedEvent}
            onFocusEvent={setFocusedEvent}
            onDeleteDiaryItem={deleteDiaryItem}
            onUpdateDiaryItem={updateDiaryItem}
          />
        </div>

        <div className="right-column">
          <EventSidebar
            events={visibleEvents}
            focusedEvent={focusedEvent}
            onFocusEvent={setFocusedEvent}
            searchQuery={searchQuery}
            wikiLoading={wikiLoading}
            onAddEventToDiary={currentUser ? addEventToDiary : null}
            showOnlyDiary={showOnlyDiary}
          />
        </div>
      </main>
    </div>
  );
}

function formatPeriod(startYear, endYear) {
  if (startYear === endYear) {
    return startYear < 0 ? `${Math.abs(startYear)} a.C.` : `${startYear} d.C.`;
  }

  const start = startYear < 0 ? `${Math.abs(startYear)} a.C.` : `${startYear} d.C.`;
  const end = endYear < 0 ? `${Math.abs(endYear)} a.C.` : `${endYear} d.C.`;

  return `${start} → ${end}`;
}