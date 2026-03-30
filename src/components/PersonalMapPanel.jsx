import { useMemo, useState } from 'react';
import { regionConfig } from '../data/events';

const initialMarkerForm = {
  title: '',
  description: '',
  startYear: '',
  endYear: '',
  lat: '',
  lng: '',
  region: 'mediterranean',
  wikipediaUrl: ''
};

const initialDiaryForm = {
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  isOngoing: false,
  lat: '',
  lng: '',
  cityName: '',
  region: 'mediterranean',
  note: ''
};

function formatPeriod(startYear, endYear) {
  const start = Number(startYear);
  const end = Number(endYear);

  if (start === end) {
    return start < 0 ? `${Math.abs(start)} a.C.` : `${start} d.C.`;
  }

  const startLabel = start < 0 ? `${Math.abs(start)} a.C.` : `${start} d.C.`;
  const endLabel = end < 0 ? `${Math.abs(end)} a.C.` : `${end} d.C.`;
  return `${startLabel} → ${endLabel}`;
}

function formatPreciseDateLabel(startDate, endDate, isOngoing, fallbackStartYear, fallbackEndYear) {
  if (!startDate && !endDate && !isOngoing) {
    return formatPeriod(fallbackStartYear, fallbackEndYear);
  }

  const formatSingle = (dateValue) => {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return dateValue;

    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (startDate && isOngoing) {
    return `${formatSingle(startDate)} → In corso`;
  }

  if (startDate && endDate) {
    if (startDate === endDate) return formatSingle(startDate);
    return `${formatSingle(startDate)} → ${formatSingle(endDate)}`;
  }

  if (startDate) return formatSingle(startDate);
  if (endDate) return formatSingle(endDate);

  return formatPeriod(fallbackStartYear, fallbackEndYear);
}

function inferRegionFromCoords(lat, lng) {
  if (lat >= -35 && lat <= 37 && lng >= -20 && lng <= 60) return 'africaMiddleEast';
  if (lat >= 35 && lat <= 72 && lng >= -12 && lng <= 40) return 'europe';
  if (lat >= 28 && lat <= 47 && lng >= -6 && lng <= 40) return 'mediterranean';
  if (lng >= 40 && lng <= 180) return 'asiaOceania';
  return 'americas';
}

async function geocodeCity(cityName) {
  const query = String(cityName || '').trim();
  if (!query) {
    throw new Error('Inserisci il nome di una città.');
  }

  const url =
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1` +
    `&q=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Errore durante la ricerca della città.');
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Città non trovata.');
  }

  return {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
    displayName: data[0].display_name || query
  };
}

