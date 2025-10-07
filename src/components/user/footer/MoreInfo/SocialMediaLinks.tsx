import { useMemo, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SocialMediaLinks.module.css';

interface SocialMediaLink {
  name: string;
  iconSrc: string;
  href: string;
}

interface SocialMediaLinksProps {
  links?: SocialMediaLink[];
}

const defaultSocialLinks: SocialMediaLink[] = [
  { name: 'Facebook', iconSrc: '/facebook.svg', href: '#' },
  { name: 'Twitter', iconSrc: '/x.svg', href: '#' },
  { name: 'Instagram', iconSrc: '/instagram.svg', href: '#' },
  { name: 'LinkedIn', iconSrc: '/linkin.svg', href: '#' },
];


const SocialMediaLinks = ({ links: propLinks } : SocialMediaLinksProps) => {
  const { t } = useTranslation();
  const links = useMemo(() => propLinks || defaultSocialLinks, [propLinks]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.followUsText}>{t('footer.socialMedia.followUs')}</p>
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <a key={index} href={link.href} aria-label={link.name} className={styles.socialLink}>
            <img
              src={link.iconSrc}
              alt={t(`footer.socialMedia.${link.name.toLowerCase()}`)}
              className={styles.socialIcon}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(SocialMediaLinks);
