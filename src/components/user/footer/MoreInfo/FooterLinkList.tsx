import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './FooterLinkList.module.css';

interface LinkItem {
  title: string;
  href: string;
}

interface FooterLinkListProps {
  titleKey: string;
  links: LinkItem[];
}

function FooterLinkList({ titleKey, links } : FooterLinkListProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t(titleKey)}</h3>

      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.title} className={styles.listItem}>
            <a href={link.href} className={styles.link}>
              {t(link.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FooterLinkList);
