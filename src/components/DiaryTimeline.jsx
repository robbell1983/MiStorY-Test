import { useMemo, useState } from 'react';

function formatSingleDate(dateValue) {
  if (!dateValue) return '';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function buildYearLabel(item) {
  if (item.startDate && item.isOngoing) {
    return `${formatSingleDate(item.startDate)} → In corso`;
  }

  if (item.startDate && item.endDate) {
    if (item.startDate === item.endDate) return formatSingleDate(item.startDate);
    return `${formatSingleDate(item.startDate)} → ${formatSingleDate(item.endDate)}`;
  }

  if (item.startYear === item.endYear) {
    return item.startYear < 0 ? `${Math.abs(item.startYear)} a.C.` : `${item.startYear} d.C.`;
  }

  const start = item.startYear < 0 ? `${Math.abs(item.startYear)} a.C.` : `${item.startYear} d.C.`;
  const end = item.endYear < 0 ? `${Math.abs(item.endYear)} a.C.` : `${item.endYear} d.C.`;
  return `${start} → ${end}`;
}

function formatYearLabelValue(year) {
  if (year === 0) return '0';
  if (year < 0) return `${Math.abs(year)} a.C.`;
  return `${year}`;
}

function buildInitialForm(item) {
  return {
    title: item.title || '',
    description: item.description || '',
    diaryNote: item.diaryNote || '',
    cityName: item.cityName || '',
    startDate: item.startDate || '',
    endDate: item.endDate || '',
    isOngoing: Boolean(item.isOngoing),
    startYear: item.startYear ?? '',
    endYear: item.endYear ?? '',
    lat: item.lat ?? '',
    lng: item.lng ?? ''
  };
}

export default function DiaryTimeline({
  diaryItems = [],
  focusedEvent,
  onFocusEvent,
  onDeleteDiaryItem,
  onUpdateDiaryItem
}) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const safeDiaryItems = Array.isArray(diaryItems) ? diaryItems : [];

  const sortedItems = [...safeDiaryItems].sort((a, b) => {
    if ((a.startYear ?? 0) !== (b.startYear ?? 0)) {
      return (a.startYear ?? 0) - (b.startYear ?? 0);
    }
    return (a.endYear ?? 0) - (b.endYear ?? 0);
  });





  const startEditing = (item) => {
    setEditingId(item.id);
    setEditForm(buildInitialForm(item));
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const saveEditing = (item) => {
    if (!editForm?.title?.trim() || !editForm?.description?.trim()) {
      return;
    }

    let nextStartYear = Number(editForm.startYear);
    let nextEndYear = Number(editForm.endYear);

    if (editForm.startDate) {
      const startDateObj = new Date(editForm.startDate);
      if (!Number.isNaN(startDateObj.getTime())) {
        nextStartYear = startDateObj.getFullYear();
      }
    }

    if (editForm.isOngoing) {
      nextEndYear = new Date().getFullYear();
    } else if (editForm.endDate) {
      const endDateObj = new Date(editForm.endDate);
      if (!Number.isNaN(endDateObj.getTime())) {
        nextEndYear = endDateObj.getFullYear();
      }
    }

    const updatedItem = {
      ...item,
      title: editForm.title.trim(),
      description: editForm.description.trim(),
      diaryNote: editForm.diaryNote.trim(),
      cityName: editForm.cityName.trim(),
      startDate: editForm.startDate,
      endDate: editForm.isOngoing ? '' : editForm.endDate,
      isOngoing: editForm.isOngoing,
      startYear: Number.isFinite(nextStartYear) ? nextStartYear : item.startYear,
      endYear: Number.isFinite(nextEndYear) ? nextEndYear : item.endYear,
      lat: Number(editForm.lat),
      lng: Number(editForm.lng)
    };

    updatedItem.yearLabel = buildYearLabel(updatedItem);

    if (typeof onUpdateDiaryItem === 'function') {
      onUpdateDiaryItem(updatedItem);
    }

    setEditingId(null);
    setEditForm(null);
  };

  return (
    <section
      className="card"
      style={{
        marginTop: '18px',
        padding: '18px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Linea del tempo grafica · MyDiary</h2>
          <p style={{ margin: '6px 0 0 0', opacity: 0.82 }}>
            I tuoi eventi e le tue note salvate, ordinati nel tempo.
          </p>
          <div style={{ marginTop: '10px', marginBottom: '6px' }}>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '10px', width: '100%', borderRadius: '999px', background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)' }} />
              {(() => {
                const minYear = sortedItems[0]?.startYear ?? 0;
                const maxYear = sortedItems[sortedItems.length - 1]?.endYear ?? new Date().getFullYear();
                const start = Math.min(minYear, 0);
                const end = Math.max(maxYear, 2000);
                const markers = [0, 200, 1500, 1700, 1947, 1983, 1991, 2000].filter((y) => y >= start && y <= end);
                return markers.map((year) => {
                  const left = ((year - start) / (end - start)) * 100;
                  return (
                    <div key={year} style={{ position: 'absolute', left: `${left}%`, top: '-6px', transform: 'translateX(-50%)', fontSize: '0.67rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                      {year}
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        <span
          style={{
            background: 'rgba(124,58,237,0.18)',
            color: '#e9d5ff',
            padding: '6px 12px',
            borderRadius: '999px',
            fontWeight: 700
          }}
        >
          {sortedItems.length} elementi
        </span>
      </div>

      {sortedItems.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px' }}>
            Intervallo temporale: <strong>{formatYearLabelValue(sortedItems[0]?.startYear ?? 0)}</strong> → <strong>{formatYearLabelValue(sortedItems[sortedItems.length - 1]?.endYear ?? new Date().getFullYear())}</strong>
          </div>

          <div style={{ position: 'relative', marginBottom: '8px', height: '14px' }}>
            <div
              style={{
                width: '100%',
                height: '14px',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)',
                boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)',
                position: 'relative'
              }}
            />

            {(() => {
              const minYear = sortedItems[0]?.startYear ?? 0;
              const maxYear = sortedItems[sortedItems.length - 1]?.endYear ?? new Date().getFullYear();
              const start = Math.min(minYear, 0);
              const end = Math.max(maxYear, 2000);
              const markers = [0, 200, 1500, 1700, 1947, 1983, 1991, 2000].filter((y) => y >= start && y <= end);

              return markers.map((year) => {
                const left = ((year - start) / (end - start)) * 100;
                return (
                  <div key={year} style={{ position: 'absolute', left: `${left}%`, top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.8)', transform: 'translateX(-0.5px)' }} />
                );
              });
            })()}
          </div>

          <div style={{ position: 'relative', height: '24px', marginTop: '-2px' }}>
            {(() => {
              const minYear = sortedItems[0]?.startYear ?? 0;
              const maxYear = sortedItems[sortedItems.length - 1]?.endYear ?? new Date().getFullYear();
              const start = Math.min(minYear, 0);
              const end = Math.max(maxYear, 2000);
              const markers = [0, 200, 1500, 1700, 1947, 1983, 1991, 2000].filter((y) => y >= start && y <= end);

              return markers.map((year) => {
                const left = ((year - start) / (end - start)) * 100;
                return (
                  <div
                    key={year}
                    style={{
                      position: 'absolute',
                      left: `${left}%`,
                      top: 0,
                      transform: 'translateX(-50%)',
                      color: '#e2e8f0',
                      fontSize: '0.72rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {year >= 0 ? year : `${Math.abs(year)} a.C.`}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}

      {sortedItems.length === 0 ? (
        <div
          style={{
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)'
          }}
        >
          Non hai ancora elementi in MyDiary.
        </div>
      ) : (
        <div style={{ position: 'relative', paddingLeft: '18px' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '8px',
              width: '3px',
              borderRadius: '999px',
              background: 'linear-gradient(180deg, #7c3aed 0%, #2563eb 100%)'
            }}
          />

          <div style={{ display: 'grid', gap: '16px' }}>
            {sortedItems.map((item, index) => {
              const isActive = focusedEvent?.id === item.id;
              const isEditing = editingId === item.id;
              const offset = index % 2 === 0 ? 8 : -8;

              return (
                <div
                  key={item.id}
                  style={{
                    position: 'relative',
                    paddingLeft: '18px',
                    transform: `translateY(${offset}px)`,
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2px',
                      top: '18px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '999px',
                      border: '3px solid #0f172a',
                      background: isActive ? '#f59e0b' : '#7c3aed',
                      boxShadow: isActive
                        ? '0 0 0 4px rgba(245,158,11,0.18)'
                        : '0 0 0 4px rgba(124,58,237,0.16)'
                    }}
                  />

                  <div
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      background: isActive
                        ? 'rgba(37,99,235,0.14)'
                        : 'rgba(255,255,255,0.035)',
                      border: isActive
                        ? '1px solid rgba(59,130,246,0.45)'
                        : '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    {!isEditing ? (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: '12px',
                            flexWrap: 'wrap'
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontWeight: 800,
                                fontSize: '1.04rem',
                                marginBottom: '6px'
                              }}
                            >
                              {item.title}
                            </div>

                            <div
                              style={{
                                fontSize: '0.92rem',
                                color: '#cbd5e1',
                                marginBottom: '8px'
                              }}
                            >
                              {item.yearLabel}
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              flexWrap: 'wrap'
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => onFocusEvent?.(item)}
                              style={{
                                border: 'none',
                                borderRadius: '10px',
                                padding: '9px 12px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                background: '#2563eb',
                                color: '#fff'
                              }}
                            >
                              Vai sulla mappa
                            </button>

                            <button
                              type="button"
                              onClick={() => startEditing(item)}
                              style={{
                                border: 'none',
                                borderRadius: '10px',
                                padding: '9px 12px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                background: '#0f766e',
                                color: '#fff'
                              }}
                            >
                              Modifica
                            </button>

                            <button
                              type="button"
                              onClick={() => onDeleteDiaryItem?.(item.id)}
                              style={{
                                border: 'none',
                                borderRadius: '10px',
                                padding: '9px 12px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                background: '#7f1d1d',
                                color: '#fff'
                              }}
                            >
                              Elimina da MyDiary
                            </button>
                          </div>
                        </div>

                        <div style={{ marginTop: '10px', lineHeight: 1.55 }}>
                          {item.description}
                        </div>

                        {item.diaryNote && (
                          <div
                            style={{
                              marginTop: '10px',
                              padding: '10px 12px',
                              borderRadius: '12px',
                              background: 'rgba(124,58,237,0.12)',
                              color: '#e9d5ff'
                            }}
                          >
                            <strong>Nota:</strong> {item.diaryNote}
                          </div>
                        )}

                        {item.cityName && (
                          <div
                            style={{
                              marginTop: '10px',
                              fontSize: '0.9rem',
                              opacity: 0.9
                            }}
                          >
                            <strong>Città:</strong> {item.cityName}
                          </div>
                        )}

                        <div
                          style={{
                            marginTop: '10px',
                            fontSize: '0.85rem',
                            opacity: 0.8
                          }}
                        >
                          Coordinate: {item.lat?.toFixed?.(4)}, {item.lng?.toFixed?.(4)}
                        </div>
                      </>
                    ) : (
                      <div style={{ display: 'grid', gap: '10px' }}>
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, title: e.target.value }))
                          }
                          placeholder="Titolo"
                        />

                        <textarea
                          rows={3}
                          value={editForm.description}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, description: e.target.value }))
                          }
                          placeholder="Descrizione"
                        />

                        <textarea
                          rows={2}
                          value={editForm.diaryNote}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, diaryNote: e.target.value }))
                          }
                          placeholder="Nota personale"
                        />

                        <input
                          type="text"
                          value={editForm.cityName}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, cityName: e.target.value }))
                          }
                          placeholder="Città"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <div style={{ display: 'grid', gap: '6px' }}>
                            <label>Data inizio</label>
                            <input
                              type="date"
                              value={editForm.startDate}
                              onChange={(e) =>
                                setEditForm((prev) => ({ ...prev, startDate: e.target.value }))
                              }
                            />
                          </div>

                          <div style={{ display: 'grid', gap: '6px' }}>
                            <label>Data fine</label>
                            <input
                              type="date"
                              value={editForm.endDate}
                              disabled={editForm.isOngoing}
                              onChange={(e) =>
                                setEditForm((prev) => ({ ...prev, endDate: e.target.value }))
                              }
                            />
                          </div>
                        </div>

                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={editForm.isOngoing}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                isOngoing: e.target.checked,
                                endDate: e.target.checked ? '' : prev.endDate
                              }))
                            }
                          />
                          <span>In corso</span>
                        </label>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <input
                            type="number"
                            value={editForm.startYear}
                            onChange={(e) =>
                              setEditForm((prev) => ({ ...prev, startYear: e.target.value }))
                            }
                            placeholder="Anno inizio"
                          />
                          <input
                            type="number"
                            value={editForm.endYear}
                            onChange={(e) =>
                              setEditForm((prev) => ({ ...prev, endYear: e.target.value }))
                            }
                            placeholder="Anno fine"
                            disabled={editForm.isOngoing}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <input
                            type="number"
                            step="0.0001"
                            value={editForm.lat}
                            onChange={(e) =>
                              setEditForm((prev) => ({ ...prev, lat: e.target.value }))
                            }
                            placeholder="Latitudine"
                          />
                          <input
                            type="number"
                            step="0.0001"
                            value={editForm.lng}
                            onChange={(e) =>
                              setEditForm((prev) => ({ ...prev, lng: e.target.value }))
                            }
                            placeholder="Longitudine"
                          />
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button
                            type="button"
                            onClick={() => saveEditing(item)}
                            style={{
                              border: 'none',
                              borderRadius: '10px',
                              padding: '9px 12px',
                              cursor: 'pointer',
                              fontWeight: 700,
                              background: '#2563eb',
                              color: '#fff'
                            }}
                          >
                            Salva modifiche
                          </button>

                          <button
                            type="button"
                            onClick={cancelEditing}
                            style={{
                              border: 'none',
                              borderRadius: '10px',
                              padding: '9px 12px',
                              cursor: 'pointer',
                              fontWeight: 700,
                              background: '#334155',
                              color: '#fff'
                            }}
                          >
                            Annulla
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
