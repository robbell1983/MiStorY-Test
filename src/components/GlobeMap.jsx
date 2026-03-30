import { useEffect, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { regionConfig } from '../data/events';

export default function GlobeMap({ events, focusedEvent, onFocusEvent }) {
  const globeRef = useRef();
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 900, height: 620 });

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

  const pointData = useMemo(() => {
    return events.map((event) => ({
      ...event,
      size: focusedEvent?.id === event.id ? 0.18 : 0.1,
      color: regionConfig[event.region]?.color || '#ffffff'
    }));
  }, [events, focusedEvent]);

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

  return (
    <section className="card globe-card">
      <div className="section-header">
        <h2>Mappamondo interattivo</h2>
        <p>Ruota il globo, zooma e clicca sui punti per leggere gli eventi.</p>
      </div>

      <div className="globe-shell" ref={wrapperRef}>
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={pointData}
          pointLat="lat"
          pointLng="lng"
          pointAltitude="size"
          pointRadius={0.12}
          pointColor="color"
          pointResolution={18}
          pointLabel={(point) => `
            <div style="padding:8px;max-width:280px;">
              <strong>${point.title}</strong><br/>
              <span>${point.yearLabel || ''}</span><br/>
              <span>${point.description || ''}</span>
            </div>
          `}
          onPointClick={(point) => onFocusEvent(point)}
          labelsData={labelData}
          labelLat="lat"
          labelLng="lng"
          labelText="title"
          labelSize={1.2}
          labelDotRadius={0.35}
          labelAltitude={0.02}
          labelColor={() => '#ffffff'}
        />
      </div>
    </section>
  );
}