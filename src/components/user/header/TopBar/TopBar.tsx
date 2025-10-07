import { memo } from 'react';
import NavItem from "./NavItem";
import LanguageSwitcher from "./LanguageSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";
import styles from "./TopBar.module.css";

import { useTranslation } from "react-i18next";

function TopBar() {
  const { t } = useTranslation();

  return (
    <div className={styles.topBarContainer}>
      <div className={`${styles.contentWrapper} container mx-auto flex flex-wrap justify-between items-center`}>
        <div className={styles.leftSection}>
          <ul className={styles.navLinks}>
            <li><NavItem path="about-us" title={t("about_us")} /></li>
            <li><NavItem path="my-account" title={t("my_account")} /></li>
            <li><NavItem path="wishlist" title={t("wishlist")} /></li>
          </ul>

          <div className={styles.deliveryInfo}>
            {t("delivery_info_prefix")}
            <span className={styles.highlightText}>{t("delivery_time")}</span>
          </div>
        </div>

        <ul className={styles.rightSection}>
          <li><LanguageSwitcher /></li>
          <li><CurrencySwitcher /></li>
          <li className={styles.navItemRight}><NavItem path="order-tracking" title={t("order_tracking")}/></li>
        </ul>
      </div>
    </div>
  )
}

export default memo(TopBar);
