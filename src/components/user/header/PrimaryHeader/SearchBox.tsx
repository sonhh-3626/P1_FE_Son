import React, {
  useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

import styles from './SearchBox.module.css';

function SearchBox() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { t } = useTranslation();

  const handleSearch = useCallback(() => {
    // TO DO: Implement search functionality
  }, [searchTerm]);

  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        placeholder={t("search_placeholder")}
        className={styles.searchInput}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={handleSearch}
        value={searchTerm}
      />
      <FaSearch className="h-5 w-5 mr-3" />
    </div>
  )
}

export default memo(SearchBox);
