import { useTranslation } from 'react-i18next';

import styles from './SocialMediaLinks.module.css';
import { defaultSocialLinks, type SocialMediaLinksProps } from '../../../../constants/footer/socialMediaLink';

export default function SocialMediaLinks({ links: propLinks } : SocialMediaLinksProps) {
  const { t } = useTranslation();
  const links = propLinks || defaultSocialLinks

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
