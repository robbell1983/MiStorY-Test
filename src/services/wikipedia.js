const WIKI_SEARCH_URL = 'https://it.wikipedia.org/w/api.php';
const WIKI_SUMMARY_URL = 'https://it.wikipedia.org/api/rest_v1/page/summary';

function encodeTitle(title) {
  return encodeURIComponent(String(title).replace(/ /g, '_'));
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatYear(year) {
  if (year < 0) return `${Math.abs(year)} a.C.`;
  return `${year} d.C.`;
}

function inferYearsFromText(text) {
  if (!text) {
    return {
      startYear: -500,
      endYear: 2026,
      yearLabel: 'Periodo storico'
    };
  }

  const normalized = String(text).replace(/\u2013|\u2014/g, '-');

  const bcMatches = [...normalized.matchAll(/(\d{1,5})\s*a\.?\s?c\.?/gi)].map((m) =>
    -parseInt(m[1], 10)
  );

  const adMatches = [...normalized.matchAll(/(?<!\d)(\d{3,4})(?!\d)/g)].map((m) =>
    parseInt(m[1], 10)
  );

  const years = [...bcMatches, ...adMatches].filter((year) => year >= -10000 && year <= 2026);

  if (!years.length) {
    return {
      startYear: -500,
      endYear: 2026,
      yearLabel: 'Periodo storico'
    };
  }

  const startYear = Math.min(...years);
  const endYear = Math.max(...years);

  return {
    startYear,
    endYear,
    yearLabel:
      startYear === endYear
        ? formatYear(startYear)
        : `${formatYear(startYear)} → ${formatYear(endYear)}`
  };
}

function inferRegionFromCoords(lat, lng) {
  if (lat >= -35 && lat <= 37 && lng >= -20 && lng <= 60) return 'africaMiddleEast';
  if (lat >= 35 && lat <= 72 && lng >= -12 && lng <= 40) return 'europe';
  if (lat >= 28 && lat <= 47 && lng >= -6 && lng <= 40) return 'mediterranean';
  if (lng >= 40 && lng <= 180) return 'asiaOceania';
  return 'americas';
}

function getKnowledgeMap() {
  return {
    // Italia
    italia: { lat: 41.8719, lng: 12.5674, region: 'mediterranean' },
    roma: { lat: 41.9028, lng: 12.4964, region: 'mediterranean' },
    milano: { lat: 45.4642, lng: 9.19, region: 'europe' },
    napoli: { lat: 40.8518, lng: 14.2681, region: 'mediterranean' },
    bari: { lat: 41.1171, lng: 16.8719, region: 'mediterranean' },
    puglia: { lat: 41.1256, lng: 16.8667, region: 'mediterranean' },
    'acquedotto pugliese': { lat: 41.1171, lng: 16.8719, region: 'mediterranean' },
    masaniello: { lat: 40.8518, lng: 14.2681, region: 'mediterranean' },
    firenze: { lat: 43.7696, lng: 11.2558, region: 'europe' },
    venezia: { lat: 45.4408, lng: 12.3155, region: 'europe' },
    torino: { lat: 45.0703, lng: 7.6869, region: 'europe' },
    palermo: { lat: 38.1157, lng: 13.3615, region: 'mediterranean' },
    sicilia: { lat: 37.5999, lng: 14.0154, region: 'mediterranean' },
    genova: { lat: 44.4056, lng: 8.9463, region: 'europe' },
    bologna: { lat: 44.4949, lng: 11.3426, region: 'europe' },
    pisa: { lat: 43.7228, lng: 10.4017, region: 'europe' },

    // Europa
    madrid: { lat: 40.4168, lng: -3.7038, region: 'europe' },
    spagna: { lat: 40.4637, lng: -3.7492, region: 'europe' },
    barcellona: { lat: 41.3874, lng: 2.1686, region: 'europe' },
    parigi: { lat: 48.8566, lng: 2.3522, region: 'europe' },
    francia: { lat: 46.2276, lng: 2.2137, region: 'europe' },
    londra: { lat: 51.5074, lng: -0.1278, region: 'europe' },
    liverpool: { lat: 53.4084, lng: -2.9916, region: 'europe' },
    beatles: { lat: 53.4084, lng: -2.9916, region: 'europe' },
    berlino: { lat: 52.52, lng: 13.405, region: 'europe' },
    germania: { lat: 51.1657, lng: 10.4515, region: 'europe' },
    vienna: { lat: 48.2082, lng: 16.3738, region: 'europe' },
    grecia: { lat: 39.0742, lng: 21.8243, region: 'mediterranean' },
    atene: { lat: 37.9838, lng: 23.7275, region: 'mediterranean' },
    liverpoolfc: { lat: 53.4308, lng: -2.9608, region: 'europe' },

    // Personaggi / entità culturali
    napoleone: { lat: 48.8566, lng: 2.3522, region: 'europe' },
    napoleon: { lat: 48.8566, lng: 2.3522, region: 'europe' },
    cesare: { lat: 41.9028, lng: 12.4964, region: 'mediterranean' },
    cesar: { lat: 41.9028, lng: 12.4964, region: 'mediterranean' },
    dante: { lat: 43.7696, lng: 11.2558, region: 'europe' },
    leonardo: { lat: 45.4642, lng: 9.19, region: 'europe' },
    michelangelo: { lat: 43.7696, lng: 11.2558, region: 'europe' },
    hitler: { lat: 52.52, lng: 13.405, region: 'europe' },
    einstein: { lat: 48.1351, lng: 11.582, region: 'europe' },
    mozart: { lat: 48.2082, lng: 16.3738, region: 'europe' },

    // Medio Oriente / antichità
    egitto: { lat: 26.8206, lng: 30.8025, region: 'africaMiddleEast' },
    gerusalemme: { lat: 31.7683, lng: 35.2137, region: 'africaMiddleEast' },
    assiri: { lat: 36.345, lng: 43.157, region: 'africaMiddleEast' },
    assiria: { lat: 36.345, lng: 43.157, region: 'africaMiddleEast' },
    babilonia: { lat: 32.542, lng: 44.42, region: 'africaMiddleEast' },
    mesopotamia: { lat: 33.2232, lng: 43.6793, region: 'africaMiddleEast' },
    persiani: { lat: 29.5918, lng: 52.5837, region: 'africaMiddleEast' },
    persia: { lat: 32.4279, lng: 53.688, region: 'africaMiddleEast' },

    // Asia
    tokyo: { lat: 35.6762, lng: 139.6503, region: 'asiaOceania' },
    giappone: { lat: 36.2048, lng: 138.2529, region: 'asiaOceania' },
    kyoto: { lat: 35.0116, lng: 135.7681, region: 'asiaOceania' },
    cina: { lat: 35.8617, lng: 104.1954, region: 'asiaOceania' },
    pechino: { lat: 39.9042, lng: 116.4074, region: 'asiaOceania' },

    // Americhe
    usa: { lat: 39.8283, lng: -98.5795, region: 'americas' },
    america: { lat: 39.8283, lng: -98.5795, region: 'americas' },
    newyork: { lat: 40.7128, lng: -74.006, region: 'americas' },
    'new york': { lat: 40.7128, lng: -74.006, region: 'americas' }
  };
}

function getFallbackLocationForQuery(query) {
  const knowledgeMap = getKnowledgeMap();
  const normalizedQuery = normalizeText(query);

  if (knowledgeMap[normalizedQuery]) {
    return knowledgeMap[normalizedQuery];
  }

  for (const key of Object.keys(knowledgeMap)) {
    if (normalizedQuery.includes(key)) {
      return knowledgeMap[key];
    }
  }

  // fallback europeo/italiano, non Africa
  return knowledgeMap.italia;
}

function scoreTextAgainstKey(text, key) {
  const normalizedText = normalizeText(text);
  const normalizedKey = normalizeText(key);

  if (!normalizedText || !normalizedKey) return 0;
  if (normalizedText === normalizedKey) return 200;
  if (normalizedText.includes(normalizedKey)) return 80;

  const keyWords = normalizedKey.split(' ').filter(Boolean);
  let score = 0;

  for (const word of keyWords) {
    if (normalizedText.includes(word)) score += 15;
  }

  return score;
}

function guessLocationFromText(query, title, description) {
  const knowledgeMap = getKnowledgeMap();
  const normalizedQuery = normalizeText(query);
  const corpus = [query, title, description].map(normalizeText).join(' | ');

  // priorità 1: query diretta
  for (const key of Object.keys(knowledgeMap)) {
    if (normalizedQuery.includes(key)) {
      return knowledgeMap[key];
    }
  }

  // priorità 2: titolo
  const normalizedTitle = normalizeText(title);
  for (const key of Object.keys(knowledgeMap)) {
    if (normalizedTitle.includes(key)) {
      return knowledgeMap[key];
    }
  }

  // priorità 3: punteggio su corpus
  let bestKey = null;
  let bestScore = 0;

  for (const key of Object.keys(knowledgeMap)) {
    const score =
      scoreTextAgainstKey(query, key) * 3 +
      scoreTextAgainstKey(title, key) * 4 +
      scoreTextAgainstKey(description, key) * 2 +
      scoreTextAgainstKey(corpus, key);

    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }

  if (bestKey) {
    return knowledgeMap[bestKey];
  }

  return getFallbackLocationForQuery(query);
}

function extractUsefulTerms(query) {
  const stopWords = new Set([
    'di', 'del', 'della', 'dello', 'dei', 'degli', 'delle',
    'a', 'da', 'in', 'su', 'con', 'per', 'tra', 'fra',
    'il', 'lo', 'la', 'i', 'gli', 'le',
    'e', 'ed', 'o',
    'storia', 'storico', 'storica', 'evento', 'eventi'
  ]);

  return normalizeText(query)
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

async function wikipediaSearch(searchTerm, limit = 6) {
  const url =
    `${WIKI_SEARCH_URL}?action=opensearch&format=json&origin=*` +
    `&limit=${limit}&search=${encodeURIComponent(searchTerm)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Errore durante la ricerca su Wikipedia');
  }

  const data = await response.json();
  return Array.isArray(data?.[1]) ? data[1] : [];
}

function scoreTitleAgainstQuery(title, query, terms) {
  const normalizedTitle = normalizeText(title);
  const normalizedQuery = normalizeText(query);

  let score = 0;

  if (normalizedTitle === normalizedQuery) score += 220;
  if (normalizedTitle.includes(normalizedQuery)) score += 120;

  for (const term of terms) {
    if (normalizedTitle.includes(term)) score += 24;
  }

  return score;
}

async function fetchSummary(title, query, index) {
  try {
    const summaryResponse = await fetch(`${WIKI_SUMMARY_URL}/${encodeTitle(title)}`);
    if (!summaryResponse.ok) return null;

    const summary = await summaryResponse.json();
    const summaryTitle = summary.title || title;
    const extract = summary.extract || 'Voce Wikipedia disponibile.';
    const guessedLocation = guessLocationFromText(
      query,
      summaryTitle,
      `${summary.description || ''} ${extract}`
    );

    const coords = summary.coordinates
      ? { lat: summary.coordinates.lat, lng: summary.coordinates.lon }
      : guessedLocation;

    const years = inferYearsFromText(
      `${summaryTitle}. ${summary.description || ''}. ${extract}`
    );

    return {
      id: `wiki-${normalizeText(summaryTitle)}-${index}`,
      title: summaryTitle,
      description: extract,
      startYear: years.startYear,
      endYear: years.endYear,
      yearLabel: years.yearLabel,
      lat: coords.lat,
      lng: coords.lng,
      region: inferRegionFromCoords(coords.lat, coords.lng),
      wikipediaUrl:
        summary?.content_urls?.desktop?.page ||
        `https://it.wikipedia.org/wiki/${encodeTitle(summaryTitle)}`,
      imageUrl: summary?.thumbnail?.source || '',
      sourceLabel: 'Wikipedia',
      isWikipedia: true
    };
  } catch (error) {
    console.error('Errore nel summary Wikipedia:', error);
    return null;
  }
}

