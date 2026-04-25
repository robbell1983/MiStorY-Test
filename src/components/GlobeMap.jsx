import { useEffect, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { regionConfig } from '../data/events';

const guessEventIcon = (event) => {
  const text = `${event.title || ''} ${event.description || ''}`.toLowerCase();

  if (/guerra|battaglia|invasione|conflitto|assedio|difesa|attacco/i.test(text)) {
    return { symbol: '⚔️', label: 'Guerra', color: '#d90016' };
  }
  if (/musica|concerto|sinfonia|opera|cantante|canzone|orchestra|nota/i.test(text)) {
    return { symbol: '🎵', label: 'Musica', color: '#0f766e' };
  }
  if (/libro|scrittura|letteratura|biblioteca|pergamena|codice/i.test(text)) {
    return { symbol: '📖', label: 'Letteratura', color: '#1d4ed8' };
  }
  if (/invenzione|scoperta|tecnologia|scienza|progresso/i.test(text)) {
    return { symbol: '💡', label: 'Scienza', color: '#f59e0b' };
  }
  if (/citt[\u00E0ae]|impero|regno|stato|civilt[\u00E0ae]|cultura/i.test(text)) {
    return { symbol: '🏛️', label: 'Civiltà', color: '#a855f7' };
  }
  return { symbol: '🌍', label: 'Generale', color: '#14b8a6' };
};

const eventLegend = [
  { id: 'Guerra', symbol: '⚔️', label: 'Guerra', color: '#d90016' },
  { id: 'Musica', symbol: '🎵', label: 'Musica', color: '#0f766e' },
  { id: 'Letteratura', symbol: '📖', label: 'Letteratura', color: '#1d4ed8' },
  { id: 'Scienza', symbol: '💡', label: 'Scienza', color: '#f59e0b' },
  { id: 'Civiltà', symbol: '🏛️', label: 'Civiltà', color: '#a855f7' },
  { id: 'Generale', symbol: '🌍', label: 'Generale', color: '#14b8a6' }
];

export default function GlobeMap({ events, focusedEvent, onFocusEvent }) {
  const globeRef = useRef();
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 900, height: 620 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeCategories, setActiveCategories] = useState(eventLegend.map((item) => item.id));

  useEffect(() => {
    if (!wrapperRef.current) return undefined;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = Math.max(360, Math.floor(entry.contentRect.width));
      const height = Math.max(420, Math.floor(width * 0.68));
      setDimensions({ width, height });
    });

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!focusedEvent || !globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: focusedEvent.lat,
        lng: focusedEvent.lng,
        altitude: 0.9
      },
      1500
    );
  }, [focusedEvent]);

  const activeCategorySet = useMemo(() => new Set(activeCategories), [activeCategories]);

  const pointData = useMemo(() => {
    return events.map((event) => {
      const icon = guessEventIcon(event);
      const isActiveCategory = activeCategorySet.has(icon.label);
      return {
        ...event,
        size: focusedEvent?.id === event.id ? 0.22 : isActiveCategory ? 0.14 : 0.09,
        color: isActiveCategory ? (regionConfig[event.region]?.color || '#ffffff') : '#4b5563',
        opacity: isActiveCategory ? 1 : 0.35,
        icon
      };
    });
  }, [events, focusedEvent, activeCategorySet]);

  const labelData = useMemo(() => {
    if (!focusedEvent) return [];

    return [
      {
        id: focusedEvent.id,
        lat: focusedEvent.lat,
        lng: focusedEvent.lng,
        title: focusedEvent.title
      }
    ];
  }, [focusedEvent]);

  const currentHover = hoveredPoint || focusedEvent;
  const currentIcon = currentHover ? (currentHover.icon || guessEventIcon(currentHover)) : null;

  const resetView = () => {
    if (!globeRef.current) return;
    globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1400);
    setHoveredPoint(null);
    if (typeof onFocusEvent === 'function') onFocusEvent(null);
  };

  return (
    <section className="card globe-card">
      <div className="section-header">
        <div>
          <h2>Mappamondo interattivo</h2>
          <p>Ruota il globo, zooma e clicca sui punti per leggere gli eventi.</p>
        </div>
        <button className="primary-button" onClick={resetView}>Reset view</button>
      </div>

      <div className="legend-grid">
        {eventLegend.map((item) => {
          const isActive = activeCategorySet.has(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={`legend-chip ${isActive ? 'active-legend' : 'inactive-legend'}`}
              onClick={() => {
                setActiveCategories((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((category) => category !== item.id)
                    : [...prev, item.id]
                );
              }}
              style={{
                border: `1px solid ${item.color}`,
                background: isActive ? 'rgba(15, 23, 42, 0.88)' : 'rgba(15, 23, 42, 0.5)'
              }}
              title={isActive ? `Disattiva ${item.label}` : `Evidenzia ${item.label}`}
            >
              <span className={`legend-dot ${isActive ? 'legend-dot-active' : ''}`} style={{ background: item.color }}>
                {isActive ? '✓' : ''}
              </span>
              {item.symbol} {item.label}
            </button>
          );
        })}
      </div>

      <div className="globe-shell" ref={wrapperRef}>
        <Globe
          ref={globeRef}
          onPointHover={(point) => setHoveredPoint(point || null)}
          onPointClick={(point) => onFocusEvent(point)}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={pointData}
          pointLat="lat"
          pointLng="lng"
          pointAltitude="size"
          pointRadius={0.15}
          pointColor="color"
          pointResolution={24}
          pointLabel={(point) => {
            const active = hoveredPoint?.id === point.id || focusedEvent?.id === point.id;
            if (!active) return '';
            const icon = point.icon || guessEventIcon(point);
            return `
            <div style="padding:12px;max-width:320px;background:rgba(8,14,30,0.92);border:1px solid rgba(255,255,255,0.16);border-radius:18px;box-shadow:0 16px 35px rgba(0,0,0,0.42);font-family:system-ui, sans-serif;color:#f8fafc;line-height:1.5;">
              <div style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:${icon.color};color:#fff;font-size:1.3rem;margin-bottom:8px;">${icon.symbol}</div>
              <div style="font-size:1rem;font-weight:700;margin-bottom:6px;color:#f8fafc;text-shadow:0 1px 3px rgba(0,0,0,0.45);">${point.title}</div>
              <div style="font-size:0.92rem;color:#cbd5e1;margin-bottom:4px;">${point.yearLabel || ''}</div>
              <div style="font-size:0.86rem;color:#e2e8f0;white-space:normal;">${point.description || ''}</div>
            </div>
          `;
          }}
          labelsData={labelData}
          labelLat="lat"
          labelLng="lng"
          labelText="title"
          labelSize={1.7}
          labelDotRadius={0.5}
          labelAltitude={0.04}
          labelColor={() => '#fefefe'}
        />
      </div>

      {currentHover && (
        <div className="globe-event-card">
          <div className="globe-event-row">
            <span className="globe-event-badge" style={{ background: currentIcon?.color || '#2563eb' }}>
              {currentIcon?.symbol || '🌍'}
            </span>
            <div>
              <h3 className="globe-event-title">{currentHover.title}</h3>
              <p className="globe-event-meta">{currentHover.yearLabel || 'Periodo non disponibile'}</p>
            </div>
          </div>
          <p className="globe-event-description">{currentHover.description || 'Nessuna descrizione disponibile.'}</p>
        </div>
      )}

    </section>
  );
}