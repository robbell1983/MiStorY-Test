function formatCoords(lat, lng) {
  if (typeof lat !== 'number' || typeof lng !== 'number') return '';
  return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
}

function truncateText(text, maxLength = 180) {
  const value = String(text || '');
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}...`;
}

export default function EventSidebar({
  events,
  focusedEvent,
  onFocusEvent,
  searchQuery,
  wikiLoading,
  onAddEventToDiary,
  showOnlyDiary
}) {
  return (
    <aside className="panel sidebar-panel">
      <div className="panel-header">
        <h2>{showOnlyDiary ? 'MyDiary' : 'Eventi visibili'}</h2>
        <span>{events.length}</span>
      </div>

      {searchQuery?.trim() && !showOnlyDiary && (
        <div
          style={{
            marginBottom: '16px',
            padding: '12px 14px',
            borderRadius: '14px',
            background: 'rgba(37,99,235,0.12)',
            border: '1px solid rgba(59,130,246,0.25)'
          }}
        >
          <strong>Ricerca:</strong> {searchQuery}
          {wikiLoading && <div style={{ marginTop: '6px' }}>Caricamento risultati...</div>}
        </div>
      )}

      {focusedEvent ? (
        <div
          className="focused-card"
          style={{
            marginBottom: '18px',
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '6px 10px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: 'rgba(37,99,235,0.16)',
                marginBottom: '10px'
              }}
            >
              Evento selezionato
            </div>

            <h3 style={{ margin: 0, lineHeight: 1.2 }}>{focusedEvent.title}</h3>
          </div>

          {focusedEvent.imageUrl && (
            <img
              src={focusedEvent.imageUrl}
              alt={focusedEvent.title}
              style={{
                width: '100%',
                borderRadius: '14px',
                marginBottom: '14px',
                objectFit: 'cover',
                maxHeight: '220px',
                display: 'block'
              }}
            />
          )}

          <div style={{ display: 'grid', gap: '8px', marginBottom: '12px' }}>
            <div>
              <strong>Periodo:</strong> {focusedEvent.yearLabel || 'Non disponibile'}
            </div>

            <div>
              <strong>Coordinate:</strong>{' '}
              {formatCoords(focusedEvent.lat, focusedEvent.lng) || 'Non disponibili'}
            </div>

            <div>
              <strong>Origine:</strong>{' '}
              {focusedEvent.sourceLabel ||
                (focusedEvent.isWikipedia
                  ? 'Wikipedia'
                  : focusedEvent.isAiGenerated
                    ? 'Generato'
                    : 'Archivio interno')}
            </div>
          </div>

          <p
            style={{
              margin: '0 0 14px 0',
              lineHeight: 1.6,
              fontSize: '0.98rem'
            }}
          >
            {focusedEvent.description || 'Nessuna descrizione disponibile.'}
          </p>

          {focusedEvent.diaryNote && (
            <p style={{ marginTop: 0, fontStyle: 'italic' }}>
              <strong>Nota MyDiary:</strong> {focusedEvent.diaryNote}
            </p>
          )}

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {focusedEvent.wikipediaUrl && (
              <a
                href={focusedEvent.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  background: '#2563eb',
                  color: '#fff'
                }}
              >
                Apri la scheda Wikipedia
              </a>
            )}

            {onAddEventToDiary && !focusedEvent.isDiaryItem && (
              <button
                type="button"
                onClick={() => onAddEventToDiary(focusedEvent)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: 700,
                  background: '#7c3aed',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Aggiungi a MyDiary
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            marginBottom: '18px',
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <p style={{ margin: 0 }}>Seleziona un evento sul globo o nella lista per vedere i dettagli.</p>
        </div>
      )}

      <div className="event-list" style={{ display: 'grid', gap: '10px' }}>
        {events.map((event) => {
          const isActive = focusedEvent?.id === event.id;

          return (
            <button
              key={event.id}
              type="button"
              className={`event-item ${isActive ? 'active' : ''}`}
              onClick={() => onFocusEvent(event)}
              style={{
                textAlign: 'left',
                border: isActive ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '14px',
                background: isActive ? 'rgba(37,99,235,0.14)' : 'rgba(255,255,255,0.03)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <strong style={{ lineHeight: 1.25 }}>{event.title}</strong>

                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  <span style={{ fontWeight: 700 }}>Periodo:</span> {event.yearLabel || 'N/D'}
                </div>

                <div style={{ fontSize: '0.82rem', opacity: 0.82 }}>
                  <span style={{ fontWeight: 700 }}>Coordinate:</span> {formatCoords(event.lat, event.lng)}
                </div>

                <small style={{ lineHeight: 1.45, opacity: 0.92 }}>
                  {truncateText(event.description, 160)}
                </small>

                {event.diaryNote && (
                  <small style={{ lineHeight: 1.45, opacity: 0.92 }}>
                    <strong>Nota:</strong> {truncateText(event.diaryNote, 100)}
                  </small>
                )}

                {event.isDiaryItem && (
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#c4b5fd'
                    }}
                  >
                    Salvato in MyDiary
                  </span>
                )}
              </div>
            </button>
          );
        })}

        {!events.length && (
          <div
            style={{
              padding: '16px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.04)'
            }}
          >
            Nessun evento trovato per i filtri attuali.
          </div>
        )}
      </div>
    </aside>
  );
}