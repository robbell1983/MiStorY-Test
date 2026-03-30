# Contributing to MyStory

Grazie per l'interesse nel contribuire a MyStory! Qui troverai le linee guida per partecipare al progetto.

## Come contribuire

### Segnalare bug
Se trovi un bug, apri una **Issue** descrivendolo nel dettaglio:
- Titolo chiaro e conciso
- Passaggi per riprodurre il problema
- Risultato atteso vs risultato effettivo
- Screenshot o video se utile

### Proporre nuove funzionalità
Apri una **Issue** con il label `enhancement` per suggerire:
- Descrizione chiara della feature
- Caso d'uso e benefici
- Possibili implementazioni

### Creare un Pull Request
1. Fai il fork del repository
2. Crea un branch per la tua feature: `git checkout -b feature/amazing-feature`
3. Commit i tuoi cambiamenti: `git commit -m 'Add amazing feature'`
4. Push al branch: `git push origin feature/amazing-feature`
5. Apri una Pull Request descrivendo i cambiamenti

## Standard di codice

- Usa nomi di variabili chiari e significativi
- Commenta il codice complesso
- Segui le convenzioni del progetto
- Testa i cambiamenti prima di fare il PR

## Modificare i dati storici

Se vuoi aggiungere nuovi eventi storici:

1. Apri `src/data/events.js`
2. Aggiungi un nuovo evento all'array `historicalEvents`:

```javascript
{
  id: 'evt-XXXX',
  title: 'Titolo evento',
  description: 'Descrizione breve',
  startYear: -1000,  // usare numeri negativi per a.C.
  endYear: -900,
  yearLabel: '1000/900 a.C.',
  lat: 40.0,
  lng: 20.0,
  region: 'europe',  // 'africaMiddleEast', 'europe', 'mediterranean', 'asiaOceania', 'americas'
  wikipediaUrl: 'https://it.wikipedia.org/wiki/...'
}
```

3. Assicurati che l'ID sia univoco
4. Verifica con `npm run dev` che tutto funzioni
5. Fai il commit e il PR

## Licenza

Contribuendo accetti che il tuo codice sia rilasciato sotto licenza MIT.

Grazie per i tuoi contributi! 🎉
