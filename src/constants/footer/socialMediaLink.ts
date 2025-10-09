interface SocialMediaLink {
  name: string;
  iconSrc: string;
  href: string;
}

export interface SocialMediaLinksProps {
  links?: SocialMediaLink[];
}

export const defaultSocialLinks: SocialMediaLink[] = [
  { name: 'Facebook', iconSrc: '/facebook.svg', href: '#' },
  { name: 'Twitter', iconSrc: '/x.svg', href: '#' },
  { name: 'Instagram', iconSrc: '/instagram.svg', href: '#' },
  { name: 'LinkedIn', iconSrc: '/linkin.svg', href: '#' },
];
