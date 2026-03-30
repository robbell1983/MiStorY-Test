export const regionConfig = {
  africaMiddleEast: {
    id: 'africaMiddleEast',
    label: 'Africa e Medio Oriente',
    color: '#d97706'
  },
  europe: {
    id: 'europe',
    label: 'Europa',
    color: '#2563eb'
  },
  mediterranean: {
    id: 'mediterranean',
    label: 'Bacino del Mediterraneo',
    color: '#16a34a'
  },
  asiaOceania: {
    id: 'asiaOceania',
    label: 'Asia e Oceania',
    color: '#9333ea'
  },
  americas: {
    id: 'americas',
    label: 'Americhe',
    color: '#e11d48'
  }
};

export const defaultInfoBlocks = [
  {
    title: 'Come leggere MyStory',
    text:
      'Scegli un intervallo di anni e poi ruota o zooma il globo. Gli eventi storici compaiono in base all’area osservata e al periodo selezionato. I colori ti aiutano a distinguere subito le cinque grandi macro-zone del mondo antico.'
  },
  {
    title: 'Contenuti personalizzabili',
    text:
      'I testi fissi e gli eventi di default sono modificabili direttamente nei file del progetto. I link “Approfondisci” aprono voci di Wikipedia per una lettura più ampia.'
  }
];

