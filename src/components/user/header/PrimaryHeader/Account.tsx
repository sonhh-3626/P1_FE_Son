import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { selectUser } from '../../../../redux/features/userSlice';
import { logout } from '../../../../redux/features/userSlice';
import { useToast } from '../../../../context/ToastContext';
import styles from './Account.module.css';

export default function Account() {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isLoggedIn: isAuthenticated } = useAppSelector(selectUser);
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
    dispatch(logout());
    toast.push({
      type: "success",
      title: t('logout.success_title'),
      message: t('logout.success_message'),
    });
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
