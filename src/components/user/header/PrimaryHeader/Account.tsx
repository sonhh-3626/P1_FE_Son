import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from 'react-icons/fa';
import { useAuth } from '../../../../context/AuthContext';

import styles from './Account.module.css';

export default function Account() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accountRef]);

  const handleAccountClick = () => {
    if (isAuthenticated) {
      setShowDropdown(!showDropdown);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className={styles.accountContainer} ref={accountRef} onClick={handleAccountClick}>
      <FaRegUserCircle className={styles.icon} />

      {isAuthenticated ? (
        <div className={styles.textGroup}>
          <span className={styles.signInText}>Xin chào,</span>
          <span className={styles.accountText}>{user?.username}</span>
          {showDropdown && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => navigate('/profile')}>Profile</button>
              <button onClick={handleLogout}>Đăng xuất</button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.textGroup}>
          <span className={styles.signInText}>{t("sign_in")}</span>
          <span className={styles.accountText}>{t("account")}</span>
        </div>
      )}
    </div>
  );
}
