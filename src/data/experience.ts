import walkoverLogo from '../assets/walkover_logo.jpg'

export type ExperienceItem = {
  company: string
  role: string
  period: string
  logo: string
  // letterUrl: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Walkover Web Solutions',
    role: 'Integration Solution Engineer',
    period: 'Jan 2026 - Aug 2026',
    logo: walkoverLogo,
    highlights: ['Integrations', 'APIs', 'Automation', 'Solution Engineering'],
  },
]
