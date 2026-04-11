export type PhaseId =
  | 'acte1_grotte'
  | 'acte2_foret'
  | 'acte3_chasse'
  | 'acte4_campement'
  | 'acte5_egypte'
  | 'acte6_grece'
  | 'acte7_medieval'
  | 'acte8_aujourdhui'
  | 'intro_instruments'
  | 'transition_voyage'
  | 'fabrication'
  | 'conclusion'
  | 'concert_salut'

export interface Track {
  id: string
  title: string
  artist: string
  spotifyUrl: string
  moment: string
  volume: number
  loop: boolean
  phase: PhaseId
}

export const playlist: Track[] = [
  {
    id: 'fire',
    title: 'Crackling Fire Sounds Pt. 01',
    artist: 'White Noise Radiance',
    spotifyUrl: 'https://open.spotify.com/track/1qoW8GCTXfgB7k7hDewqpV',
    moment: 'Grotte préhistorique — ambiance feu',
    volume: 35,
    loop: true,
    phase: 'acte1_grotte',
  },
  {
    id: 'birds',
    title: 'Morning Birds Chirping',
    artist: '101 Noise',
    spotifyUrl: 'https://open.spotify.com/track/1biHJNhjMWxdhRpzuU66rN',
    moment: 'Forêt et rivière — ambiance oiseaux',
    volume: 35,
    loop: true,
    phase: 'acte2_foret',
  },
  {
    id: 'wind',
    title: 'Wind Sounds: Strong Wind',
    artist: 'Calmsound',
    spotifyUrl: 'https://open.spotify.com/track/0m08WL2WTUoWa5zdd14qSE',
    moment: 'Chasse — ambiance vent',
    volume: 25,
    loop: true,
    phase: 'acte3_chasse',
  },
  {
    id: 'mohicans',
    title: 'Last of the Mohicans Theme',
    artist: 'Royal Scots Dragoon Guards',
    spotifyUrl: 'https://open.spotify.com/track/7IMtOhl07wzzfMdb9zPG0t',
    moment: 'Chasse — thème épique',
    volume: 30,
    loop: false,
    phase: 'acte3_chasse',
  },
  {
    id: 'river',
    title: 'Gentle Rivers and Streams',
    artist: 'Natural Sounds',
    spotifyUrl: 'https://open.spotify.com/track/6fGc5cnCSrErtW4uom7hFT',
    moment: 'Campement — ambiance rivière',
    volume: 30,
    loop: true,
    phase: 'acte4_campement',
  },
  {
    id: 'egypt',
    title: 'Egyptischer Marsch, Op. 335',
    artist: 'Wiener Philharmoniker',
    spotifyUrl: 'https://open.spotify.com/track/6WMqTrcmpHANlP8CN0Y1c0',
    moment: 'Égypte — marche égyptienne',
    volume: 40,
    loop: false,
    phase: 'acte5_egypte',
  },
  {
    id: 'greece',
    title: 'Ancient Greek Dance',
    artist: 'The Gurdjieff Ensemble',
    spotifyUrl: 'https://open.spotify.com/track/0d5RpeM1vOqXR6MPTqRQ23',
    moment: 'Grèce — danse antique',
    volume: 35,
    loop: false,
    phase: 'acte6_grece',
  },
  {
    id: 'zorba',
    title: "Zorba's Dance (Sirtaki)",
    artist: 'André Rieu',
    spotifyUrl: 'https://open.spotify.com/track/236Yuj2yrsBjXNLsq1FULC',
    moment: 'Grèce — sirtaki',
    volume: 35,
    loop: false,
    phase: 'acte6_grece',
  },
  {
    id: 'gregorian',
    title: 'Dies irae',
    artist: 'Chœur Bénedictins Silos',
    spotifyUrl: 'https://open.spotify.com/track/6eqtPlGiqdvLdzyjpiVQ0b',
    moment: 'Moyen-Âge — chant grégorien',
    volume: 40,
    loop: false,
    phase: 'acte7_medieval',
  },
  {
    id: 'sir_duke',
    title: 'Sir Duke',
    artist: 'Stevie Wonder',
    spotifyUrl: 'https://open.spotify.com/track/23dwpRvxImSXGWXSFJ2ldh',
    moment: "Aujourd'hui — intro 40 sec",
    volume: 70,
    loop: false,
    phase: 'acte8_aujourdhui',
  },
  {
    id: 'claire',
    title: 'Claire de Lune',
    artist: 'Debussy / Lapinsch',
    spotifyUrl: 'https://open.spotify.com/track/5wC4AmhFaOmM3OAGwkKyhi',
    moment: 'Conclusion — fond calme',
    volume: 20,
    loop: false,
    phase: 'conclusion',
  },
  {
    id: 'pierre',
    title: "Pierre, l'oiseau et le canard",
    artist: 'Gérard Philipe',
    spotifyUrl: 'https://open.spotify.com/track/4Xu85zw4h4qF0NLdRq954o',
    moment: 'Transition vers le voyage',
    volume: 50,
    loop: false,
    phase: 'transition_voyage',
  },
  {
    id: 'morning',
    title: 'Morning Mood (Peer Gynt)',
    artist: 'Grieg / Karajan',
    spotifyUrl: 'https://open.spotify.com/track/0awWxz7WRKdSpU9RVZ5PVK',
    moment: 'Fond découverte instruments',
    volume: 20,
    loop: false,
    phase: 'intro_instruments',
  },
  {
    id: 'yeha',
    title: 'Yeha Noha',
    artist: 'Sacred Spirit',
    spotifyUrl: 'https://open.spotify.com/track/6pfdfnkhql0kR3x5cRZhQI',
    moment: 'Fabrication — rotation',
    volume: 30,
    loop: false,
    phase: 'fabrication',
  },
  {
    id: 'african',
    title: 'African Drums',
    artist: 'African Tribal Orchestra',
    spotifyUrl: 'https://open.spotify.com/track/0Az99LafZRlNEzlwVE7xsq',
    moment: 'Fabrication — rotation',
    volume: 30,
    loop: false,
    phase: 'fabrication',
  },
  {
    id: 'desert',
    title: 'Desert Rose',
    artist: 'Sting & Cheb Mami',
    spotifyUrl: 'https://open.spotify.com/track/3zYufmyv6HOuiHn1eMR6Ja',
    moment: 'Fabrication — rotation',
    volume: 30,
    loop: false,
    phase: 'fabrication',
  },
  {
    id: 'rite',
    title: 'The Rite of Spring Pt.1',
    artist: 'Stravinsky / Karajan',
    spotifyUrl: 'https://open.spotify.com/track/1tETD10MgBqYpqjlFdgH2W',
    moment: 'Fabrication — rotation',
    volume: 30,
    loop: false,
    phase: 'fabrication',
  },
  {
    id: 'bumblebee',
    title: 'Flight of the Bumblebee',
    artist: 'Rimsky-Korsakov',
    spotifyUrl: 'https://open.spotify.com/track/0nF5aQoLs2YtbWwClXvumL',
    moment: 'Fabrication — rotation',
    volume: 30,
    loop: false,
    phase: 'fabrication',
  },
  {
    id: 'sir_duke_final',
    title: "L'éléphant (Carnaval des animaux)",
    artist: 'Saint-Saëns',
    spotifyUrl: 'https://open.spotify.com/track/23dwpRvxImSXGWXSFJ2ldh',
    moment: 'Concert — salut final',
    volume: 80,
    loop: false,
    phase: 'concert_salut',
  },
]

export function getTrack(id: string): Track | undefined {
  return playlist.find((t) => t.id === id)
}

export function getTracksByPhase(phase: PhaseId): Track[] {
  return playlist.filter((t) => t.phase === phase)
}
