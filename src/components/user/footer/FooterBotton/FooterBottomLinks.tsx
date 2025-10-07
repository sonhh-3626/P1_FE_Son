import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './FooterBottomLinks.module.css';

interface LinkItem {
  text: string;
  href: string;
}


const DEFAULT_BOTTOM_LINKS: LinkItem[] = [
  { text: 'footer.termsAndConditions', href: '/terms' },
  { text: 'footer.privacyPolicy', href: '/privacy' },
  { text: 'footer.orderTracking', href: '/order-tracking' },
];


function FooterBottomLinks() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {DEFAULT_BOTTOM_LINKS.map((link) => (
        <Link
          key={link.text}
          to={link.href}
          className={styles.link}
        >
          {t(link.text)}
        </Link>
      ))}
    </div>
  );
}

export default memo(FooterBottomLinks);
