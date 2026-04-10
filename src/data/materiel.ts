export const checklist = [
  'Tester tous les instruments',
  'Préparer exemples fabriqués (maracas, kazoo, harpe)',
  'Pré-découper / pré-percer les boîtes (3-4 ans)',
  'Plastifier les images (5 zones)',
  'Installer les 5 zones spatiales',
  'Tester la playlist Spotify dans l\'ordre',
  'Enceinte Bluetooth chargée + câble de secours',
  'iPad chargé à 100%',
  'Préparer 20 kits enfant',
  'Vérifier bords des boîtes (non tranchants)',
  'Petits sacs ou prénoms sur boîtes',
  'Lampe torche « feu » + tissu sombre zone grotte',
  'Tables + nappes + poubelles + lingettes',
]

export interface MaterielCategory {
  label: string
  items: string[]
}

export const materiel: MaterielCategory[] = [
  {
    label: 'Instruments animateur',
    items: ['Tambour', 'Flûte', 'Guitare / ukulélé', 'Triangle', 'Maracas'],
  },
  {
    label: 'Voyage',
    items: ['20 pierres', '20 bâtons', '2-3 tubes carton', 'Arc + ficelle'],
  },
  {
    label: 'Maracas ×20',
    items: ['20 bouteilles', '1,5 kg riz', 'Scotch', 'Stickers'],
  },
  {
    label: 'Kazoo ×20',
    items: ['20 rouleaux PQ', '20 papiers cuisson', '20 élastiques', 'Feutres'],
  },
  {
    label: 'Harpe ×20',
    items: ['20 boîtes chaussures', '120 élastiques', '40 crayons', 'Gommettes'],
  },
  {
    label: 'Décor 5 zones',
    items: [
      'Tissus sombres/bleus/dorés/blancs',
      'Bannières',
      'Couronne carton',
      'Lampe torche',
      'Plantes',
    ],
  },
]
