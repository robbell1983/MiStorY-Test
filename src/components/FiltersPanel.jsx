import { regionConfig } from '../data/events';

export default function FiltersPanel({
  minYear,
  maxYear,
  yearRange,
  setYearRange,
  selectedEpoch,
  setSelectedEpoch,
  epochOptions,
  selectedRegions,
  toggleRegion,
  visibleCount,
  totalCount,
  searchQuery,
  setSearchQuery,
  showOnlyDiary,
  onToggleDiaryView,
  diaryCount
}) {
  const handleStartChange = (value) => {
    const nextValue = Number(value);
    setYearRange([Math.min(nextValue, yearRange[1]), yearRange[1]]);
  };

  const handleEndChange = (value) => {
    const nextValue = Number(value);
    setYearRange([yearRange[0], Math.max(nextValue, yearRange[0])]);
  };

  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} a.C.`;
    return `${year} d.C.`;
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Filtri</h2>
        <span>
          {visibleCount} / {totalCount}
        </span>
      </div>

      <div className="filters-group">
        <label>Da</label>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={yearRange[0]}
          onChange={(e) => handleStartChange(e.target.value)}
        />
        <div className="year-readout">
          <input
            type="number"
            value={yearRange[0]}
            onChange={(e) => handleStartChange(e.target.value)}
          />
          <strong>{formatYear(yearRange[0])}</strong>
        </div>
      </div>

      <div className="filters-group">
        <label>A</label>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={yearRange[1]}
          onChange={(e) => handleEndChange(e.target.value)}
        />
        <div className="year-readout">
          <input
            type="number"
            value={yearRange[1]}
            onChange={(e) => handleEndChange(e.target.value)}
          />
          <strong>{formatYear(yearRange[1])}</strong>
        </div>
      </div>

      <div className="filters-group">
        <label>Cerca per città o evento</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Es. Madrid, Roma, Assiri..."
        />
      </div>

      <div className="filters-group">
        <label>Epoca storica</label>
        <select value={selectedEpoch} onChange={(e) => setSelectedEpoch(e.target.value)}>
          {epochOptions.map((epoch) => (
            <option key={epoch.id} value={epoch.id}>
              {epoch.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filters-group">
        <label>Aree geografiche</label>
        <div style={{ display: 'grid', gap: '12px' }}>
          {Object.values(regionConfig).map((region) => {
            const active = !showOnlyDiary && selectedRegions.includes(region.id);

            return (
              <button
                key={region.id}
                type="button"
                onClick={() => toggleRegion(region.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '14px 18px',
                  cursor: 'pointer',
                  background: active ? '#2563eb' : '#14213d',
                  color: 'white',
                  fontSize: '1rem'
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    background: region.color,
                    display: 'inline-block'
                  }}
                />
                <span>{region.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={onToggleDiaryView}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              border: 'none',
              borderRadius: '999px',
              padding: '14px 18px',
              cursor: 'pointer',
              background: showOnlyDiary ? '#7c3aed' : '#14213d',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700
            }}
          >
            <span>MyDiary</span>
            <span
              style={{
                background: 'rgba(255,255,255,0.16)',
                borderRadius: '999px',
                padding: '4px 10px',
                fontSize: '0.9rem'
              }}
            >
              {diaryCount}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}