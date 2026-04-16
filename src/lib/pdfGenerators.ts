import { jsPDF } from 'jspdf'

// ============= SHARED HELPERS =============

const PRIMARY = '#378ADD'
const DARK = '#185FA5'
const AMBER = '#BA7517'
const CORAL = '#D85A30'
const EMERALD = '#1D9E75'
const BLACK = '#1a1a1a'

function addOwlLogo(doc: jsPDF, x: number, y: number, size: number, filled = true) {
  if (filled) {
    doc.setFillColor(PRIMARY)
    doc.roundedRect(x, y, size, size, size * 0.15, size * 0.15, 'F')
    doc.setDrawColor('#ffffff')
  } else {
    doc.setDrawColor(DARK)
    doc.roundedRect(x, y, size, size, size * 0.15, size * 0.15, 'S')
  }
  doc.setLineWidth(size * 0.025)
  // Wave 1 (main)
  const cx = x + size / 2
  const y1 = y + size * 0.5
  doc.lines(
    [
      [size * 0.12, -size * 0.22],
      [size * 0.12, size * 0.22],
      [size * 0.12, -size * 0.22],
      [size * 0.12, size * 0.22],
    ],
    x + size * 0.1,
    y1,
    [1, 1],
    'S',
    false
  )
  // Wave 2 (smile)
  doc.setLineWidth(size * 0.015)
  doc.lines(
    [
      [size * 0.08, size * 0.06],
      [size * 0.08, -size * 0.06],
    ],
    x + size * 0.35,
    y + size * 0.65,
    [1, 1],
    'S',
    false
  )
}

function addCenteredText(doc: jsPDF, text: string, y: number, pageWidth: number) {
  doc.text(text, pageWidth / 2, y, { align: 'center' })
}

function addFieldLine(doc: jsPDF, label: string, x: number, y: number, lineWidth: number) {
  doc.setFontSize(14)
  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'normal')
  doc.text(label, x, y)
  const labelWidth = doc.getTextWidth(label)
  doc.setDrawColor(DARK)
  doc.setLineWidth(0.4)
  doc.line(x + labelWidth + 2, y + 0.5, x + labelWidth + 2 + lineWidth, y + 0.5)
}

// ============= VERSION 1 — CARNET SIMPLE =============

