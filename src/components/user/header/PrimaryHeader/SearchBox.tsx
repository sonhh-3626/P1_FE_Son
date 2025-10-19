import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm } from '../../../../redux/features/filterSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';

import styles from './SearchBox.module.css';

export default function SearchBox() {
  const [searchTerm, setLocalSearchTerm] = useState("");
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {

      dispatch(setSearchTerm(searchTerm.trim()));
      navigate(`/shop`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        placeholder={t("search_placeholder")}
        className={styles.searchInput}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        value={searchTerm}
      />
      <FaSearch className="h-5 w-5 mr-3 cursor-pointer" onClick={handleSearch} />
    </div>
  )
}