export async function searchWikipediaEvents(query) {
  const cleanQuery = String(query || '').trim();
  if (!cleanQuery) return [];

  const usefulTerms = extractUsefulTerms(cleanQuery);

  const searchTerms = [
    cleanQuery,
    ...usefulTerms,
    usefulTerms.slice(0, 2).join(' '),
    usefulTerms.join(' ')
  ]
    .map((term) => term.trim())
    .filter(Boolean);

  const uniqueSearchTerms = [...new Set(searchTerms)];

  let titles = [];

  for (const term of uniqueSearchTerms) {
    try {
      const foundTitles = await wikipediaSearch(term, 6);
      titles.push(...foundTitles);
    } catch (error) {
      console.error('Errore ricerca Wikipedia:', error);
    }
  }

  const uniqueTitles = [...new Set(titles)]
    .sort(
      (a, b) =>
        scoreTitleAgainstQuery(b, cleanQuery, usefulTerms) -
        scoreTitleAgainstQuery(a, cleanQuery, usefulTerms)
    )
    .slice(0, 10);

  if (!uniqueTitles.length) {
    const fallback = getFallbackLocationForQuery(cleanQuery);

    return [
      {
        id: `wiki-fallback-${normalizeText(cleanQuery)}`,
        title: cleanQuery,
        description: `Nessuna voce precisa trovata su Wikipedia. Questo è un risultato generico collegato alla ricerca "${cleanQuery}".`,
        startYear: -500,
        endYear: 2026,
        yearLabel: 'Periodo storico',
        lat: fallback.lat,
        lng: fallback.lng,
        region: fallback.region,
        wikipediaUrl: `https://it.wikipedia.org/wiki/${encodeTitle(cleanQuery)}`,
        imageUrl: '',
        sourceLabel: 'Wikipedia',
        isWikipedia: true
      }
    ];
  }

  const results = await Promise.all(
    uniqueTitles.map((title, index) => fetchSummary(title, cleanQuery, index))
  );

  const filtered = results.filter(Boolean);

  if (filtered.length) return filtered;

  const fallback = getFallbackLocationForQuery(cleanQuery);

  return [
    {
      id: `wiki-fallback-${normalizeText(cleanQuery)}`,
      title: cleanQuery,
      description: `Nessuna voce dettagliata disponibile al momento per "${cleanQuery}".`,
      startYear: -500,
      endYear: 2026,
      yearLabel: 'Periodo storico',
      lat: fallback.lat,
      lng: fallback.lng,
      region: fallback.region,
      wikipediaUrl: `https://it.wikipedia.org/wiki/${encodeTitle(cleanQuery)}`,
      imageUrl: '',
      sourceLabel: 'Wikipedia',
      isWikipedia: true
    }
  ];
}