export function generateCarnetSimple() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const H = 297

  // --- PAGE 1 — Couverture ---
  doc.setFillColor(PRIMARY)
  doc.rect(0, 0, W, 60, 'F')

  addOwlLogo(doc, W / 2 - 20, 12, 40, false)
  // Draw the owl filled directly on blue bg
  doc.setFillColor('#ffffff')
  doc.setLineWidth(2.5)
  doc.setDrawColor('#ffffff')
  // Wave
  const cx = W / 2
  doc.lines(
    [
      [5, -9],
      [5, 9],
      [5, -9],
      [5, 9],
    ],
    cx - 10,
    32,
    [1, 1],
    'S',
    false
  )

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(DARK)
  doc.setFontSize(36)
  addCenteredText(doc, 'Mon carnet', 90, W)
  addCenteredText(doc, 'de musique', 105, W)

  doc.setFontSize(18)
  doc.setTextColor('#666')
  doc.setFont('helvetica', 'normal')
  addCenteredText(doc, 'SoundKids', 120, W)

  // Name field
  addFieldLine(doc, 'Mon prénom :', 40, 160, 110)
  addFieldLine(doc, 'Mon âge :', 40, 180, 40)
  addFieldLine(doc, 'Date :', 110, 180, 60)

  // Decorative stars
  doc.setFontSize(40)
  doc.setTextColor(PRIMARY)
  doc.text('♪', 30, 250)
  doc.text('♫', 170, 255)
  doc.text('♩', 50, 270)
  doc.text('♬', 150, 265)

  // --- PAGE 2 — Le son c'est une vibration ---
  doc.addPage()

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(DARK)
  doc.setFontSize(28)
  addCenteredText(doc, 'Le son,', 40, W)
  addCenteredText(doc, "c'est une VIBRATION !", 55, W)

  // 3 boxes
  const items = [
    { emoji: '♥', title: 'Mon cœur', sub: 'BOUM BOUM', color: CORAL },
    { emoji: '🗣', title: 'Ma voix', sub: 'AAAAAH ça vibre !', color: EMERALD },
    { emoji: '~', title: 'Une ficelle', sub: 'TING ! elle tremble', color: AMBER },
  ]

  items.forEach((item, i) => {
    const y = 85 + i * 55
    doc.setFillColor('#F7F9FC')
    doc.setDrawColor(item.color)
    doc.setLineWidth(1)
    doc.roundedRect(25, y, W - 50, 40, 4, 4, 'FD')

    doc.setTextColor(item.color)
    doc.setFontSize(36)
    doc.setFont('helvetica', 'bold')
    doc.text(item.emoji, 35, y + 27)

    doc.setFontSize(18)
    doc.setTextColor(DARK)
    doc.text(item.title, 70, y + 18)

    doc.setFontSize(14)
    doc.setTextColor('#666')
    doc.setFont('helvetica', 'normal')
    doc.text(item.sub, 70, y + 30)
  })

  // --- PAGE 3 — Les 3 familles ---
  doc.addPage()

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(DARK)
  doc.setFontSize(28)
  addCenteredText(doc, 'Les 3 familles', 40, W)
  addCenteredText(doc, "d'instruments", 55, W)

  const families = [
    { name: 'PERCUSSIONS', action: 'On TAPE !', example: 'Tambour, Maracas', color: CORAL },
    { name: 'VENTS', action: 'On SOUFFLE !', example: 'Flûte, Trompette', color: EMERALD },
    { name: 'CORDES', action: 'On PINCE !', example: 'Guitare, Harpe', color: PRIMARY },
  ]

  families.forEach((fam, i) => {
    const y = 80 + i * 62
    doc.setFillColor(fam.color)
    doc.roundedRect(25, y, W - 50, 50, 6, 6, 'F')

    doc.setTextColor('#ffffff')
    doc.setFontSize(22)
    doc.setFont('helvetica', 'bold')
    doc.text(fam.name, 35, y + 18)

    doc.setFontSize(18)
    doc.text(fam.action, 35, y + 32)

    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(fam.example, 35, y + 43)
  })

  // --- PAGE 4 — Bravo ---
  doc.addPage()

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(DARK)
  doc.setFontSize(28)
  addCenteredText(doc, "J'ai fabriqué...", 40, W)

  const instruments = ['Maracas', 'Kazoo', 'Harpe']
  instruments.forEach((inst, i) => {
    const y = 75 + i * 45
    doc.setFillColor('#F7F9FC')
    doc.setDrawColor(PRIMARY)
    doc.setLineWidth(0.8)
    doc.roundedRect(30, y, W - 60, 32, 4, 4, 'FD')

    // Checkbox
    doc.setDrawColor(PRIMARY)
    doc.setLineWidth(1)
    doc.roundedRect(40, y + 10, 12, 12, 2, 2, 'S')

    doc.setFontSize(20)
    doc.setTextColor(DARK)
    doc.setFont('helvetica', 'bold')
    doc.text(inst, 62, y + 20)
  })

  // Medal
  doc.setFillColor(PRIMARY)
  doc.circle(W / 2, 235, 25, 'F')
  doc.setTextColor('#ffffff')
  doc.setFontSize(32)
  doc.setFont('helvetica', 'bold')
  addCenteredText(doc, 'BRAVO', W / 2 - 15 + 15, 235 + 2)
  addCenteredText(doc, 'BRAVO', 238, W)

  doc.setTextColor(DARK)
  doc.setFontSize(20)
  addCenteredText(doc, 'Petit musicien !', 275, W)

  doc.save('SoundKids-Carnet-Simple.pdf')
}

// ============= VERSION 2 — COLORIAGE =============

