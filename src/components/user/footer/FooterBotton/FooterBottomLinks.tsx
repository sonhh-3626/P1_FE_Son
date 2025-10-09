import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import  { DEFAULT_BOTTOM_LINKS } from '../../../../constants/footer/footerButtonLinks';
import styles from './FooterBottomLinks.module.css';

export default function FooterBottomLinks() {
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
