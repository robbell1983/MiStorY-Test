import { defaultInfoBlocks } from '../data/events';

export default function InfoPanel() {
  return (
    <section className="card info-card">
      <div className="section-header">
        <h2>Testi fissi di default</h2>
      </div>
      <div className="info-list">
        {defaultInfoBlocks.map((block) => (
          <article key={block.title} className="info-item">
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