export default function PersonalMapPanel({
  currentUser,
  markers,
  diaryItems,
  suggestedDiaryEvents,
  onAddMarker,
  onDeleteMarker,
  onAddDiaryNote,
  onAddEventToDiary,
  onDeleteDiaryItem
}) {
  const [markerForm, setMarkerForm] = useState(initialMarkerForm);
  const [diaryForm, setDiaryForm] = useState(initialDiaryForm);
  const [markerMessage, setMarkerMessage] = useState('');
  const [diaryMessage, setDiaryMessage] = useState('');
  const [cityLookupMessage, setCityLookupMessage] = useState('');
  const [cityLookupLoading, setCityLookupLoading] = useState(false);

  const sortedDiaryItems = useMemo(
    () => [...diaryItems].sort((a, b) => a.startYear - b.startYear),
    [diaryItems]
  );

  if (!currentUser) {
    return (
      <section className="panel">
        <div className="panel-header">
          <h2>La tua mappa personale</h2>
        </div>
        <p>Accedi o registrati per creare eventi personali e usare MyDiary.</p>
      </section>
    );
  }

  const handleMarkerSubmit = (event) => {
    event.preventDefault();

    if (
      !markerForm.title.trim() ||
      !markerForm.description.trim() ||
      markerForm.startYear === '' ||
      markerForm.endYear === '' ||
      markerForm.lat === '' ||
      markerForm.lng === ''
    ) {
      setMarkerMessage('Compila tutti i campi obbligatori della tua mappa personale.');
      return;
    }

    const payload = {
      title: markerForm.title.trim(),
      description: markerForm.description.trim(),
      startYear: Number(markerForm.startYear),
      endYear: Number(markerForm.endYear),
      lat: Number(markerForm.lat),
      lng: Number(markerForm.lng),
      region: markerForm.region,
      wikipediaUrl: markerForm.wikipediaUrl.trim(),
      sourceLabel: 'Mappa personale'
    };

    payload.yearLabel = formatPeriod(payload.startYear, payload.endYear);

    onAddMarker(payload);
    setMarkerForm(initialMarkerForm);
    setMarkerMessage('Evento personale aggiunto con successo.');
  };

  const handleDiaryCityLookup = async () => {
    try {
      setCityLookupLoading(true);
      setCityLookupMessage('');

      const result = await geocodeCity(diaryForm.cityName);

      setDiaryForm((prev) => ({
        ...prev,
        lat: String(result.lat),
        lng: String(result.lng),
        region: inferRegionFromCoords(result.lat, result.lng)
      }));

      setCityLookupMessage(`Coordinate trovate: ${result.displayName}`);
    } catch (error) {
      setCityLookupMessage(error.message || 'Impossibile trovare la città.');
    } finally {
      setCityLookupLoading(false);
    }
  };

  const handleDiarySubmit = (event) => {
    event.preventDefault();

    if (
      !diaryForm.title.trim() ||
      !diaryForm.description.trim() ||
      !diaryForm.startDate ||
      diaryForm.lat === '' ||
      diaryForm.lng === ''
    ) {
      setDiaryMessage(
        'Compila titolo, descrizione, data inizio e coordinate oppure usa il nome città.'
      );
      return;
    }

    if (!diaryForm.isOngoing && !diaryForm.endDate) {
      setDiaryMessage('Inserisci una data fine oppure seleziona "In corso".');
      return;
    }

    const startDateObj = new Date(diaryForm.startDate);
    const endDateObj = diaryForm.isOngoing ? null : new Date(diaryForm.endDate);

    if (Number.isNaN(startDateObj.getTime())) {
      setDiaryMessage('La data inizio non è valida.');
      return;
    }

    if (!diaryForm.isOngoing && (!endDateObj || Number.isNaN(endDateObj.getTime()))) {
      setDiaryMessage('La data fine non è valida.');
      return;
    }

    const startYear = startDateObj.getFullYear();
    const endYear = diaryForm.isOngoing ? new Date().getFullYear() : endDateObj.getFullYear();

    const payload = {
      title: diaryForm.title.trim(),
      description: diaryForm.description.trim(),
      startYear,
      endYear,
      startDate: diaryForm.startDate,
      endDate: diaryForm.isOngoing ? '' : diaryForm.endDate,
      isOngoing: diaryForm.isOngoing,
      lat: Number(diaryForm.lat),
      lng: Number(diaryForm.lng),
      region: diaryForm.region,
      wikipediaUrl: '',
      cityName: diaryForm.cityName.trim(),
      diaryNote: diaryForm.note.trim(),
      sourceLabel: 'MyDiary'
    };

    payload.yearLabel = formatPreciseDateLabel(
      payload.startDate,
      payload.endDate,
      payload.isOngoing,
      payload.startYear,
      payload.endYear
    );

    onAddDiaryNote(payload);
    setDiaryForm(initialDiaryForm);
    setDiaryMessage('Nota aggiunta a MyDiary.');
    setCityLookupMessage('');
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>La tua mappa personale</h2>
        <span>{markers.length}</span>
      </div>

      <form onSubmit={handleMarkerSubmit} style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Titolo evento personale"
          value={markerForm.title}
          onChange={(e) => setMarkerForm((prev) => ({ ...prev, title: e.target.value }))}
        />
        <textarea
          placeholder="Descrizione"
          value={markerForm.description}
          onChange={(e) => setMarkerForm((prev) => ({ ...prev, description: e.target.value }))}
          rows={3}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input
            type="number"
            placeholder="Anno da"
            value={markerForm.startYear}
            onChange={(e) => setMarkerForm((prev) => ({ ...prev, startYear: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Anno a"
            value={markerForm.endYear}
            onChange={(e) => setMarkerForm((prev) => ({ ...prev, endYear: e.target.value }))}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input
            type="number"
            step="0.0001"
            placeholder="Latitudine"
            value={markerForm.lat}
            onChange={(e) => setMarkerForm((prev) => ({ ...prev, lat: e.target.value }))}
          />
          <input
            type="number"
            step="0.0001"
            placeholder="Longitudine"
            value={markerForm.lng}
            onChange={(e) => setMarkerForm((prev) => ({ ...prev, lng: e.target.value }))}
          />
        </div>
        <select
          value={markerForm.region}
          onChange={(e) => setMarkerForm((prev) => ({ ...prev, region: e.target.value }))}
        >
          {Object.values(regionConfig).map((region) => (
            <option key={region.id} value={region.id}>
              {region.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Link Wikipedia opzionale"
          value={markerForm.wikipediaUrl}
          onChange={(e) => setMarkerForm((prev) => ({ ...prev, wikipediaUrl: e.target.value }))}
        />
        <button type="submit">Aggiungi alla tua mappa</button>
        {markerMessage && <small>{markerMessage}</small>}
      </form>

      <div className="panel-header" style={{ marginTop: '10px' }}>
        <h2>MyDiary</h2>
        <span>{diaryItems.length}</span>
      </div>

      <p style={{ marginTop: 0 }}>
        Qui puoi salvare luoghi in cui hai vissuto, eventi che vuoi ricordare e note personali
        legate a un periodo.
      </p>

      <form onSubmit={handleDiarySubmit} style={{ display: 'grid', gap: '10px', marginBottom: '18px' }}>
        <input
          type="text"
          placeholder="Titolo nota MyDiary"
          value={diaryForm.title}
          onChange={(e) => setDiaryForm((prev) => ({ ...prev, title: e.target.value }))}
        />

        <textarea
          placeholder="Descrizione / cosa vuoi ricordare"
          value={diaryForm.description}
          onChange={(e) => setDiaryForm((prev) => ({ ...prev, description: e.target.value }))}
          rows={3}
        />

        <textarea
          placeholder="Nota personale facoltativa"
          value={diaryForm.note}
          onChange={(e) => setDiaryForm((prev) => ({ ...prev, note: e.target.value }))}
          rows={2}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ display: 'grid', gap: '6px' }}>
            <label>Data inizio</label>
            <input
              type="date"
              value={diaryForm.startDate}
              onChange={(e) => setDiaryForm((prev) => ({ ...prev, startDate: e.target.value }))}
            />
          </div>
          <div style={{ display: 'grid', gap: '6px' }}>
            <label>Data fine</label>
            <input
              type="date"
              value={diaryForm.endDate}
              disabled={diaryForm.isOngoing}
              onChange={(e) => setDiaryForm((prev) => ({ ...prev, endDate: e.target.value }))}
            />
          </div>
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 0'
          }}
        >
          <input
            type="checkbox"
            checked={diaryForm.isOngoing}
            onChange={(e) =>
              setDiaryForm((prev) => ({
                ...prev,
                isOngoing: e.target.checked,
                endDate: e.target.checked ? '' : prev.endDate
              }))
            }
          />
          <span>In corso</span>
        </label>

        <div style={{ display: 'grid', gap: '6px' }}>
          <label>Nome città</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
            <input
              type="text"
              placeholder="Es. Madrid, Spinazzola, Bari..."
              value={diaryForm.cityName}
              onChange={(e) => setDiaryForm((prev) => ({ ...prev, cityName: e.target.value }))}
            />
            <button
              type="button"
              onClick={handleDiaryCityLookup}
              disabled={cityLookupLoading}
              style={{ whiteSpace: 'nowrap' }}
            >
              {cityLookupLoading ? 'Cerco...' : 'Trova coordinate'}
            </button>
          </div>
          {cityLookupMessage && <small>{cityLookupMessage}</small>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input
            type="number"
            step="0.0001"
            placeholder="Latitudine"
            value={diaryForm.lat}
            onChange={(e) => setDiaryForm((prev) => ({ ...prev, lat: e.target.value }))}
          />
          <input
            type="number"
            step="0.0001"
            placeholder="Longitudine"
            value={diaryForm.lng}
            onChange={(e) => setDiaryForm((prev) => ({ ...prev, lng: e.target.value }))}
          />
        </div>

        <select
          value={diaryForm.region}
          onChange={(e) => setDiaryForm((prev) => ({ ...prev, region: e.target.value }))}
        >
          {Object.values(regionConfig).map((region) => (
            <option key={region.id} value={region.id}>
              {region.label}
            </option>
          ))}
        </select>

        <button type="submit">Aggiungi nota a MyDiary</button>
        {diaryMessage && <small>{diaryMessage}</small>}
      </form>

      <div style={{ marginBottom: '18px' }}>
        <h3 style={{ marginBottom: '10px' }}>Suggerimenti da aggiungere a MyDiary</h3>
        <div style={{ display: 'grid', gap: '10px' }}>
          {suggestedDiaryEvents.length > 0 ? (
            suggestedDiaryEvents.map((event) => (
              <div
                key={`suggestion-${event.id}`}
                style={{
                  padding: '12px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <strong>{event.title}</strong>
                <div style={{ margin: '6px 0' }}>{event.yearLabel}</div>
                <small style={{ display: 'block', marginBottom: '10px' }}>
                  {String(event.description || '').slice(0, 140)}...
                </small>
                <button type="button" onClick={() => onAddEventToDiary(event)}>
                  Aggiungi a MyDiary
                </button>
              </div>
            ))
          ) : (
            <p>Nessun suggerimento nel periodo attuale.</p>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        <h3 style={{ marginBottom: 0 }}>Elementi salvati in MyDiary</h3>
        {sortedDiaryItems.length > 0 ? (
          sortedDiaryItems.map((entry) => (
            <div
              key={entry.id}
              style={{
                padding: '12px',
                borderRadius: '14px',
                background: 'rgba(124,58,237,0.10)',
                border: '1px solid rgba(124,58,237,0.24)'
              }}
            >
              <strong>{entry.title}</strong>
              <div style={{ margin: '6px 0' }}>{entry.yearLabel}</div>
              {entry.cityName && (
                <small style={{ display: 'block', marginBottom: '8px' }}>
                  <strong>Città:</strong> {entry.cityName}
                </small>
              )}
              <small style={{ display: 'block', marginBottom: '8px' }}>
                {entry.description}
              </small>
              {entry.diaryNote && (
                <small style={{ display: 'block', marginBottom: '8px' }}>
                  <strong>Nota:</strong> {entry.diaryNote}
                </small>
              )}
              <button type="button" onClick={() => onDeleteDiaryItem(entry.id)}>
                Elimina da MyDiary
              </button>
            </div>
          ))
        ) : (
          <p>Non hai ancora aggiunto nulla a MyDiary.</p>
        )}
      </div>

      <div style={{ display: 'grid', gap: '10px', marginTop: '18px' }}>
        <h3 style={{ marginBottom: 0 }}>Eventi della tua mappa personale</h3>
        {markers.length > 0 ? (
          markers.map((marker) => (
            <div
              key={marker.id}
              style={{
                padding: '12px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <strong>{marker.title}</strong>
              <div style={{ margin: '6px 0' }}>{marker.yearLabel}</div>
              <small style={{ display: 'block', marginBottom: '8px' }}>{marker.description}</small>
              <button type="button" onClick={() => onDeleteMarker(marker.id)}>
                Elimina evento personale
              </button>
            </div>
          ))
        ) : (
          <p>Non hai ancora creato eventi nella tua mappa personale.</p>
        )}
      </div>
    </section>
  );
}