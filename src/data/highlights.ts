export type Certification = {
  title: string
  issuer: string
  url: string
  accent: string
  meta: string[]
}

export const certifications: Certification[] = [
  {
    title: 'Integration Solution Engineer - 7 Days Workshop Certificate',
    issuer: 'Walkover',
    url: 'https://drive.google.com/file/d/1Ap_82mhB0Yhv703MMIGY-kx1eEy4ZjO5/view',
    accent: '#ff6c4a',
    meta: ['Workshop', 'Automation', 'MCP', 'Artificial Intelligence'],
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL',
    url: 'https://drive.google.com/file/d/1rBmOZpVDST7rZhNrR8kUetkqsYyKnkP-/view',
    accent: '#4e7efc',
    meta: ['Top 5% Ranker', 'Database Management Systems', 'NPTEL'],
  },
  {
    title: 'API Fundamentals Student Expert',
    issuer: 'Postman',
    url: 'https://badges.parchment.com/public/assertions/E3h8XgOsSU6eZSMLziPnFg?identity__email=adityachouhan929@gmail.com',
    accent: '#ff9b2f',
    meta: ['API Fundamentals', 'Postman', 'Student Expert'],
  },
]

export const leetcodeHighlight = {
  title: 'LeetCode 365 Days Badge',
  summary: 'A consistency milestone from solving algorithmic problems and sharpening problem-solving discipline.',
  video: '/highlights/leetcode-365-days.mp4',
}