export function generateColoriage() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const H = 297

  // --- PAGE 1 — Couverture hibou à colorier ---
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(BLACK)
  doc.setFontSize(32)
  addCenteredText(doc, 'Mon carnet', 30, W)
  addCenteredText(doc, 'à colorier', 45, W)

  // Big owl outline to color
  const ocx = W / 2
  const ocy = 130
  const osz = 80
  doc.setDrawColor(BLACK)
  doc.setLineWidth(1.2)
  doc.roundedRect(ocx - osz / 2, ocy - osz / 2, osz, osz, osz * 0.15, osz * 0.15, 'S')
  // Wave inside
  doc.setLineWidth(2)
  doc.lines(
    [
      [10, -18],
      [10, 18],
      [10, -18],
      [10, 18],
    ],
    ocx - 20,
    ocy,
    [1, 1],
    'S',
    false
  )
  // Smile wave
  doc.setLineWidth(1)
  doc.lines(
    [
      [7, 5],
      [7, -5],
    ],
    ocx - 7,
    ocy + 22,
    [1, 1],
    'S',
    false
  )

  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  addCenteredText(doc, "← Colorie le hibou SoundKids !", 200, W)

  // Name field
  addFieldLine(doc, 'Mon prénom :', 40, 240, 110)

  // --- PAGE 2 — Tambour ---
  doc.addPage()
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(BLACK)
  doc.setFontSize(28)
  addCenteredText(doc, 'Je suis un TAMBOUR', 30, W)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'normal')
  addCenteredText(doc, 'Famille : PERCUSSIONS — on me tape !', 42, W)

  // Drum shape
  doc.setLineWidth(1)
  const dcx = W / 2
  const dcy = 140
  // Top ellipse
  doc.ellipse(dcx, dcy - 35, 45, 10, 'S')
  // Body sides
  doc.line(dcx - 45, dcy - 35, dcx - 45, dcy + 35)
  doc.line(dcx + 45, dcy - 35, dcx + 45, dcy + 35)
  // Bottom ellipse (half)
  doc.ellipse(dcx, dcy + 35, 45, 10, 'S')
  // Zigzag ropes
  for (let i = 0; i < 8; i++) {
    const x1 = dcx - 45 + i * 11.25
    const x2 = dcx - 45 + (i + 0.5) * 11.25
    doc.line(x1, dcy - 25, x2, dcy + 25)
    doc.line(x2, dcy + 25, dcx - 45 + (i + 1) * 11.25, dcy - 25)
  }

  // Sticks
  doc.line(dcx - 60, dcy - 60, dcx - 30, dcy - 40)
  doc.circle(dcx - 62, dcy - 61, 3, 'S')
  doc.line(dcx + 60, dcy - 60, dcx + 30, dcy - 40)
  doc.circle(dcx + 62, dcy - 61, 3, 'S')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(40)
  addCenteredText(doc, 'BOUM ! BOUM !', 230, W)

  // --- PAGE 3 — Flûte ---
  doc.addPage()
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(BLACK)
  doc.setFontSize(28)
  addCenteredText(doc, 'Je suis une FLÛTE', 30, W)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'normal')
  addCenteredText(doc, "Famille : VENTS — on souffle dedans !", 42, W)

  // Flute
  const fy = 130
  doc.setLineWidth(1)
  doc.roundedRect(40, fy, 130, 20, 5, 5, 'S')
  // Mouth piece
  doc.circle(48, fy + 10, 3, 'S')
  // Holes
  for (let i = 0; i < 6; i++) {
    doc.circle(70 + i * 16, fy + 10, 3, 'S')
  }

  // Sound waves
  doc.setLineWidth(0.8)
  for (let i = 0; i < 4; i++) {
    const ax = 180 + i * 5
    doc.line(ax, fy - 5 - i * 2, ax + 3, fy - 2 - i * 2)
    doc.line(ax, fy + 25 + i * 2, ax + 3, fy + 22 + i * 2)
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(40)
  addCenteredText(doc, 'FIUUUUU !', 230, W)

  // --- PAGE 4 — Guitare ---
  doc.addPage()
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(BLACK)
  doc.setFontSize(28)
  addCenteredText(doc, 'Je suis une GUITARE', 30, W)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'normal')
  addCenteredText(doc, "Famille : CORDES — on pince les cordes !", 42, W)

  // Guitar body (two circles)
  const gx = W / 2
  const gy = 150
  doc.setLineWidth(1)
  doc.ellipse(gx, gy, 35, 30, 'S')
  doc.ellipse(gx, gy - 40, 22, 18, 'S')
  // Sound hole
  doc.circle(gx, gy + 5, 8, 'S')
  // Neck
  doc.roundedRect(gx - 6, gy - 90, 12, 35, 2, 2, 'S')
  // Head
  doc.roundedRect(gx - 10, gy - 105, 20, 18, 2, 2, 'S')
  // Strings
  for (let i = 0; i < 5; i++) {
    const sx = gx - 4 + i * 2
    doc.setLineWidth(0.3)
    doc.line(sx, gy - 90, sx, gy + 25)
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(40)
  addCenteredText(doc, 'ZING ! ZING !', 240, W)

  doc.save('SoundKids-Coloriage.pdf')
}

// ============= VERSION 3 — DIPLÔME =============

