# MyStory - Mappa Storica Interattiva

<div align="center">

**Un'applicazione web interattiva per esplorare gli eventi storici dal 10000 a.C. ai giorni nostri attraverso un mappamondo 3D dinamico.**

[Live Demo](#) • [Documentazione](#) • [Contribuisci](./CONTRIBUTING.md) • [License](./LICENSE)

</div>

---

## ✨ Caratteristiche

- 🌍 **Mappamondo 3D interattivo** con 93 eventi storici iniziali
- 📅 **Filtri temporali avanzati** per periodi storici predefiniti o personalizzati
- 🔍 **Ricerca intelligente** integrata con Wikipedia
- 👤 **Autenticazione locale** senza server backend
- 📍 **Creazione mappe personali** - Aggiungi i tuoi eventi e note
- 📋 **Linea del tempo grafica** - Visualizza gli eventi MyDiary
- 🎨 **5 macro-aree geografiche** con colori distintivi:
  - Africa e Medio Oriente
  - Europa
  - Bacino del Mediterraneo
  - Asia e Oceania
  - Americhe
- 💾 **Persistenza con localStorage** - I tuoi dati rimangono salvati

## 📋 Requisiti

- Node.js 16+ 
- npm o yarn

## 🚀 Quick Start

### 1. Clona il repository

```bash
git clone https://github.com/yourusername/mystory.git
cd mystory
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Avvia il server di sviluppo

```bash
npm run dev
```

L'app sarà accessibile su `http://localhost:5173/`

### 4. Build per produzione

```bash
npm run build
npm run preview
```

## 📖 Come usare

### Modalità Explorer (senza login)
- Seleziona un intervallo di anni con gli slider
- Attiva/disattiva le aree geografiche cliccando sui badge
- Ruota il mappamondo con il mouse, zooma con la rotella
- Clicca su un evento per visualizzarlo

### Modalità Registrato
1. Clicca "Registrati" e crea un account (email + password)
2. Una volta dentro, accedi alla sezione "La tua mappa personale"
3. Aggiungi i tuoi eventi:
   - Titolo e descrizione
   - Date di inizio/fine (con precisione anno o data completa)
   - Coordinate geografiche (lat/lng)
   - Area geografica
   - Link Wikipedia (opzionale)
4. I tuoi eventi vengono salvati automaticamente nel browser

## 🔧 Struttura del progetto

```
mystory/
├── public/                    # Risorse statiche
├── src/
│   ├── components/
│   │   ├── AuthPanel.jsx      # Login/registrazione
│   │   ├── DiaryTimeline.jsx  # Timeline dettagliata
│   │   ├── EventSidebar.jsx   # Lista eventi
│   │   ├── FiltersPanel.jsx   # Filtri e slider
│   │   ├── GlobeMap.jsx       # Mappamondo 3D
│   │   ├── InfoPanel.jsx      # Info testuali
│   │   └── PersonalMapPanel.jsx # Creazione eventi
│   ├── data/
│   │   └── events.js          # Eventi e configurazione
│   ├── services/
│   │   └── wikipedia.js       # Integrazione Wikipedia
│   ├── App.jsx                # Componente principale
│   ├── main.jsx               # Entry point
│   └── styles.css             # Styling globale
├── index.html
├── package.json
├── vite.config.js
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

## ⚙️ Modifica dei dati

### Aggiungere/modificare eventi storici

Modifica `src/data/events.js`:

```javascript
export const historicalEvents = [
  {
    id: 'evt-001',
    title: 'Nome evento',
    description: 'Descrizione breve',
    startYear: -8300,          // Negativo = a.C., Positivo = d.C.
    endYear: -7000,
    yearLabel: '8300/7000 a.C.',
    lat: 31.87,                // Latitudine
    lng: 35.45,                // Longitudine
    region: 'africaMiddleEast', // Una delle 5 aree
    wikipediaUrl: 'https://it.wikipedia.org/wiki/...'
  },
  // ... altri eventi
];
```

### Modificare i testi informativi

In `src/data/events.js`, modifica l'array `defaultInfoBlocks`:

```javascript
export const defaultInfoBlocks = [
  {
    title: 'Titolo',
    text: 'Testo descrittivo'
  },
  // ...
];
```

### Modificare colori e aree geografiche

In `src/data/events.js`, modifica `regionConfig`:

```javascript
export const regionConfig = {
  africaMiddleEast: {
    id: 'africaMiddleEast',
    label: 'Africa e Medio Oriente',
    color: '#d97706'
  },
  // ...
};
```

## 🛠️ Stack Tecnologico

| Layer | Tecnologia |
|-------|-----------|
| Frontend | React 18 |
| Build Tool | Vite 5 |
| Globo 3D | react-globe.gl |
| Styling | CSS3 |
| Storage | localStorage |

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 🤝 Come Contribuire

Vedi [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida su:
- Segnalare bug
- Proporre funzionalità
- Inviare Pull Request

## 📝 Licenza

Questo progetto è rilasciato sotto la licenza MIT. Vedi [LICENSE](./LICENSE) per dettagli.

## 🙏 Ringraziamenti

- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) per il globo 3D
- [Wikipedia API](https://www.wikipedia.org/) per l'integrazione dati storici
- Tutti i [contributori](https://github.com/yourusername/mystory/graphs/contributors)

## 📞 Contatti

- Apri una [Issue](https://github.com/yourusername/mystory/issues) per bug reports
- Discussioni e feature requests in [Discussions](https://github.com/yourusername/mystory/discussions)

---

<div align="center">

Fatto con ❤️ per gli appassionati di storia

[⬆ Torna in cima](#mystory---mappa-storica-interattiva)

</div>
