import { useNavigate } from "react-router-dom";

import styles from './Logo.module.css';

export default function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <div className={styles.logoContainer} onClick={handleLogoClick}>
      <img src="/logo.svg" alt="ShopStore Logo" className="h-10 w-10 mr-2" />

      <div className={styles.textWrapper}>
        <span className="text-2xl font-bold text-black">ShopStore</span>
      </div>
    </div>
  );
}
