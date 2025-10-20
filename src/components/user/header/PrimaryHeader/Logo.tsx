import { useNavigate } from "react-router-dom";

import styles from './Logo.module.css';

export default function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <div className={styles.logoContainer} onClick={handleLogoClick}>
      <img src="/logo.svg" alt="ShopStore Logo" className="h-8 w-8 mr-1" />

      <div className={styles.textWrapper}>
        <span className="text-xl font-bold text-black">ShopStore</span>
      </div>
    </div>
  );
}