export function generateDiplome() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' })
  const W = 297
  const H = 210

  // Decorative border
  doc.setDrawColor(PRIMARY)
  doc.setLineWidth(2)
  doc.roundedRect(10, 10, W - 20, H - 20, 5, 5, 'S')
  doc.setLineWidth(0.5)
  doc.roundedRect(15, 15, W - 30, H - 30, 3, 3, 'S')

  // Header
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(PRIMARY)
  doc.setFontSize(48)
  addCenteredText(doc, 'DIPLÔME', 50, W)

  doc.setFontSize(24)
  doc.setTextColor(DARK)
  addCenteredText(doc, 'de Petit Musicien', 65, W)

  // Body
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(BLACK)
  doc.setFontSize(16)
  addCenteredText(doc, 'Remis à', 90, W)

  // Name line
  doc.setDrawColor(DARK)
  doc.setLineWidth(0.6)
  doc.line(80, 108, W - 80, 108)

  doc.setFontSize(14)
  doc.setFont('helvetica', 'italic')
  doc.setTextColor('#999')
  addCenteredText(doc, '(prénom)', 114, W)

  doc.setFont('helvetica', 'normal')
  doc.setTextColor(BLACK)
  doc.setFontSize(14)
  addCenteredText(doc, "pour avoir brillamment participé à l'atelier SoundKids,", 130, W)
  addCenteredText(doc, "écouté, vibré, fabriqué et joué de la musique !", 140, W)

  // 3 emoji instruments
  doc.setFontSize(32)
  doc.setTextColor(CORAL)
  doc.text('🥁', 85, 165)
  doc.setTextColor(EMERALD)
  doc.text('🎺', 140, 165)
  doc.setTextColor(PRIMARY)
  doc.text('🎸', 195, 165)

  // Date & signature
  doc.setFontSize(12)
  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'normal')
  doc.line(40, 185, 110, 185)
  doc.text('Date', 40, 192)
  doc.line(180, 185, 250, 185)
  doc.text("Signature de l'animateur", 180, 192)

  // --- PAGE 2 — Les 3 familles ---
  doc.addPage('a4', 'portrait')
  const PW = 210

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(DARK)
  doc.setFontSize(26)
  addCenteredText(doc, 'Ce que je sais maintenant', 30, PW)

  doc.setFontSize(20)
  doc.setTextColor(PRIMARY)
  addCenteredText(doc, 'Les 3 familles', 55, PW)

  const fams = [
    { name: 'PERCUSSIONS', emoji: '🥁', action: 'on TAPE !', color: CORAL },
    { name: 'VENTS', emoji: '🎺', action: 'on SOUFFLE !', color: EMERALD },
    { name: 'CORDES', emoji: '🎸', action: 'on PINCE !', color: PRIMARY },
  ]
  fams.forEach((f, i) => {
    const y = 75 + i * 40
    doc.setDrawColor(f.color)
    doc.setFillColor(f.color)
    doc.roundedRect(30, y, PW - 60, 30, 4, 4, 'F')
    doc.setFontSize(24)
    doc.setTextColor('#ffffff')
    doc.setFont('helvetica', 'bold')
    doc.text(f.emoji, 40, y + 19)
    doc.text(f.name, 65, y + 16)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'normal')
    doc.text(f.action, 65, y + 25)
  })

  // Principles
  doc.setFontSize(20)
  doc.setTextColor(PRIMARY)
  doc.setFont('helvetica', 'bold')
  addCenteredText(doc, 'Mes secrets de musique', 215, PW)

  const principles = [
    '✓ Le son = quelque chose qui VIBRE',
    '✓ FORT / DOUX · VITE / LENT',
    '✓ Corde tendue = son AIGU',
    '✓ La boîte rend le son plus fort',
  ]
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(14)
  doc.setTextColor(BLACK)
  principles.forEach((p, i) => {
    doc.text(p, 30, 230 + i * 10)
  })

  doc.save('SoundKids-Diplome.pdf')
}

// ============= VERSION 4 — MISSION VIBRATO =============

