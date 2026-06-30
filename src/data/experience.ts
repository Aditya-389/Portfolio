import walkoverLogo from '../assets/walkover_logo.jpg'

export type ExperienceItem = {
  company: string
  role: string
  period: string
  logo: string
  letterUrl: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Walkover Web Solutions',
    role: 'Integration Solution Engineer',
    period: 'Jan 2026 - Apr 2026',
    logo: walkoverLogo,
    letterUrl: 'https://drive.google.com/file/d/1xxWEbroctkQxyWX8fufDM1cTnSz6XAeJ/view?usp=sharing',
    highlights: ['Integrations', 'APIs', 'Automation', 'Solution Engineering'],
  },
]
