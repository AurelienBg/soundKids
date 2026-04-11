export type SectionId = 'introduction' | 'voyage' | 'fabrication' | 'concert' | 'conclusion' | 'preparation'

export interface Step {
  type: 'text' | 'scene' | 'music' | 'vibro' | 'tip' | 'question' | 'photo' | 'list'
  content?: string
  trackId?: string
  question?: string
  answer?: string
  photo?: string
  items?: string[]
}

export interface SubPhase {
  id: string
  title: string
  duration?: string
  zone?: string
  steps: Step[]
}

export interface Phase {
  id: SectionId
  label: string
  duration: number | null
  color: string
  subPhases: SubPhase[]
}

export const phases: Phase[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    duration: 25,
    color: 'teal',
    subPhases: [
      {
        id: 'accueil',
        title: 'A. Accueil',
        duration: '5 min',
        steps: [
          { type: 'scene', content: 'Enfants assis en cercle au centre.' },
          { type: 'scene', content: '« Levez la main si vous aimez la musique ! »' },
          { type: 'scene', content: '« Aujourd\'hui voyage MAGIQUE dans le temps, jusqu\'à 40 000 ans en arrière ! »' },
          { type: 'scene', content: '« Mais d\'abord... il faut s\'entraîner à bien ÉCOUTER. »' },
          { type: 'tip', content: 'Musique : silence total.' },
        ],
      },
      {
        id: 'conte_vibro',
        title: 'B. Conte de Vibro',
        duration: '5 min',
        steps: [
          {
            type: 'vibro',
            content:
              "Il y a très très longtemps, bien avant les radios et les enceintes, le monde était... silencieux. Dans ce monde vivait un petit lutin qui s'appelait Vibro. Il avait plein de chansons dans sa tête, mais personne ne pouvait les entendre.\n\nUn jour, il trouva un fil d'araignée tendu entre deux branches. Il tira dessus... TING ! Un son était né !\n\nVibro comprit un grand secret : pour faire de la musique, il faut quelque chose qui vibre. Mais le son du fil était tout petit... Alors il trouva une vieille écorce creuse, posa son fil dessus et... TOOOING ! Le son devint grand et joyeux !\n\nAujourd'hui, Vibro vous a confié une mission : fabriquer des maisons pour les sons. On va prendre des élastiques-araignées, des boîtes-maisons, et réveiller la musique qui dort à l'intérieur !",
          },
          { type: 'tip', content: 'Interaction : mimer pincer corde invisible → « TING ! »' },
          { type: 'tip', content: 'Conseil : tenir une boîte cachée, la révéler à la fin.' },
        ],
      },
      {
        id: 'jeu_silence',
        title: 'C. Jeu du silence et écoute de soi',
        duration: '5 min',
        steps: [
          { type: 'scene', content: '30 sec silence, yeux fermés → « Son le plus lointain ? Le plus proche ? »' },
          { type: 'scene', content: 'Le cœur : main poitrine → « Boum-boum... premier rythme ! » → taper ensemble.' },
          { type: 'scene', content: 'La voix : main sur gorge → « AAAAAAH — Ça VIBRE ! »' },
          { type: 'scene', content: 'Grave (ours, se pencher) : OOOOOH / Aigu (oiseau, pointe pieds) : IIIIIII' },
          { type: 'tip', content: 'Musique : silence total.' },
        ],
      },
      {
        id: 'exploration_instruments',
        title: 'D. Exploration et classement des instruments',
        duration: '12 min',
        steps: [
          { type: 'tip', content: 'Pour chaque instrument : faire sonner caché → révéler → tous miment → 1-2 enfants touchent.' },
          {
            type: 'list',
            items: [
              '1. Tambour — BOUM BOUM → Taper dans le vide',
              '2. Maracas — CHA-CHA → Secouer les poings',
              '3. Flûte / kazoo — FIUUUUU → Souffler dans mains jointes',
              '4. Guitare / ukulélé — ZING ZING → Pincer cordes invisibles',
              '5. Triangle — TING TING → Baguette imaginaire',
              '6. Trompette — TATATAAA → Souffler devant bouche',
            ],
          },
          { type: 'text', content: 'Classement → PERCUSSIONS · VENTS · CORDES' },
          { type: 'music', trackId: 'morning' },
          { type: 'music', trackId: 'african' },
        ],
      },
      {
        id: 'transition_voyage',
        title: 'E. Transition vers le voyage',
        duration: '3 min',
        steps: [
          { type: 'scene', content: 'Extraits Pierre et le Loup (20-30 sec chacun) : Pierre (cordes) → Loup (cuivres) → Chasseurs (percussions).' },
          { type: 'scene', content: 'Compte à rebours : « 10-9-8-7-6-5-4-3-2-1... »' },
          { type: 'music', trackId: 'pierre' },
        ],
      },
    ],
  },
  {
    id: 'voyage',
    label: 'Voyage dans le temps',
    duration: 25,
    color: 'amber',
    subPhases: [
      {
        id: 'acte1_grotte',
        title: 'Acte 1 — Grotte préhistorique · -40 000 ans',
        duration: '6 min',
        zone: 'Zone 1',
        steps: [
          { type: 'tip', content: 'Setup : éteindre lumières, allumer lampe torche « feu ».' },
          { type: 'scene', content: 'Pierres frappées CLAC-CLAC → rythme 1-2-3-4 (20 sec).' },
          { type: 'scene', content: 'Percussions corporelles : mains (CLAP) → pieds (STOMP) → cuisses (PAT) → poitrine (BOOM).' },
          { type: 'scene', content: 'Danse tribale CLAP-CLAP-STOMP × 4, tourner, crescendo 30 sec.' },
          { type: 'scene', content: 'Voix : OOOOOH / IIIIIII / OUH OUH AH AH → fredonner : « Hmmmm ».' },
          { type: 'music', trackId: 'fire' },
          { type: 'photo', photo: '/photos/grotte.jpg' },
        ],
      },
      {
        id: 'acte2_foret',
        title: 'Acte 2 — Forêt et rivière · -20 000 ans',
        duration: '7 min',
        zone: 'Zone 2',
        steps: [
          { type: 'scene', content: 'Marche sur feuilles : « CRUNCH CRUNCH ! »' },
          { type: 'scene', content: 'Bâtons : tronc (TOC) · pierre (TIC) · sol (BOOM) → 2 min exploration libre.' },
          { type: 'scene', content: 'Roseau creux soufflé : FIUUUUU = premier instrument à vent.' },
          { type: 'scene', content: 'Coquillage : HOUUUUU' },
          { type: 'music', trackId: 'birds' },
          { type: 'photo', photo: '/photos/foret.jpg' },
        ],
      },
      {
        id: 'acte3_chasse',
        title: 'Acte 3 — Chasse et arc musical · -15 000 ans',
        duration: '4 min',
        zone: 'Centre',
        steps: [
          { type: 'scene', content: 'Mimer arc, viser, tirer → WHOOSH → corde ZING !' },
          { type: 'scene', content: 'Pincer élastique tendu → vibration → lien avec gorge.' },
          { type: 'scene', content: 'Ajouter courge creuse → TOOOING ! → ancêtre harpe/guitare/piano.' },
          { type: 'music', trackId: 'wind' },
          { type: 'music', trackId: 'mohicans' },
          {
            type: 'question',
            question: 'Tirer plus fort sur l\'élastique = son plus aigu ou plus grave ?',
            answer: 'Plus tendu = plus aigu. Gros élastique = grave. Fin = aigu.',
          },
        ],
      },
      {
        id: 'acte4_campement',
        title: 'Acte 4 — Campement et tambour · -8 000 ans',
        duration: '3 min',
        zone: 'Zone 2b',
        steps: [
          { type: 'scene', content: 'Peau tendue sur tronc → BOUM !' },
          { type: 'scene', content: 'Enfants touchent → sentent la vibration.' },
          { type: 'music', trackId: 'river' },
          {
            type: 'question',
            question: 'Posez la main sur les élastiques et jouez — que se passe-t-il ?',
            answer: 'Le son s\'arrête ! Vibration bloquée.',
          },
        ],
      },
      {
        id: 'acte5_egypte',
        title: 'Acte 5 — Égypte · -3 000 ans',
        duration: '2 min',
        zone: 'Zone 3',
        steps: [
          { type: 'scene', content: 'Marche égyptienne. Flûtes à trous, harpes, systres.' },
          { type: 'music', trackId: 'egypt' },
          { type: 'photo', photo: '/photos/egypte.jpg' },
        ],
      },
      {
        id: 'acte6_grece',
        title: 'Acte 6 — Grèce · -500 ans',
        duration: '2 min',
        zone: 'Zone 4',
        steps: [
          { type: 'scene', content: 'Cercle coussins. Mimer poète + lyre imaginaire : « la-la-la ».' },
          { type: 'music', trackId: 'greece' },
          { type: 'music', trackId: 'zorba' },
          { type: 'photo', photo: '/photos/grece.jpg' },
        ],
      },
      {
        id: 'acte7_medieval',
        title: 'Acte 7 — Moyen-Âge · 1000 ap. J-C',
        duration: '3 min',
        zone: 'Zone 5',
        steps: [
          { type: 'scene', content: 'Chant unisson → HARMONIE : groupe 1 « OOOOOH » + groupe 2 « AAAAH ».' },
          { type: 'music', trackId: 'gregorian' },
          { type: 'photo', photo: '/photos/medieval.jpg' },
        ],
      },
      {
        id: 'acte8_aujourdhui',
        title: "Acte 8 — Aujourd'hui · 2026",
        duration: '2 min',
        zone: 'Centre',
        steps: [
          { type: 'scene', content: 'Lumières rallumées. Pierres→batterie / Roseau→flûte / Arc→guitare. Tous dansent !' },
          { type: 'music', trackId: 'sir_duke' },
        ],
      },
    ],
  },
  {
    id: 'fabrication',
    label: 'Fabrication',
    duration: 30,
    color: 'coral',
    subPhases: [
      {
        id: 'fab_playlist',
        title: 'Playlist fabrication',
        steps: [
          { type: 'tip', content: 'Playlist en rotation (vol. 30-35 %) : Yeha Noha → African Drums → Desert Rose → Rite of Spring → Morning Mood → Flight of the Bumblebee. Stopper 2 min avant la fin.' },
          { type: 'music', trackId: 'yeha' },
          { type: 'music', trackId: 'african' },
          { type: 'music', trackId: 'desert' },
          { type: 'music', trackId: 'rite' },
          { type: 'music', trackId: 'morning' },
          { type: 'music', trackId: 'bumblebee' },
        ],
      },
      {
        id: 'fab_maracas',
        title: 'Instrument 1 — Maracas',
        duration: '10 min',
        steps: [
          {
            type: 'list',
            items: [
              '1. Verser riz dans bouteille (2 min)',
              '2. Fermer bouchon scotch (1 min)',
              '3. Décorer stickers / motifs tribaux (5 min)',
              '4. Tester — secouer ! (2 min)',
            ],
          },
          { type: 'tip', content: 'Lien pédago : « Comme calebasses préhistoriques ! »' },
          { type: 'tip', content: 'Kit par enfant : 1 bouteille · 2 c. à soupe riz · scotch · stickers' },
        ],
      },
      {
        id: 'fab_kazoo',
        title: 'Instrument 2 — Kazoo',
        duration: '10 min',
        steps: [
          {
            type: 'list',
            items: [
              '1. Décorer le rouleau (4 min)',
              '2. Papier cuisson sur une extrémité',
              '3. Fixer avec élastique — adulte aide (3 min)',
              '4. Chantonner : « Doo-doo-doo » (3 min)',
            ],
          },
          { type: 'tip', content: 'Lien pédago : « Comme os creux ou roseau ! »' },
          { type: 'tip', content: 'Kit par enfant : 1 rouleau PQ · 1 papier cuisson · 1 élastique · feutres' },
        ],
      },
      {
        id: 'fab_harpe',
        title: 'Instrument 3 — Harpe en boîte',
        duration: '10 min',
        steps: [
          {
            type: 'list',
            items: [
              '1. Décorer la boîte (3 min)',
              '2. Fermer, tendre 4-6 élastiques sur la longueur',
              '3. Glisser un crayon sous les élastiques à chaque extrémité',
              '4. Pincer ! (3 min)',
            ],
          },
          {
            type: 'question',
            question: 'Pourquoi la boîte rend le son plus fort ?',
            answer: 'Elle attrape le petit son et le fait rebondir dans son ventre = résonance.',
          },
          { type: 'tip', content: 'Kit par enfant : 1 boîte à chaussures · 4-6 élastiques variés · 2 crayons · gommettes' },
        ],
      },
    ],
  },
  {
    id: 'concert',
    label: 'Concert final',
    duration: 20,
    color: 'blue',
    subPhases: [
      {
        id: 'echauffement',
        title: 'A. Échauffement',
        duration: '5 min',
        steps: [
          { type: 'scene', content: 'Tour de cercle : chacun joue 3 sec.' },
          { type: 'scene', content: 'Code chef : pointer→jouer · mains haut=FORT · bas=DOUX · rapide=VITE · lent=LENT' },
          { type: 'scene', content: 'Groupes : Percussions (gauche) · Vents (milieu) · Cordes (droite)' },
          { type: 'tip', content: 'Silence total — pas de musique enregistrée.' },
        ],
      },
      {
        id: 'grand_concert',
        title: 'B. Grand concert — 5 actes',
        duration: '13 min',
        steps: [
          { type: 'tip', content: 'SILENCE TOTAL — PAS DE MUSIQUE ENREGISTRÉE' },
          { type: 'scene', content: 'Acte 1 Préhistoire (3 min) : silence → mains → pieds → percussions → danse → extinction.' },
          { type: 'scene', content: 'Acte 2 Nature (2 min) : SHHH · vents doux · oiseaux · HOUUU · extinction.' },
          { type: 'scene', content: 'Acte 3 Arc (2 min) : percussions douces · cordes ZING · tous ensemble · crescendo.' },
          { type: 'scene', content: 'Acte 4 Antiquité (3 min) : fanfare TATATAAA · harpes · fredonnement · fête · STOP brutal.' },
          { type: 'scene', content: 'Acte 5 Grand final (3 min) : harmonie OOO/AAA → château → crescendo géant → EXPLOSION → 3 sec silence.' },
        ],
      },
      {
        id: 'salut_final',
        title: 'C. Salut final',
        duration: '2 min',
        steps: [
          { type: 'scene', content: 'Percussions → « Les PREMIERS instruments ! »' },
          { type: 'scene', content: 'Vents → « Le souffle de la musique ! »' },
          { type: 'scene', content: 'Cordes → « De l\'arc à la guitare ! »' },
          { type: 'scene', content: '« TOUT L\'ORCHESTRE ! 1-2-3 SALUT ! »' },
          { type: 'music', trackId: 'sir_duke_final' },
        ],
      },
    ],
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    duration: 5,
    color: 'teal',
    subPhases: [
      {
        id: 'partage',
        title: 'Partage en cercle',
        duration: '3 min',
        steps: [
          { type: 'scene', content: 'Questions ouvertes aux enfants.' },
          { type: 'music', trackId: 'claire' },
        ],
      },
      {
        id: 'message_final',
        title: 'Message final + rituel',
        duration: '2 min',
        steps: [
          {
            type: 'vibro',
            content:
              "Les hommes préhistoriques, les musiciens égyptiens, les moines du Moyen-Âge et VOUS aujourd'hui... Vous faites TOUS la même chose. La musique est en VOUS.",
          },
          { type: 'scene', content: 'Rituel : main sur cœur → « Boum-boum... » → grande respiration → photo de groupe.' },
        ],
      },
    ],
  },
  {
    id: 'preparation',
    label: 'Préparation J-1',
    duration: null,
    color: 'amber',
    subPhases: [],
  },
]

export function getPhase(id: SectionId): Phase | undefined {
  return phases.find((p) => p.id === id)
}