export function generateMissionVibrato() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210

  // --- PAGE 1 — Vibrato a besoin de toi ---
  doc.setFillColor('#EEEDFE')
  doc.rect(0, 0, W, 297, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setTextColor('#7c3aed')
  doc.setFontSize(32)
  addCenteredText(doc, 'Vibrato', 40, W)
  addCenteredText(doc, 'a besoin de toi !', 55, W)

  // Vibrato character (simple)
  const vcx = W / 2
  const vcy = 130
  doc.setFillColor('#A78BFA')
  doc.circle(vcx, vcy, 30, 'F') // head
  doc.setFillColor('#ffffff')
  doc.circle(vcx - 10, vcy - 5, 4, 'F')
  doc.circle(vcx + 10, vcy - 5, 4, 'F')
  doc.setFillColor('#1a1a1a')
  doc.circle(vcx - 10, vcy - 5, 2, 'F')
  doc.circle(vcx + 10, vcy - 5, 2, 'F')
  // Smile
  doc.setDrawColor('#1a1a1a')
  doc.setLineWidth(1)
  doc.lines([[0, 5, 10, 5, 10, 0]], vcx - 5, vcy + 10, [1, 1], 'S', false)

  // Speech bubble
  doc.setFillColor('#ffffff')
  doc.roundedRect(30, 180, W - 60, 70, 5, 5, 'F')
  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(14)
  doc.text('Salut petit musicien !', 40, 195)
  doc.setFont('helvetica', 'normal')
  doc.text("J'ai 3 missions pour toi...", 40, 210)
  doc.text('Es-tu prêt à les accomplir ?', 40, 225)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor('#7c3aed')
  doc.text('Tourne la page !  →', 40, 242)

  // Name
  addFieldLine(doc, 'Agent :', 40, 275, 110)

  // --- PAGE 2 — Mission 1 — ÉCOUTER ---
  doc.addPage()
  doc.setFillColor(PRIMARY)
  doc.rect(0, 0, W, 40, 'F')
  doc.setTextColor('#ffffff')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('MISSION 1', 20, 20)
  doc.setFontSize(22)
  doc.text('ÉCOUTER', 20, 32)

  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(16)
  doc.text('Ferme les yeux 30 secondes.', 20, 65)
  doc.text('Écoute tous les sons autour de toi.', 20, 78)
  doc.setFont('helvetica', 'bold')
  doc.text("Dessine ou écris les 3 sons que tu as entendus :", 20, 100)

  for (let i = 0; i < 3; i++) {
    const y = 115 + i * 55
    doc.setDrawColor('#999')
    doc.setLineWidth(0.5)
    doc.roundedRect(20, y, W - 40, 45, 3, 3, 'S')
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(PRIMARY)
    doc.setFontSize(16)
    doc.text(`${i + 1}.`, 25, y + 10)
  }

  // --- PAGE 3 — Mission 2 — RECONNAÎTRE ---
  doc.addPage()
  doc.setFillColor(EMERALD)
  doc.rect(0, 0, W, 40, 'F')
  doc.setTextColor('#ffffff')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('MISSION 2', 20, 20)
  doc.setFontSize(22)
  doc.text('RECONNAÎTRE', 20, 32)

  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(16)
  doc.text('Classe chaque instrument dans sa famille :', 20, 65)

  // 3 columns
  const cols = [
    { name: 'PERCUSSIONS', action: 'on TAPE', color: CORAL },
    { name: 'VENTS', action: 'on SOUFFLE', color: EMERALD },
    { name: 'CORDES', action: 'on PINCE', color: PRIMARY },
  ]
  cols.forEach((c, i) => {
    const x = 20 + i * 60
    doc.setFillColor(c.color)
    doc.roundedRect(x, 85, 55, 120, 3, 3, 'F')
    doc.setTextColor('#ffffff')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(14)
    doc.text(c.name, x + 27.5, 97, { align: 'center' })
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.text(c.action, x + 27.5, 107, { align: 'center' })
  })

  // Instruments to place
  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('Relie chaque mot à sa famille :', 20, 225)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(14)
  const insts = ['Tambour', 'Flûte', 'Guitare', 'Maracas', 'Trompette', 'Harpe']
  insts.forEach((inst, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    doc.text(`• ${inst}`, 30 + col * 90, 245 + row * 10)
  })

  // --- PAGE 4 — Mission 3 — FABRIQUER ---
  doc.addPage()
  doc.setFillColor(CORAL)
  doc.rect(0, 0, W, 40, 'F')
  doc.setTextColor('#ffffff')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text('MISSION 3', 20, 20)
  doc.setFontSize(22)
  doc.text('FABRIQUER', 20, 32)

  doc.setTextColor(BLACK)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(16)
  doc.text("Dessine les instruments que tu as fabriqués :", 20, 65)

  const madeInsts = ['MES MARACAS', 'MON KAZOO', 'MA HARPE']
  madeInsts.forEach((m, i) => {
    const y = 80 + i * 65
    doc.setDrawColor(PRIMARY)
    doc.setLineWidth(0.8)
    doc.roundedRect(20, y, W - 40, 55, 3, 3, 'S')
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(PRIMARY)
    doc.setFontSize(13)
    doc.text(m, 25, y + 8)
  })

  // Congratulations
  doc.setFont('helvetica', 'bold')
  doc.setTextColor('#7c3aed')
  doc.setFontSize(22)
  addCenteredText(doc, 'MISSION ACCOMPLIE !', 285, W)

  doc.save('SoundKids-Mission-Vibrato.pdf')
}
