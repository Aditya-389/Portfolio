import githubIcon from '../assets/socials/github-icon.jpg'
import instagramIcon from '../assets/socials/ig-icon.avif'
import leetcodeIcon from '../assets/socials/leetcode-icon.png'
import linkedinIcon from '../assets/socials/linkedin-icon.webp'

export type SocialLink = {
  name: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Aditya-389',
    icon: githubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-chouhan-262458289/',
    icon: linkedinIcon,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/adityachouhan929/',
    icon: leetcodeIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/adityachouhan929?igsh=MW1xdXhjeDliOHNtNg==',
    icon: instagramIcon,
  },
]
