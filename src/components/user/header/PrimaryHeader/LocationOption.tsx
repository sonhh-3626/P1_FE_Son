import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import styles from './LocationOption.module.css';

export default function LocationOption() {
  const { t } = useTranslation();
  const [showLocations, setShowLocations] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  const handleToggleLocations = () => {
    setShowLocations(prev => !prev);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocations(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.locationContainer}
      onClick={handleToggleLocations}
      ref={locationRef}
    >
      <FaMapMarkerAlt className={styles.icon} />

      <div className={styles.textGroup}>
        <span className={styles.label}>{t("deliver_to")}</span>
        <p className={styles.value}>{t("all")}</p>
      </div>

      {showLocations && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>{t("location_1")}</li>
            <li className={styles.dropdownItem}>{t("location_2")}</li>
            <li className={styles.dropdownItem}>{t("location_3")}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