export const historicalEvents = [
  {
    id: 'evt-001',
    title: 'Gerico, tra le prime città fortificate',
    description:
      'Gerico viene spesso indicata tra i primi grandi insediamenti urbani e fortificati del Vicino Oriente.',
    startYear: -8300,
    endYear: -7000,
    yearLabel: '8300/7000 a.C.',
    lat: 31.87,
    lng: 35.45,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Gerico'
  },
  {
    id: 'evt-002',
    title: 'Diffusione della cultura neolitica in Europa',
    description:
      'La cultura neolitica si diffonde nel Mediterraneo e nell’Europa centro-meridionale.',
    startYear: -6000,
    endYear: -6000,
    yearLabel: '6000 a.C.',
    lat: 45.0,
    lng: 12.0,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Neolitico'
  },
  {
    id: 'evt-003',
    title: 'Primi insediamenti stabili in America Centrale',
    description:
      'Nelle Americhe si consolidano i primi insediamenti agricoli stabili in Mesoamerica.',
    startYear: -5000,
    endYear: -5000,
    yearLabel: '5000 a.C.',
    lat: 17.0,
    lng: -92.0,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Mesoamerica'
  },
  {
    id: 'evt-004',
    title: 'Applicazioni dell’aratro, del giogo e della ruota',
    description:
      'In Mesopotamia e nella valle del Nilo si diffondono strumenti e tecniche che cambiano trasporto e agricoltura.',
    startYear: -5000,
    endYear: -3500,
    yearLabel: '5000/3500 a.C.',
    lat: 31.0,
    lng: 35.0,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ruota'
  },
  {
    id: 'evt-005',
    title: 'Primi monumenti megalitici in Europa',
    description:
      'La costruzione di monumenti megalitici segna nuove forme rituali e sociali in Europa.',
    startYear: -3500,
    endYear: -3500,
    yearLabel: '3500 a.C.',
    lat: 51.18,
    lng: -1.83,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Megalitismo'
  },
  {
    id: 'evt-006',
    title: 'Inizio dell’età del bronzo',
    description:
      'L’età del bronzo prende forma nel Medio Oriente e si estende progressivamente verso l’Europa.',
    startYear: -3000,
    endYear: -2500,
    yearLabel: '3000/2500 a.C.',
    lat: 39.0,
    lng: 35.0,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Et%C3%A0_del_bronzo'
  },
  {
    id: 'evt-007',
    title: 'Scrittura cuneiforme e geroglifici',
    description:
      'Le grandi civiltà del Vicino Oriente e dell’Egitto consolidano sistemi di scrittura complessi.',
    startYear: -3000,
    endYear: -2500,
    yearLabel: '3000/2500 a.C.',
    lat: 29.98,
    lng: 31.13,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Scrittura_cuneiforme'
  },
  {
    id: 'evt-008',
    title: 'Apogeo della civiltà sumera',
    description:
      'Le città-stato sumere raggiungono una fase di grande sviluppo politico, religioso e commerciale.',
    startYear: -2800,
    endYear: -2800,
    yearLabel: '2800 a.C.',
    lat: 30.96,
    lng: 46.10,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Sumeri'
  },
  {
    id: 'evt-009',
    title: 'Antico Regno egizio e piramidi di Giza',
    description:
      'Con l’Antico Regno, l’Egitto rafforza Menfi e avvia la costruzione delle grandi piramidi e della Sfinge.',
    startYear: -2700,
    endYear: -2500,
    yearLabel: '2700/2500 a.C.',
    lat: 29.98,
    lng: 31.13,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Antico_Regno'
  },
  {
    id: 'evt-010',
    title: 'Domesticazione del dromedario in Asia centrale',
    description:
      'La domesticazione del dromedario e di altri animali rafforza vie di contatto e spostamento in Asia.',
    startYear: -2500,
    endYear: -2500,
    yearLabel: '2500 a.C.',
    lat: 41.0,
    lng: 64.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Camelus_dromedarius'
  },
  {
    id: 'evt-011',
    title: 'Canale navigabile tra Nilo e Mar Rosso',
    description:
      'Fonti antiche collegano al III millennio a.C. opere di navigazione interna nell’area egizia.',
    startYear: -2300,
    endYear: -2300,
    yearLabel: '2300 a.C.',
    lat: 30.5,
    lng: 32.3,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Canale_dei_Faraoni'
  },
  {
    id: 'evt-012',
    title: 'Invasioni di nomadi e declino sumerico',
    description:
      'Pressioni esterne e mutamenti politici indeboliscono il predominio sumero in Mesopotamia.',
    startYear: -2200,
    endYear: -2000,
    yearLabel: '2200/2000 a.C.',
    lat: 33.0,
    lng: 44.0,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Accadi'
  },
  {
    id: 'evt-013',
    title: 'Dinastia Xia nella tradizione cinese',
    description:
      'La cronologia scolastica colloca in questo periodo l’inizio della dinastia Xia.',
    startYear: -2205,
    endYear: -1766,
    yearLabel: '2205/1766 a.C.',
    lat: 34.75,
    lng: 113.62,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Xia'
  },
  {
    id: 'evt-014',
    title: 'Formazione di Babilonia come centro politico',
    description:
      'Babilonia emerge in Mesopotamia come città autonoma e poi capitale di un regno.',
    startYear: -2300,
    endYear: -1800,
    yearLabel: '2300/1800 a.C.',
    lat: 32.54,
    lng: 44.42,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Babilonia'
  },
  {
    id: 'evt-015',
    title: 'Abramo nella tradizione biblica',
    description:
      'La cronologia tradizionale colloca in quest’area di tempo la figura di Abramo e i primi patriarchi.',
    startYear: -1800,
    endYear: -1800,
    yearLabel: '1800 a.C.',
    lat: 31.77,
    lng: 35.21,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Abramo'
  },
  {
    id: 'evt-016',
    title: 'Dominazione dei Cassiti in Mesopotamia',
    description:
      'Si rafforza la dominazione cassita dopo la crisi dei grandi regni babilonesi.',
    startYear: -1470,
    endYear: -1470,
    yearLabel: '1470 a.C.',
    lat: 33.31,
    lng: 44.36,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cassiti'
  },
  {
    id: 'evt-017',
    title: 'Inizio della decadenza minoica',
    description:
      'La civiltà minoica entra in una fase di crisi e trasformazione nell’Egeo.',
    startYear: -1450,
    endYear: -1450,
    yearLabel: '1450 a.C.',
    lat: 35.30,
    lng: 25.16,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Civilt%C3%A0_minoica'
  },
  {
    id: 'evt-018',
    title: 'Invasione degli Arii in India',
    description:
      'Le migrazioni indoarie si sovrappongono alle popolazioni preesistenti del subcontinente.',
    startYear: -1400,
    endYear: -1400,
    yearLabel: '1400 a.C.',
    lat: 28.61,
    lng: 77.20,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Indoari'
  },
  {
    id: 'evt-019',
    title: 'Espansione ittita e uso del carro da guerra',
    description:
      'Gli Ittiti si espandono in Anatolia e fanno ampio uso del carro da guerra.',
    startYear: -1400,
    endYear: -1200,
    yearLabel: '1400/1200 a.C.',
    lat: 39.82,
    lng: 34.81,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ittiti'
  },
  {
    id: 'evt-020',
    title: 'Tomba di Tutankhamon e arte funeraria egizia',
    description:
      'La stagione di Tutankhamon resta uno dei simboli della ricchezza figurativa egizia.',
    startYear: -1350,
    endYear: -1350,
    yearLabel: '1350 a.C.',
    lat: 25.74,
    lng: 32.60,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Tutankhamon'
  },
  {
    id: 'evt-021',
    title: 'Fenici e alfabeto fonetico',
    description:
      'I Fenici perfezionano un alfabeto fonetico di 22 lettere, fondamentale per le scritture mediterranee.',
    startYear: -1300,
    endYear: -1300,
    yearLabel: '1300 a.C.',
    lat: 33.27,
    lng: 35.20,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Alfabeto_fenicio'
  },
  {
    id: 'evt-022',
    title: 'Nascita della civiltà Guanape in Perù',
    description:
      'La timeline scolastica segnala la civiltà di Guanape nella fascia costiera del Perù.',
    startYear: -1250,
    endYear: -1250,
    yearLabel: '1250 a.C.',
    lat: -8.09,
    lng: -79.08,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Per%C3%B9_precolombiano'
  },
  {
    id: 'evt-023',
    title: 'Nuove opere monumentali di Ramses II',
    description:
      'Ramses II promuove importanti realizzazioni monumentali nella Valle dei Re e in altri siti egizi.',
    startYear: -1240,
    endYear: -1240,
    yearLabel: '1240 a.C.',
    lat: 25.74,
    lng: 32.60,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ramses_II'
  },
  {
    id: 'evt-024',
    title: 'Sviluppo dei porti di Tiro e Sidone',
    description:
      'I centri fenici di Tiro e Sidone diventano nodi commerciali sempre più importanti.',
    startYear: -1200,
    endYear: -1200,
    yearLabel: '1200 a.C.',
    lat: 33.27,
    lng: 35.20,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Tiro'
  },
  {
    id: 'evt-025',
    title: 'Caduta dell’impero ittita',
    description:
      'La crisi dei cosiddetti popoli del mare contribuisce al collasso dell’impero ittita.',
    startYear: -1200,
    endYear: -1200,
    yearLabel: '1200 a.C.',
    lat: 39.82,
    lng: 34.81,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crollo_dell%27et%C3%A0_del_bronzo'
  },
  {
    id: 'evt-026',
    title: 'Esodo dall’Egitto verso la Palestina',
    description:
      'La linea del tempo scolastica colloca in quest’epoca l’Esodo biblico.',
    startYear: -1200,
    endYear: -1200,
    yearLabel: '1200 a.C.',
    lat: 29.5,
    lng: 34.9,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Esodo'
  },
  {
    id: 'evt-027',
    title: 'Nascita della civiltà olmeca',
    description:
      'Nell’area mesoamericana prendono forma le prime culture olmeche.',
    startYear: -1100,
    endYear: -800,
    yearLabel: '1100/800 a.C.',
    lat: 18.1,
    lng: -94.8,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Olmechi'
  },
  {
    id: 'evt-028',
    title: 'Massima espansione mediterranea dei Fenici',
    description:
      'Le rotte fenicie si estendono in tutto il Mediterraneo con nuove colonie e scambi.',
    startYear: -1000,
    endYear: -700,
    yearLabel: '1000/700 a.C.',
    lat: 36.85,
    lng: 10.33,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Fenici'
  },
  {
    id: 'evt-029',
    title: 'Tungusi dalla Corea verso il Giappone',
    description:
      'La linea del tempo riporta invasioni o movimenti tungusi verso il Giappone.',
    startYear: -1000,
    endYear: -1000,
    yearLabel: '1000 a.C.',
    lat: 36.20,
    lng: 138.25,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Giappone'
  },
  {
    id: 'evt-030',
    title: 'Adozione della sella e del cavallo come mezzo di trasporto',
    description:
      'Il cavallo assume un ruolo crescente nel trasporto e nel combattimento.',
    startYear: -1000,
    endYear: -1000,
    yearLabel: '1000 a.C.',
    lat: 47.0,
    lng: 60.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cavallo'
  },
  {
    id: 'evt-031',
    title: 'Nascita della civiltà etrusca',
    description:
      'L’Italia tirrenica vede l’emergere della civiltà etrusca.',
    startYear: -1000,
    endYear: -950,
    yearLabel: '1000/950 a.C.',
    lat: 42.42,
    lng: 12.11,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Etruschi'
  },
  {
    id: 'evt-032',
    title: 'Il re David unifica la Palestina',
    description:
      'Secondo la tradizione biblica, David unifica il regno con capitale prima Hebron poi Gerusalemme.',
    startYear: -990,
    endYear: -980,
    yearLabel: '990/980 a.C.',
    lat: 31.77,
    lng: 35.21,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Davide'
  },
  {
    id: 'evt-033',
    title: 'Crisi del sistema politico egizio',
    description:
      'L’Egitto attraversa una crisi politica con perdita di unità e nuove dinastie.',
    startYear: -950,
    endYear: -750,
    yearLabel: '950/750 a.C.',
    lat: 30.04,
    lng: 31.24,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Terzo_periodo_intermedio_dell%27Egitto'
  },
  {
    id: 'evt-034',
    title: 'Dominazione degli Assiri',
    description:
      'L’impero assiro estende il proprio controllo sul Vicino Oriente.',
    startYear: -900,
    endYear: -626,
    yearLabel: '900/626 a.C.',
    lat: 36.36,
    lng: 43.15,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Assiri'
  },
  {
    id: 'evt-035',
    title: 'Primo sviluppo della civiltà nuragica',
    description:
      'In Sardegna si sviluppa la civiltà nuragica, caratterizzata da complessi monumentali in pietra.',
    startYear: -850,
    endYear: -850,
    yearLabel: '850 a.C.',
    lat: 40.12,
    lng: 9.01,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Civilt%C3%A0_nuragica'
  },
  {
    id: 'evt-036',
    title: 'Fondazione di Cartagine',
    description:
      'I Fenici fondano Cartagine, destinata a diventare una delle grandi potenze del Mediterraneo.',
    startYear: -814,
    endYear: -814,
    yearLabel: '814 a.C.',
    lat: 36.85,
    lng: 10.33,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cartagine'
  },
  {
    id: 'evt-037',
    title: 'Prime iscrizioni con alfabeto greco',
    description:
      'Le prime iscrizioni alfabetiche greche testimoniano un passaggio culturale fondamentale.',
    startYear: -800,
    endYear: -800,
    yearLabel: '800 a.C.',
    lat: 37.98,
    lng: 23.72,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Alfabeto_greco'
  },
  {
    id: 'evt-038',
    title: 'Prima Olimpiade in Grecia',
    description:
      'La tradizione fissa nel 776 a.C. la prima Olimpiade.',
    startYear: -776,
    endYear: -776,
    yearLabel: '776 a.C.',
    lat: 37.64,
    lng: 21.63,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Giochi_olimpici_antichi'
  },
  {
    id: 'evt-039',
    title: 'Apogeo della potenza militare assira',
    description:
      'Tra VIII e VII secolo a.C. Ninive diventa il simbolo della potenza assira.',
    startYear: -750,
    endYear: -700,
    yearLabel: '750/700 a.C.',
    lat: 36.36,
    lng: 43.15,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ninive'
  },
  {
    id: 'evt-040',
    title: 'Composizione di Iliade e Odissea',
    description:
      'La cronologia tradizionale colloca tra VIII secolo a.C. la composizione dei poemi omerici.',
    startYear: -740,
    endYear: -720,
    yearLabel: '740/720 a.C.',
    lat: 38.24,
    lng: 21.73,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Omero'
  },
  {
    id: 'evt-041',
    title: 'Fondazione di Roma',
    description:
      'La tradizione romana colloca la fondazione della città nel 753 a.C.',
    startYear: -753,
    endYear: -753,
    yearLabel: '753 a.C.',
    lat: 41.89,
    lng: 12.49,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Fondazione_di_Roma'
  },
  {
    id: 'evt-042',
    title: 'Colonie greche nel Mediterraneo',
    description:
      'Le città-stato greche fondano colonie in varie aree del Mediterraneo.',
    startYear: -750,
    endYear: -750,
    yearLabel: '750 a.C.',
    lat: 37.5,
    lng: 15.1,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Colonizzazione_greca'
  },
  {
    id: 'evt-043',
    title: 'Caduta del potere imperiale della dinastia Zhou',
    description:
      'La timeline segnala una fase di caduta del potere imperiale nella Cina antica.',
    startYear: -720,
    endYear: -720,
    yearLabel: '720 a.C.',
    lat: 34.34,
    lng: 108.94,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Zhou'
  },
  {
    id: 'evt-044',
    title: 'Inizio della massima espansione celtica in Europa',
    description:
      'Nel VI secolo a.C. si avvia una fase di forte espansione delle culture celtiche.',
    startYear: -600,
    endYear: -600,
    yearLabel: '600 a.C.',
    lat: 48.2,
    lng: 9.0,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Celti'
  },
  {
    id: 'evt-045',
    title: 'Smembramento politico dell’India',
    description:
      'La linea del tempo indica una fase di frammentazione politica del subcontinente.',
    startYear: -600,
    endYear: -600,
    yearLabel: '600 a.C.',
    lat: 23.59,
    lng: 80.96,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Storia_dell%27India'
  },
  {
    id: 'evt-046',
    title: 'Cultura zapoteca in America Centrale',
    description:
      'Nell’area di Oaxaca si afferma la cultura zapoteca.',
    startYear: -600,
    endYear: -600,
    yearLabel: '600 a.C.',
    lat: 17.04,
    lng: -96.72,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Zapotechi'
  },
  {
    id: 'evt-047',
    title: 'Nascita di Confucio',
    description:
      'Confucio nasce nel 551 a.C. e diventerà una delle figure centrali del pensiero cinese.',
    startYear: -551,
    endYear: -551,
    yearLabel: '551 a.C.',
    lat: 35.60,
    lng: 116.99,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Confucio'
  },
  {
    id: 'evt-048',
    title: 'Innovazioni nella lavorazione dei metalli',
    description:
      'La timeline segnala ancora nel VI secolo a.C. innovazioni collegate ad ancora e mantice.',
    startYear: -550,
    endYear: -550,
    yearLabel: '550 a.C.',
    lat: 36.0,
    lng: 29.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Metallurgia'
  },
  {
    id: 'evt-049',
    title: 'Nascita di Buddha',
    description:
      'Siddhartha Gautama nasce tradizionalmente nel VI secolo a.C.',
    startYear: -560,
    endYear: -560,
    yearLabel: '560 a.C.',
    lat: 27.48,
    lng: 83.28,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Gautama_Buddha'
  },
  {
    id: 'evt-050',
    title: 'Atene e la prima costituzione democratica',
    description:
      'La timeline scolastica indica nel 594 a.C. una svolta istituzionale ateniese.',
    startYear: -594,
    endYear: -594,
    yearLabel: '594 a.C.',
    lat: 37.98,
    lng: 23.72,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Solone'
  },
  {
    id: 'evt-051',
    title: 'Nasce la Repubblica patrizia romana',
    description:
      'La tradizione fissa nel 510 a.C. l’avvio della Repubblica romana.',
    startYear: -510,
    endYear: -510,
    yearLabel: '510 a.C.',
    lat: 41.89,
    lng: 12.49,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Repubblica_romana'
  },
  {
    id: 'evt-052',
    title: 'Costruzione dell’Appia Antica',
    description:
      'Nel 312 a.C. viene tracciata la via Appia, la prima strada romana di grande comunicazione.',
    startYear: -312,
    endYear: -312,
    yearLabel: '312 a.C.',
    lat: 41.88,
    lng: 12.62,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Via_Appia'
  },
  {
    id: 'evt-053',
    title: 'Fondazione della Biblioteca di Alessandria',
    description:
      'Tra il III e il II sec. a.C. la Biblioteca di Alessandria diventa centro culturale e scientifico del mondo antico.',
    startYear: -270,
    endYear: -270,
    yearLabel: '270 a.C.',
    lat: 31.2,
    lng: 29.9,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Biblioteca_di_Alessandria'
  },
  {
    id: 'evt-054',
    title: 'Nascita di Cristo',
    description:
      'Evento simbolico che segna il passaggio dall’era pre-cristiana a quella cristiana e determina un nuovo calendario.',
    startYear: 1,
    endYear: 1,
    yearLabel: '1 d.C.',
    lat: 31.78,
    lng: 35.22,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ges%C3%B9'
  },
  {
    id: 'evt-055',
    title: 'Fondazione di Venezia',
    description:
      'Secondo la tradizione, nel 421 d.C. Venezia inizia a formarsi come comunità di rifugiati dalle invasioni barbariche.',
    startYear: 421,
    endYear: 421,
    yearLabel: '421 d.C.',
    lat: 45.44,
    lng: 12.33,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Venezia'
  },
  {
    id: 'evt-056',
    title: 'Editto di Costantino (Milano)',
    description:
      'Nel 313 d.C. Costantino I e Licinio garantiscono libertà di culto ai cristiani, accelerando la diffusione del Cristianesimo nell’Impero Romano.',
    startYear: 313,
    endYear: 313,
    yearLabel: '313 d.C.',
    lat: 45.46,
    lng: 9.19,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Editto_di_Milano'
  },
  {
    id: 'evt-057',
    title: 'Caduta dell’Impero Romano d’Occidente',
    description:
      'Nel 476 d.C. deposizione di Romolo Augustolo: simbolo della fine dell’età antica e inizio del Medioevo in Europa.',
    startYear: 476,
    endYear: 476,
    yearLabel: '476 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Caduta_dell%27Impero_romano_d%27Occidente'
  },
  {
    id: 'evt-058',
    title: 'Scoperta dell’America da parte di Colombo',
    description:
      'Nel 1492, Cristoforo Colombo raggiunge le Americhe aprendo nuove vie di scambio globale.',
    startYear: 1492,
    endYear: 1492,
    yearLabel: '1492 d.C.',
    lat: 25.04,
    lng: -77.4,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cristoforo_Colombo'
  },
  {
    id: 'evt-059',
    title: 'Rivoluzione francese',
    description:
      'La rivoluzione francese (1789-1799) cambia radicalmente la politica europea e introduce ideali moderni di cittadinanza.',
    startYear: 1789,
    endYear: 1799,
    yearLabel: '1789/1799 d.C.',
    lat: 48.85,
    lng: 2.35,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Rivoluzione_francese'
  },
  {
    id: 'evt-060',
    title: 'Prima Moon landing (Apollo 11)',
    description:
      'Nel 1969 l’uomo mette piede sulla Luna per la prima volta, momento simbolo dell’era contemporanea.',
    startYear: 1969,
    endYear: 1969,
    yearLabel: '1969 d.C.',
    lat: 0.674,
    lng: 23.473,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Apollo_11'
  },
  {
    id: 'evt-061',
    title: 'Anni 2020 e l’era digitale',
    description:
      'Il mondo contemporaneo (2020-2026) è caratterizzato da connettività globale, tecnologie digitali avanzate e sfide ambientali.',
    startYear: 2020,
    endYear: 2026,
    yearLabel: '2020-2026 d.C.',
    lat: 0,
    lng: 0,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Internet'
  },
  {
    id: 'evt-062',
    title: 'Prima Guerra Mondiale (1914-1918)',
    description:
      'Conflitto globale che coinvolge le principali potenze mondiali, causando milioni di morti e ridisegnando le mappe politiche.',
    startYear: 1914,
    endYear: 1918,
    yearLabel: '1914-1918 d.C.',
    lat: 50.11,
    lng: 8.68,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Prima_guerra_mondiale'
  },
  {
    id: 'evt-063',
    title: 'Rivoluzione Russa (1917)',
    description:
      'La rivoluzione bolscevica porta alla fine dell\'impero zarista e alla nascita dell\'Unione Sovietica.',
    startYear: 1917,
    endYear: 1917,
    yearLabel: '1917 d.C.',
    lat: 55.75,
    lng: 37.62,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Rivoluzione_russa'
  },
  {
    id: 'evt-064',
    title: 'Grande Depressione (1929-1939)',
    description:
      'Crisi economica globale che colpisce il mondo intero, con conseguenze sociali e politiche profonde.',
    startYear: 1929,
    endYear: 1939,
    yearLabel: '1929-1939 d.C.',
    lat: 40.71,
    lng: -74.01,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Grande_depressione'
  },
  {
    id: 'evt-065',
    title: 'Seconda Guerra Mondiale (1939-1945)',
    description:
      'Il conflitto più devastante della storia umana, con l\'Olocausto e l\'uso delle armi nucleari.',
    startYear: 1939,
    endYear: 1945,
    yearLabel: '1939-1945 d.C.',
    lat: 52.52,
    lng: 13.41,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Seconda_guerra_mondiale'
  },
  {
    id: 'evt-066',
    title: 'Fondazione delle Nazioni Unite (1945)',
    description:
      'Creazione dell\'organizzazione internazionale per la pace e la cooperazione globale.',
    startYear: 1945,
    endYear: 1945,
    yearLabel: '1945 d.C.',
    lat: 40.71,
    lng: -74.01,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Organizzazione_delle_Nazioni_Unite'
  },
  {
    id: 'evt-067',
    title: 'Indipendenza dell\'India (1947)',
    description:
      'Fine del dominio britannico e nascita di India e Pakistan come stati indipendenti.',
    startYear: 1947,
    endYear: 1947,
    yearLabel: '1947 d.C.',
    lat: 28.61,
    lng: 77.20,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Indipendenza_dell%27India'
  },
  {
    id: 'evt-068',
    title: 'Guerra Fredda (1947-1991)',
    description:
      'Confronto ideologico tra Stati Uniti e Unione Sovietica che influenza la politica globale per decenni.',
    startYear: 1947,
    endYear: 1991,
    yearLabel: '1947-1991 d.C.',
    lat: 38.91,
    lng: -77.04,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Guerra_fredda'
  },
  {
    id: 'evt-069',
    title: 'Rivoluzione Culturale in Cina (1966-1976)',
    description:
      'Movimento politico-sociale che trasforma radicalmente la società cinese sotto Mao Zedong.',
    startYear: 1966,
    endYear: 1976,
    yearLabel: '1966-1976 d.C.',
    lat: 39.90,
    lng: 116.41,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Rivoluzione_culturale'
  },
  {
    id: 'evt-070',
    title: 'Caduta del Muro di Berlino (1989)',
    description:
      'Simbolo della fine della Guerra Fredda e dell\'unificazione tedesca.',
    startYear: 1989,
    endYear: 1989,
    yearLabel: '1989 d.C.',
    lat: 52.52,
    lng: 13.41,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Caduta_del_muro_di_Berlino'
  },
  {
    id: 'evt-071',
    title: 'Dissoluzione dell\'Unione Sovietica (1991)',
    description:
      'Fine dell\'URSS e nascita di 15 stati indipendenti, segnando la fine dell\'epoca bipolare.',
    startYear: 1991,
    endYear: 1991,
    yearLabel: '1991 d.C.',
    lat: 55.75,
    lng: 37.62,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dissoluzione_dell%27Unione_Sovietica'
  },
  {
    id: 'evt-072',
    title: 'Nascita di Internet (anni 1990)',
    description:
      'La rete mondiale diventa accessibile al pubblico, rivoluzionando la comunicazione globale.',
    startYear: 1990,
    endYear: 2000,
    yearLabel: '1990-2000 d.C.',
    lat: 37.77,
    lng: -122.41,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Internet'
  },
  {
    id: 'evt-073',
    title: 'Attacchi dell\'11 settembre 2001',
    description:
      'Attentati terroristici che cambiano la politica di sicurezza globale e portano alla guerra in Afghanistan e Iraq.',
    startYear: 2001,
    endYear: 2001,
    yearLabel: '2001 d.C.',
    lat: 40.71,
    lng: -74.01,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Attentati_dell%2711_settembre'
  },
  {
    id: 'evt-074',
    title: 'Crisi finanziaria globale (2007-2008)',
    description:
      'Crisi economica mondiale che origina dagli Stati Uniti e colpisce l\'economia globale.',
    startYear: 2007,
    endYear: 2008,
    yearLabel: '2007-2008 d.C.',
    lat: 40.71,
    lng: -74.01,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_finanziaria_globale_del_2007-2008'
  },
  {
    id: 'evt-075',
    title: 'Pandemia COVID-19 (2019-2023)',
    description:
      'La pandemia globale che ha cambiato il mondo, accelerando la digitalizzazione e le sfide sanitarie.',
    startYear: 2019,
    endYear: 2023,
    yearLabel: '2019-2023 d.C.',
    lat: 39.90,
    lng: 116.41,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Pandemia_di_COVID-19'
  },
  {
    id: 'evt-076',
    title: 'Guerra in Ucraina (2022-oggi)',
    description:
      'Conflitto che ha ripercussioni globali sulla sicurezza energetica e alimentare mondiale.',
    startYear: 2022,
    endYear: 2026,
    yearLabel: '2022-2026 d.C.',
    lat: 50.45,
    lng: 30.52,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Invasione_dell%27Ucraina_da_parte_della_Russia'
  },
  {
    id: 'evt-077',
    title: 'Progressi nell\'Intelligenza Artificiale (anni 2020)',
    description:
      'Sviluppo rapidissimo delle tecnologie AI, con impatti su lavoro, creatività e società.',
    startYear: 2020,
    endYear: 2026,
    yearLabel: '2020-2026 d.C.',
    lat: 37.77,
    lng: -122.41,
    region: 'americas',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Intelligenza_artificiale'
  },
  {
    id: 'evt-078',
    title: 'Introduzione dell\'Euro (1999)',
    description:
      'L\'euro diventa la moneta ufficiale di 11 paesi europei, segnando un passo importante nell\'integrazione europea.',
    startYear: 1999,
    endYear: 1999,
    yearLabel: '1999 d.C.',
    lat: 50.85,
    lng: 4.35,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Euro'
  },
  {
    id: 'evt-079',
    title: 'Allargamento dell\'Unione Europea (2004)',
    description:
      '10 nuovi paesi (principalmente dell\'Europa orientale) entrano nell\'UE, raddoppiando quasi i membri.',
    startYear: 2004,
    endYear: 2004,
    yearLabel: '2004 d.C.',
    lat: 50.85,
    lng: 4.35,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Allargamento_dell%27Unione_europea_2004'
  },
  {
    id: 'evt-080',
    title: 'Crisi finanziaria globale (2008) - Impatto europeo',
    description:
      'La crisi finanziaria americana colpisce duramente l\'Europa, causando recessione e salvataggi bancari.',
    startYear: 2008,
    endYear: 2009,
    yearLabel: '2008-2009 d.C.',
    lat: 51.51,
    lng: -0.13,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_finanziaria_globale_del_2007-2008'
  },
  {
    id: 'evt-081',
    title: 'Crisi dei migranti nel Mediterraneo (2015)',
    description:
      'Migliaia di migranti rischiano la vita attraversando il Mediterraneo, provocando una crisi umanitaria in Europa.',
    startYear: 2015,
    endYear: 2015,
    yearLabel: '2015 d.C.',
    lat: 35.9,
    lng: 14.5,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_europea_dei_migranti'
  },
  {
    id: 'evt-082',
    title: 'Referendum Brexit (2016)',
    description:
      'Il Regno Unito vota per uscire dall\'Unione Europea, segnando un momento storico per l\'integrazione europea.',
    startYear: 2016,
    endYear: 2016,
    yearLabel: '2016 d.C.',
    lat: 51.51,
    lng: -0.13,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Referendum_sull%27appartenenza_del_Regno_Unito_all%27Unione_europea_del_2016'
  },
  {
    id: 'evt-083',
    title: 'Fridays for Future e movimento climatico (2018-2020)',
    description:
      'La giovane attivista Greta Thunberg ispira un movimento globale per il clima, con proteste in tutta Europa.',
    startYear: 2018,
    endYear: 2020,
    yearLabel: '2018-2020 d.C.',
    lat: 59.33,
    lng: 18.07,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Fridays_for_Future'
  },
  {
    id: 'evt-084',
    title: 'Pandemia COVID-19 in Europa (2020)',
    description:
      'L\'Europa viene colpita duramente dalla pandemia, con lockdown e misure di emergenza sanitaria.',
    startYear: 2020,
    endYear: 2021,
    yearLabel: '2020-2021 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Pandemia_di_COVID-19_in_Europa'
  },
  {
    id: 'evt-085',
    title: 'Crisi energetica europea (2022)',
    description:
      'La guerra in Ucraina causa una crisi energetica senza precedenti in Europa, con razionamenti e prezzi record.',
    startYear: 2022,
    endYear: 2023,
    yearLabel: '2022-2023 d.C.',
    lat: 52.52,
    lng: 13.41,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_energetica_europea_del_2021-2024'
  },
  {
    id: 'evt-086',
    title: 'Transizione digitale e Intelligenza Artificiale in Europa (2020-2026)',
    description:
      'L\'Europa investe massivamente in digitale e AI, con regolamentazioni innovative come l\'AI Act.',
    startYear: 2020,
    endYear: 2026,
    yearLabel: '2020-2026 d.C.',
    lat: 50.85,
    lng: 4.35,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Intelligenza_artificiale'
  },
  {
    id: 'evt-087',
    title: 'Green Deal europeo (2019-2026)',
    description:
      'L\'Unione Europea lancia il Green Deal per diventare climaticamente neutra entro il 2050.',
    startYear: 2019,
    endYear: 2026,
    yearLabel: '2019-2026 d.C.',
    lat: 50.85,
    lng: 4.35,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Green_Deal_europeo'
  },
  {
    id: 'evt-088',
    title: 'Riconoscimento dell\'indipendenza del Kosovo (2008)',
    description:
      'Dopo la guerra nei Balcani, il Kosovo dichiara indipendenza, riconosciuta da molti paesi europei.',
    startYear: 2008,
    endYear: 2008,
    yearLabel: '2008 d.C.',
    lat: 42.66,
    lng: 21.17,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dichiarazione_d%27indipendenza_del_Kosovo'
  },
  {
    id: 'evt-089',
    title: 'Eurozona e crisi del debito sovrano (2010-2012)',
    description:
      'Diversi paesi europei (Grecia, Italia, Spagna, Portogallo) affrontano crisi del debito, richiedendo aiuti internazionali.',
    startYear: 2010,
    endYear: 2012,
    yearLabel: '2010-2012 d.C.',
    lat: 37.98,
    lng: 23.72,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_del_debito_sovrano_europeo'
  },
  {
    id: 'evt-090',
    title: 'Rivoluzione digitale e social media in Europa (2000-2020)',
    description:
      'L\'Europa diventa centro della rivoluzione digitale, con startup tech e piattaforme social che nascono e si sviluppano.',
    startYear: 2000,
    endYear: 2020,
    yearLabel: '2000-2020 d.C.',
    lat: 52.37,
    lng: 4.89,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Rivoluzione_digitale'
  },
  {
    id: 'evt-091',
    title: 'Allargamento UE 2013 (Croazia)',
    description:
      'La Croazia diventa il 28° membro dell\'Unione Europea.',
    startYear: 2013,
    endYear: 2013,
    yearLabel: '2013 d.C.',
    lat: 45.81,
    lng: 15.98,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Allargamento_dell%27Unione_europea_2013'
  },
  {
    id: 'evt-092',
    title: 'Crisi ucraina e sanzioni russe (2014-2022)',
    description:
      'L\'annessione della Crimea da parte della Russia porta a sanzioni economiche e tensioni geopolitiche in Europa.',
    startYear: 2014,
    endYear: 2022,
    yearLabel: '2014-2022 d.C.',
    lat: 50.45,
    lng: 30.52,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_dell%27Ucraina'
  },
  {
    id: 'evt-093',
    title: 'Rifugiati siriani e crisi umanitaria (2015-2020)',
    description:
      'Milioni di siriani fuggono dalla guerra civile, creando la più grande crisi di rifugiati in Europa dalla Seconda Guerra Mondiale.',
    startYear: 2015,
    endYear: 2020,
    yearLabel: '2015-2020 d.C.',
    lat: 38.72,
    lng: 9.13,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_dei_rifugiati_siriani'
  },
  {
    id: 'evt-london-001',
    title: 'Esposizione Universale di Londra (1851)',
    description:
      'Il Crystal Palace ospita la prima Esposizione Universale, simbolo del trionfo della Rivoluzione Industriale britannica.',
    startYear: 1851,
    endYear: 1851,
    yearLabel: '1851 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Esposizione_universale_di_Londra_(1851)'
  },
  {
    id: 'evt-london-002',
    title: 'Costruzione del Tower Bridge (1886-1894)',
    description:
      'Viene costruito il celebre ponte levatoio sul Tamigi, icona dell\'architettura vittoriana di Londra.',
    startYear: 1886,
    endYear: 1894,
    yearLabel: '1886-1894 d.C.',
    lat: 51.5055,
    lng: -0.0754,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Tower_Bridge'
  },
  {
    id: 'evt-london-003',
    title: 'Suffragette e marcia per il voto alle donne (1913)',
    description:
      'Le suffragette britanniche organizzano manifestazioni a Londra per ottenere il diritto di voto alle donne.',
    startYear: 1913,
    endYear: 1913,
    yearLabel: '1913 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Movimento_suffragista'
  },
  {
    id: 'evt-london-004',
    title: 'Blitz di Londra durante la Seconda Guerra Mondiale (1940-1941)',
    description:
      'La Luftwaffe tedesca bombarda Londra per 57 notti consecutive, causando migliaia di vittime e distruzioni.',
    startYear: 1940,
    endYear: 1941,
    yearLabel: '1940-1941 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Blitz_di_Londra'
  },
  {
    id: 'evt-london-005',
    title: 'Festival di Londra (1951)',
    description:
      'Il Festival of Britain celebra il centenario della Grande Esposizione, rilanciando l\'immagine di Londra post-bellica.',
    startYear: 1951,
    endYear: 1951,
    yearLabel: '1951 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Festival_of_Britain'
  },
  {
    id: 'evt-london-006',
    title: 'Swinging London e rivoluzione culturale (1960s)',
    description:
      'Londra diventa il centro della controcultura giovanile, con musica, moda e arte che influenzano il mondo intero.',
    startYear: 1960,
    endYear: 1969,
    yearLabel: '1960-1969 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Swinging_London'
  },
  {
    id: 'evt-london-007',
    title: 'Attentati terroristici del 7 luglio 2005',
    description:
      'Quattro attentati coordinati colpiscono la metropolitana e un autobus di Londra, uccidendo 52 persone.',
    startYear: 2005,
    endYear: 2005,
    yearLabel: '2005 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Attentati_di_Londra_del_7_luglio_2005'
  },
  {
    id: 'evt-london-008',
    title: 'Celebrazione del Giubileo di Diamante della Regina Elisabetta II (2012)',
    description:
      'Londra ospita festeggiamenti per i 60 anni di regno della Regina, con concerti e parate lungo il Tamigi.',
    startYear: 2012,
    endYear: 2012,
    yearLabel: '2012 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Giubileo_di_diamante_di_Elisabetta_II_del_Regno_Unito'
  },
  {
    id: 'evt-london-009',
    title: 'Incendio della Grenfell Tower (2017)',
    description:
      'Un devastante incendio in un palazzo popolare di Londra uccide 72 persone, evidenziando problemi di sicurezza abitativa.',
    startYear: 2017,
    endYear: 2017,
    yearLabel: '2017 d.C.',
    lat: 51.5074,
    lng: -0.1278,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Incendio_della_Grenfell_Tower'
  },
  {
    id: 'evt-bari-001',
    title: 'Fondazione di Bari (181 a.C.)',
    description:
      'I Romani fondano Barium, importante porto commerciale nell\'Adriatico che diventa chiave per il controllo del Mediterraneo.',
    startYear: -181,
    endYear: -181,
    yearLabel: '181 a.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Bari'
  },
  {
    id: 'evt-bari-002',
    title: 'Bari capitale del Regno di Puglia (1071-1130)',
    description:
      'Dopo la conquista normanna, Bari diventa capitale del Ducato di Puglia e Calabria, centro amministrativo e commerciale.',
    startYear: 1071,
    endYear: 1130,
    yearLabel: '1071-1130 d.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ducato_di_Puglia'
  },
  {
    id: 'evt-bari-003',
    title: 'Università degli Studi di Bari (1925)',
    description:
      'Viene fondata l\'Università degli Studi di Bari, una delle più importanti istituzioni accademiche del Sud Italia.',
    startYear: 1925,
    endYear: 1925,
    yearLabel: '1925 d.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Universit%C3%A0_degli_Studi_di_Bari'
  },
  {
    id: 'evt-bari-005',
    title: 'Bari - Bombardamento durante la Seconda Guerra Mondiale (1943)',
    description:
      'Durante l\'invasione alleata dell\'Italia, Bari subisce pesanti bombardamenti che distruggono gran parte del centro storico.',
    startYear: 1943,
    endYear: 1943,
    yearLabel: '1943 d.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Bari'
  },
  {
    id: 'evt-bari-006',
    title: 'Bari - Porto commerciale moderno (1960s-1990s)',
    description:
      'Bari diventa uno dei principali porti commerciali del Mediterraneo, con il traffico di container che cresce rapidamente.',
    startYear: 1960,
    endYear: 1990,
    yearLabel: '1960-1990 d.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Porto_di_Bari'
  },
  {
    id: 'evt-bari-007',
    title: 'Bari - Metropolitana (2010s)',
    description:
      'Viene inaugurata la prima linea della metropolitana di Bari, collegando il centro con la periferia nord.',
    startYear: 2010,
    endYear: 2020,
    yearLabel: '2010-2020 d.C.',
    lat: 41.1171,
    lng: 16.8719,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Metropolitana_di_Bari'
  },
  {
    id: 'evt-roma-001',
    title: 'Fondazione di Roma (753 a.C.)',
    description:
      'Secondo la leggenda, Romolo fonda Roma sulle sponde del Tevere, dando inizio alla storia della città eterna.',
    startYear: -753,
    endYear: -753,
    yearLabel: '753 a.C.',
    lat: 41.9028,
    lng: 12.4964,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Fondazione_di_Roma'
  },
  {
    id: 'evt-roma-002',
    title: 'Impero Romano - Roma capitale (27 a.C. - 476 d.C.)',
    description:
      'Roma diventa il centro dell\'Impero Romano, governando un territorio che si estende dall\'Atlantico all\'Euphrate.',
    startYear: -27,
    endYear: 476,
    yearLabel: '27 a.C. - 476 d.C.',
    lat: 41.9028,
    lng: 12.4964,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Storia_di_Roma'
  },
  {
    id: 'evt-roma-003',
    title: 'Unificazione d\'Italia - Roma capitale (1871)',
    description:
      'Dopo l\'unificazione italiana, Roma diventa la capitale del Regno d\'Italia, segnando la fine del potere temporale dei papi.',
    startYear: 1871,
    endYear: 1871,
    yearLabel: '1871 d.C.',
    lat: 41.9028,
    lng: 12.4964,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cattura_di_Roma'
  },
  {
    id: 'evt-milano-001',
    title: 'Fondazione di Milano (600 a.C.)',
    description:
      'I Celti fondano Mediolanum, che diventa uno dei centri più importanti della Gallia Cisalpina romana.',
    startYear: -600,
    endYear: -600,
    yearLabel: '600 a.C.',
    lat: 45.4642,
    lng: 9.1900,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Storia_di_Milano'
  },
  {
    id: 'evt-milano-002',
    title: 'Duomo di Milano - Inizio costruzione (1386)',
    description:
      'Inizia la costruzione del Duomo di Milano, uno dei più grandi e importanti edifici gotici del mondo.',
    startYear: 1386,
    endYear: 1386,
    yearLabel: '1386 d.C.',
    lat: 45.4642,
    lng: 9.1900,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Duomo_di_Milano'
  },
  {
    id: 'evt-milano-003',
    title: 'Cinque Giornate di Milano (1848)',
    description:
      'L\'insurrezione popolare contro gli Austriaci segna l\'inizio della Prima Guerra d\'Indipendenza italiana.',
    startYear: 1848,
    endYear: 1848,
    yearLabel: '1848 d.C.',
    lat: 45.4642,
    lng: 9.1900,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cinque_Giornate_di_Milano'
  },
  {
    id: 'evt-parigi-001',
    title: 'Fondazione di Parigi (52 a.C.)',
    description:
      'I Romani fondano Lutetia Parisiorum sulla Senna, che diventa un importante centro amministrativo della Gallia.',
    startYear: -52,
    endYear: -52,
    yearLabel: '52 a.C.',
    lat: 48.8566,
    lng: 2.3522,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Storia_di_Parigi'
  },
  {
    id: 'evt-parigi-002',
    title: 'Rivoluzione Francese - Presa della Bastiglia (1789)',
    description:
      'Il 14 luglio, il popolo di Parigi assalta la Bastiglia, dando inizio alla Rivoluzione Francese che cambia la storia d\'Europa.',
    startYear: 1789,
    endYear: 1789,
    yearLabel: '1789 d.C.',
    lat: 48.8566,
    lng: 2.3522,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Presa_della_Bastiglia'
  },
  {
    id: 'evt-parigi-003',
    title: 'Comune di Parigi (1871)',
    description:
      'Dopo la sconfitta francese nella guerra franco-prussiana, Parigi si governa autonomamente per due mesi.',
    startYear: 1871,
    endYear: 1871,
    yearLabel: '1871 d.C.',
    lat: 48.8566,
    lng: 2.3522,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Comune_di_Parigi_(1871)'
  },
  {
    id: 'evt-parigi-004',
    title: 'Attentati terroristici di Parigi (2015)',
    description:
      'Una serie coordinata di attentati terroristici colpisce Parigi, causando 130 vittime e segnando l\'Europa.',
    startYear: 2015,
    endYear: 2015,
    yearLabel: '2015 d.C.',
    lat: 48.8566,
    lng: 2.3522,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Attentati_di_Parigi_del_2015'
  },
  {
    id: 'evt-berlino-001',
    title: 'Fondazione di Berlino (1237)',
    description:
      'Viene fondata la città di Berlino come insediamento commerciale sulla Sprea, unendo i villaggi di Cölln e Berlin.',
    startYear: 1237,
    endYear: 1237,
    yearLabel: '1237 d.C.',
    lat: 52.5200,
    lng: 13.4050,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Storia_di_Berlino'
  },
  {
    id: 'evt-berlino-002',
    title: 'Muro di Berlino - Costruzione (1961)',
    description:
      'L\'Unione Sovietica costruisce il Muro di Berlino, dividendo la città e diventando simbolo della Guerra Fredda.',
    startYear: 1961,
    endYear: 1961,
    yearLabel: '1961 d.C.',
    lat: 52.5200,
    lng: 13.4050,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Muro_di_Berlino'
  },
  {
    id: 'evt-berlino-003',
    title: 'Riunificazione di Berlino (1989)',
    description:
      'La caduta del Muro di Berlino segna la fine della divisione della Germania e della Guerra Fredda in Europa.',
    startYear: 1989,
    endYear: 1989,
    yearLabel: '1989 d.C.',
    lat: 52.5200,
    lng: 13.4050,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Caduta_del_muro_di_Berlino'
  },
  {
    id: 'evt-assiri-001',
    title: 'Inizio dell\'Impero Assiro antico (2600 a.C.)',
    description: 'La civiltà assira inizia a svilupparsi nella regione della Mesopotamia settentrionale, diventando una potenza militare.',
    startYear: -2600,
    endYear: -2600,
    yearLabel: '2600 a.C.',
    lat: 36.2,
    lng: 43.7,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Impero_assiro'
  },
  {
    id: 'evt-assiri-002',
    title: 'Ascesa di Shamshi-Adad I (1808-1791 a.C.)',
    description: 'Il grande condottiero Shamshi-Adad I espande significativamente il potere assiro nella Mesopotamia.',
    startYear: -1808,
    endYear: -1791,
    yearLabel: '1808-1791 a.C.',
    lat: 36.2,
    lng: 43.7,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Shamshi-Adad_I'
  },
  {
    id: 'evt-assiri-003',
    title: 'Periodo di stabilità assiro (1450-1378 a.C.)',
    description: 'L\'Assiria consolida il suo controllo territoriale e sviluppa la sua amministrazione.',
    startYear: -1450,
    endYear: -1378,
    yearLabel: '1450-1378 a.C.',
    lat: 36.2,
    lng: 43.7,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Impero_assiro'
  },
  {
    id: 'evt-assiri-004',
    title: 'Espansione dell\'Assiria Mediana (911-609 a.C.)',
    description: 'L\'Assiria Mediana diventa l\'Impero più grande e potente del Medio Oriente, dominando da Egitto a Persia.',
    startYear: -911,
    endYear: -609,
    yearLabel: '911-609 a.C.',
    lat: 36.2,
    lng: 43.7,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Assiria_Mediana'
  },
  {
    id: 'evt-assiri-005',
    title: 'Sargon II conquista il Regno di Israele (722 a.C.)',
    description: 'Il re assiro Sargon II conquista il Regno settentrionale di Israele, esiliando i "Dieci Perduti".',
    startYear: -722,
    endYear: -722,
    yearLabel: '722 a.C.',
    lat: 36.2,
    lng: 43.7,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Sargon_II'
  },
  {
    id: 'evt-egitto-001',
    title: 'Inizio del Regno Antico egizio (2686 a.C.)',
    description: 'Il Regno Antico dell\'Egitto inizia con la III Dinastia, segnando il periodo delle grandi piramidi.',
    startYear: -2686,
    endYear: -2686,
    yearLabel: '2686 a.C.',
    lat: 26.8,
    lng: 30.8,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Regno_Antico_egizio'
  },
  {
    id: 'evt-egitto-002',
    title: 'Grande Piramide di Giza costruita (2589-2566 a.C.)',
    description: 'La Grande Piramide di Khufu viene costruita e diventa una delle Sette Meraviglie del Mondo.',
    startYear: -2589,
    endYear: -2566,
    yearLabel: '2589-2566 a.C.',
    lat: 29.9,
    lng: 31.1,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Grande_Piramide_di_Giza'
  },
  {
    id: 'evt-egitto-003',
    title: 'Regno Medio egizio (2055-1650 a.C.)',
    description: 'Il Regno Medio rappresenta un periodo di stabilità e prosperità per l\'Egitto antico.',
    startYear: -2055,
    endYear: -1650,
    yearLabel: '2055-1650 a.C.',
    lat: 26.8,
    lng: 30.8,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Regno_Medio_egizio'
  },
  {
    id: 'evt-egitto-004',
    title: 'Regno Nuovo egizio - Empire Period (1550-1070 a.C.)',
    description: 'Il Regno Nuovo egizio rappresenta l\'apogeo della civiltà egizia con faraoni come Thutmose III e Ramesses II.',
    startYear: -1550,
    endYear: -1070,
    yearLabel: '1550-1070 a.C.',
    lat: 26.8,
    lng: 30.8,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Regno_Nuovo_egizio'
  },
  {
    id: 'evt-egitto-005',
    title: 'Thutmose III espande l\'Egitto (1479-1425 a.C.)',
    description: 'Il grande condottiero Thutmose III crea un vasto impero egizio nelle regioni del Levante e dell\'Africa.',
    startYear: -1479,
    endYear: -1425,
    yearLabel: '1479-1425 a.C.',
    lat: 26.8,
    lng: 30.8,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Thutmose_III'
  },
  {
    id: 'evt-egitto-006',
    title: 'Ramesses II il Grande (1279-1213 a.C.)',
    description: 'Ramesses II costruisce il tempio di Abu Simbel e firma il primo trattato di pace internazionale con gli Ittiti.',
    startYear: -1279,
    endYear: -1213,
    yearLabel: '1279-1213 a.C.',
    lat: 26.8,
    lng: 30.8,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Ramesses_II'
  },
  {
    id: 'evt-babilonia-001',
    title: 'Inizio della civiltà babilonese (1900 a.C.)',
    description: 'Babilonia emerge come città-stato nella Mesopotamia centrale e gradualmente guadagna potere.',
    startYear: -1900,
    endYear: -1900,
    yearLabel: '1900 a.C.',
    lat: 32.5,
    lng: 44.4,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Babilonia'
  },
  {
    id: 'evt-babilonia-002',
    title: 'Hammurabi crea il primo codice legale (1760 a.C.)',
    description: 'Hammurabi promulga il famoso Codice di Hammurabi, uno dei più antichi codici legali conosciuti.',
    startYear: -1760,
    endYear: -1760,
    yearLabel: '1760 a.C.',
    lat: 32.5,
    lng: 44.4,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Codice_di_Hammurabi'
  },
  {
    id: 'evt-babilonia-003',
    title: 'Babilonia Nuovo-Babilonese (626-539 a.C.)',
    description: 'Nabucodonosor II trasforma Babilonia in una delle più importanti città del mondo antico con i Giardini Pensili.',
    startYear: -626,
    endYear: -539,
    yearLabel: '626-539 a.C.',
    lat: 32.5,
    lng: 44.4,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Babilonia_Neo-Babilonese'
  },
  {
    id: 'evt-grecia-001',
    title: 'Civiltà Minoica a Creta (3000-1100 a.C.)',
    description: 'La civiltà minoica sviluppa una sofisticata cultura nell\'isola di Creta con palazzi importanti.',
    startYear: -3000,
    endYear: -1100,
    yearLabel: '3000-1100 a.C.',
    lat: 35.3,
    lng: 25.1,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Civilt%C3%A0_minoica'
  },
  {
    id: 'evt-grecia-002',
    title: 'Civiltà Micenea (1600-1100 a.C.)',
    description: 'La civiltà micenea si sviluppa nella Grecia continentale, precedendo la Grecia classica.',
    startYear: -1600,
    endYear: -1100,
    yearLabel: '1600-1100 a.C.',
    lat: 37.5,
    lng: 23.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Civilt%C3%A0_micenea'
  },
  {
    id: 'evt-grecia-003',
    title: 'Età del Ferro Greca e nascita della polis (1100-800 a.C.)',
    description: 'La Grecia entra in una nuova era con lo sviluppo delle città-stato (poleis) e la scrittura alfabetica.',
    startYear: -1100,
    endYear: -800,
    yearLabel: '1100-800 a.C.',
    lat: 37.5,
    lng: 23.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Archaic_Period_(Greece)'
  },
  {
    id: 'evt-grecia-004',
    title: 'Periodo Arcaico Greco (800-480 a.C.)',
    description: 'La Grecia sviluppa la democrazia ad Atene e la forma di governo oligarchica a Sparta.',
    startYear: -800,
    endYear: -480,
    yearLabel: '800-480 a.C.',
    lat: 37.5,
    lng: 23.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Archaic_Period_(Greece)'
  },
  {
    id: 'evt-grecia-005',
    title: 'Guerre Persiane (490-449 a.C.)',
    description: 'Le poleis greche si uniscono per resistere all\'invasione persiana di Serse, con vittorie a Maratona, Salamina e Platea.',
    startYear: -490,
    endYear: -449,
    yearLabel: '490-449 a.C.',
    lat: 37.5,
    lng: 23.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Guerre_persiane'
  },
  {
    id: 'evt-grecia-006',
    title: 'Età d\'Oro di Atene - Pericle (461-429 a.C.)',
    description: 'Atene raggiunge il suo apogeo culturale con Pericle, costruendo il Partenone e sviluppando la democrazia.',
    startYear: -461,
    endYear: -429,
    yearLabel: '461-429 a.C.',
    lat: 37.9,
    lng: 23.7,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Pericle'
  },
  {
    id: 'evt-grecia-007',
    title: 'Guerra del Peloponneso (431-404 a.C.)',
    description: 'Lo scontro tra Atene e Sparta definisce la storia della Grecia classica e porta alla supremazia spartana.',
    startYear: -431,
    endYear: -404,
    yearLabel: '431-404 a.C.',
    lat: 37.5,
    lng: 23.0,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Guerra_del_Peloponneso'
  },
  {
    id: 'evt-grecia-008',
    title: 'Alessandro Magno e l\'Ellenismo (336-323 a.C.)',
    description: 'Alessandro Magno conquista un vasto impero da Grecia all\'India, diffondendo la civiltà greca in oriente.',
    startYear: -336,
    endYear: -323,
    yearLabel: '336-323 a.C.',
    lat: 40.6,
    lng: 22.9,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Alessandro_Magno'
  },
  {
    id: 'evt-fenicia-001',
    title: 'Espansione fenicia (1200-332 a.C.)',
    description: 'I Fenici dominano il commercio marittimo e fondano colonie in tutto il Mediterraneo, inclusa Cartagine.',
    startYear: -1200,
    endYear: -332,
    yearLabel: '1200-332 a.C.',
    lat: 33.8,
    lng: 35.5,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Fenici'
  },
  {
    id: 'evt-fenicia-002',
    title: 'Fondazione di Cartagine (814 a.C.)',
    description: 'I Fenici fondano questa importante colonia che diventerà una potenza rivale di Roma.',
    startYear: -814,
    endYear: -814,
    yearLabel: '814 a.C.',
    lat: 36.8,
    lng: 10.3,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Cartagine'
  },
  {
    id: 'evt-persia-001',
    title: 'Impero Persiano Achemenide (550-330 a.C.)',
    description: 'Ciro il Grande fonda il primo grande Impero Persiano, estenendosi dalla Lidia all\'India.',
    startYear: -550,
    endYear: -330,
    yearLabel: '550-330 a.C.',
    lat: 32.0,
    lng: 54.0,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Impero_persiano_achemenide'
  },
  {
    id: 'evt-persia-002',
    title: 'Dario I organizza l\'Impero Persiano (522-486 a.C.)',
    description: 'Dario I consolida e organizza l\'Impero Persiano, creando un efficiente sistema amministrativo.',
    startYear: -522,
    endYear: -486,
    yearLabel: '522-486 a.C.',
    lat: 32.0,
    lng: 54.0,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dario_I'
  },
  {
    id: 'evt-ebraico-001',
    title: 'Regno di Davide e Salomone (1000-930 a.C.)',
    description: 'Il Regno Unito d\'Israele raggiunge il suo apogeo sotto Davide e Salomone con la costruzione del Primo Tempio.',
    startYear: -1000,
    endYear: -930,
    yearLabel: '1000-930 a.C.',
    lat: 31.9,
    lng: 35.2,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Regno_Unito_d%27Israele'
  },
  {
    id: 'evt-ebraico-002',
    title: 'Esilio babilonese (586-539 a.C.)',
    description: 'I Giudei vengono esiliati a Babilonia da Nabucodonosor II, segnando un periodo cruciale nella storia ebraica.',
    startYear: -586,
    endYear: -539,
    yearLabel: '586-539 a.C.',
    lat: 32.5,
    lng: 44.4,
    region: 'africaMiddleEast',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Esilio_babilonese'
  },
  {
    id: 'evt-cina-001',
    title: 'Dinastia Shang cinese (1600-1046 a.C.)',
    description: 'La Dinastia Shang è la prima dinastia storica della Cina, nota per la scrittura oracolare e il bronzo.',
    startYear: -1600,
    endYear: -1046,
    yearLabel: '1600-1046 a.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Shang'
  },
  {
    id: 'evt-cina-002',
    title: 'Dinastia Zhou e il Mandato del Cielo (1046-256 a.C.)',
    description: 'La Dinastia Zhou introduce il concetto del Mandato del Cielo e presiede un lungo periodo di sviluppo culturale.',
    startYear: -1046,
    endYear: -256,
    yearLabel: '1046-256 a.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Zhou'
  },
  {
    id: 'evt-cina-003',
    title: 'Periodo delle Primavere e Autunni (770-476 a.C.)',
    description: 'Un periodo di divisione politica in Cina con guerre costanti tra stati rivali.',
    startYear: -770,
    endYear: -476,
    yearLabel: '770-476 a.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Periodo_delle_Primavere_e_Autunni'
  },
  {
    id: 'evt-cina-004',
    title: 'Periodo dei Regni Combattenti (475-221 a.C.)',
    description: 'Un era di intensi conflitti e innovazioni tecnologiche in Cina, che culmina con la riunificazione.',
    startYear: -475,
    endYear: -221,
    yearLabel: '475-221 a.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Periodo_dei_Regni_Combattenti'
  },
  {
    id: 'evt-cina-005',
    title: 'Dinastia Qin e la Grande Muraglia (221-206 a.C.)',
    description: 'Qin Shi Huang unifica la Cina per la prima volta e inizia la costruzione della Grande Muraglia.',
    startYear: -221,
    endYear: -206,
    yearLabel: '221-206 a.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Qin'
  },
  {
    id: 'evt-cina-006',
    title: 'Dinastia Han (206 a.C. - 220 d.C.)',
    description: 'La Dinastia Han crea un vasto impero, introduce la Via della Seta e sviluppa grandi progressi culturali e tecnologici.',
    startYear: -206,
    endYear: 220,
    yearLabel: '206 a.C. - 220 d.C.',
    lat: 35.0,
    lng: 115.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Dinastia_Han'
  },
  {
    id: 'evt-india-001',
    title: 'Civiltà della Valle dell\'Indo (3300-1300 a.C.)',
    description: 'Una delle più antiche civiltà urbane con città sofisticate come Harappa e Mohenjo-daro.',
    startYear: -3300,
    endYear: -1300,
    yearLabel: '3300-1300 a.C.',
    lat: 27.0,
    lng: 68.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Civilt%C3%A0_della_Valle_dell%27Indo'
  },
  {
    id: 'evt-india-002',
    title: 'Periodo Vedico in India (1500-500 a.C.)',
    description: 'Gli Arii si insediano nell\'India settentrionale, introducendo il sanscrito e i Veda, fondamenti dell\'Induismo.',
    startYear: -1500,
    endYear: -500,
    yearLabel: '1500-500 a.C.',
    lat: 28.0,
    lng: 77.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Periodo_vedico'
  },
  {
    id: 'evt-india-003',
    title: 'Impero Maurya e Ashoka (322-185 a.C.)',
    description: 'L\'Impero Maurya conquista gran parte del subcontinente indiano. Ashoka si converte al buddhismo e diffonde la pace.',
    startYear: -322,
    endYear: -185,
    yearLabel: '322-185 a.C.',
    lat: 28.0,
    lng: 77.0,
    region: 'asiaOceania',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Impero_Maurya'
  },
  {
    id: 'evt-roma-001',
    title: 'Nascita della Repubblica Romana (509 a.C.)',
    description: 'La Repubblica Romana si forma dopo il rovesciamento dell\'ultimo re, Tarquinio il Superbo.',
    startYear: -509,
    endYear: -509,
    yearLabel: '509 a.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Repubblica_romana'
  },
  {
    id: 'evt-roma-002',
    title: 'Guerre Puniche tra Roma e Cartagine (264-146 a.C.)',
    description: 'Tre grandi guerre tra Roma e Cartagine per il controllo del Mediterraneo, con la vittoria finale di Roma.',
    startYear: -264,
    endYear: -146,
    yearLabel: '264-146 a.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Guerre_puniche'
  },
  {
    id: 'evt-roma-003',
    title: 'Crisi della Repubblica Romana (133-30 a.C.)',
    description: 'La Repubblica Romana entra in una fase di instabilità politica con guerre civili che culminano nell\'Impero.',
    startYear: -133,
    endYear: -30,
    yearLabel: '133-30 a.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_della_Repubblica_romana'
  },
  {
    id: 'evt-roma-004',
    title: 'Giulio Cesare conquista la Gallia (58-50 a.C.)',
    description: 'Giulio Cesare conquista la Gallia (Francia moderna) e diventa un eroe popolare a Roma.',
    startYear: -58,
    endYear: -50,
    yearLabel: '58-50 a.C.',
    lat: 48.0,
    lng: 2.0,
    region: 'europe',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Conquista_della_Gallia'
  },
  {
    id: 'evt-roma-005',
    title: 'Battaglia di Azio e inizio dell\'Impero (31 a.C.)',
    description: 'Ottaviano sconfigge Marco Antonio e Cleopatra nella Battaglia di Azio, diventando il primo Imperatore Romano.',
    startYear: -31,
    endYear: -31,
    yearLabel: '31 a.C.',
    lat: 39.0,
    lng: 20.7,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Battaglia_di_Azio'
  },
  {
    id: 'evt-roma-006',
    title: 'Augusto e la Pax Romana (27 a.C. - 14 d.C.)',
    description: 'Augusto istituisce un lungo periodo di pace e prosperità nell\'Impero Romano, espandendo i confini.',
    startYear: -27,
    endYear: 14,
    yearLabel: '27 a.C. - 14 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Augusto'
  },
  {
    id: 'evt-roma-007',
    title: 'Eruzione del Vesuvio e distruzione di Pompei (79 d.C.)',
    description: 'L\'eruzione del Vesuvio distrugge le città romane di Pompei ed Ercolano, preservandole per la posterità.',
    startYear: 79,
    endYear: 79,
    yearLabel: '79 d.C.',
    lat: 40.7,
    lng: 14.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Eruzione_del_Vesuvio_del_79'
  },
  {
    id: 'evt-roma-008',
    title: 'Apogeo dell\'Impero Romano (117-180 d.C.)',
    description: 'Sotto Traiano e gli Antonini, l\'Impero Romano raggiunge la sua massima estensione territoriale.',
    startYear: 117,
    endYear: 180,
    yearLabel: '117-180 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Impero_Romano'
  },
  {
    id: 'evt-roma-009',
    title: 'Crisi del III secolo (235-284 d.C.)',
    description: 'L\'Impero Romano affronta una grave crisi politica e militare con 50 imperatori in 50 anni.',
    startYear: 235,
    endYear: 284,
    yearLabel: '235-284 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Crisi_del_III_secolo'
  },
  {
    id: 'evt-roma-010',
    title: 'Diocleziano divide l\'Impero (285 d.C.)',
    description: 'L\'Imperatore Diocleziano divide l\'Impero Romano in Oriente e Occidente per amministrarlo meglio.',
    startYear: 285,
    endYear: 285,
    yearLabel: '285 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Diocleziano'
  },
  {
    id: 'evt-roma-011',
    title: 'Costantino abbraccia il Cristianesimo (312 d.C.)',
    description: 'Costantino diventa il primo imperatore cristiano, trasformando il Cristianesimo in religione principale dell\'Impero.',
    startYear: 312,
    endYear: 312,
    yearLabel: '312 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Costantino'
  },
  {
    id: 'evt-roma-012',
    title: 'Caduta dell\'Impero Romano d\'Occidentale (476 d.C.)',
    description: 'L\'Impero Romano d\'Occidente cade sotto le invasioni germaniche, segnando la fine dell\'Antichità.',
    startYear: 476,
    endYear: 476,
    yearLabel: '476 d.C.',
    lat: 41.9,
    lng: 12.5,
    region: 'mediterranean',
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Caduta_dell%27Impero_romano_d%27Occidente'
  }
];
