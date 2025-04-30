// data/scenarios.ts

export interface Scenario {
  slug: string
  name: string
  icon?: string
}

export const scenarios: Scenario[] = [
  { slug: 'the-watchful-eye',        name: 'The Watchful Eye',        icon: '/img/watchful-eye.png' },
  { slug: 'the-self-driving-dilemma',name: 'The Self-Driving Dilemma',icon: '/img/self-driving-dilemma.png' },
  { slug: 'the-censored-world',      name: 'The Censored World',      icon: '/img/censored-world.png' },
  { slug: 'the-face-of-deception',   name: 'The Face of Deception',   icon: '/img/face-of-deception.png' },
  { slug: 'the-ethical-soldier',     name: 'The Ethical Soldier',     icon: '/img/ethical-soldier.png' },
  { slug: 'the-carbon-footprint',    name: 'The Carbon Footprint',    icon: '/img/carbon-footprint.png' },
  { slug: 'the-perfect-partner',     name: 'The Perfect Partner',     icon: '/img/perfect-partner.png' },
  { slug: 'the-conscious-machine',   name: 'The Conscious Machine',   icon: '/img/conscious-machine.png' },
  { slug: 'the-rogue-coder',         name: 'The Rogue Coder',         icon: '/img/rogue-coder.png' },
  { slug: 'the-jobless-future',      name: 'The Jobless Future',      icon: '/img/jobless-future.png' },
  { slug: 'the-learning-machine',    name: 'The Learning Machine',    icon: '/img/learning-machine.png' },
  { slug: 'the-minority-report',     name: 'The Minority Report',     icon: '/img/minority-report.png' },
  { slug: 'the-biased-judge',        name: 'The Biased Judge',        icon: '/img/biased-judge.png' },
  { slug: 'the-artificial-artist',   name: 'The Artificial Artist',   icon: '/img/artificial-artist.png' },
  { slug: 'the-algorithmic-doctor',  name: 'The Algorithmic Doctor',  icon: '/img/algorithmic-doctor.png' },
]
