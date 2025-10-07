import { memo } from 'react';
import Logo from "./Logo";
import LocationOption from "./LocationOption";
import SearchBox from "./SearchBox";
import Account from "./Account";
import LikedIcon from "./LikedIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";

import styles from './PrimaryHeader.module.css';

function PrimaryHeader() {
  return (
    <div className={styles.primaryHeaderWrapper}>
      <div className={`${styles.primaryHeaderContainer} container mx-auto`}>
        <div className={styles.leftSection}>
          <Logo />
          <LocationOption />
        </div>

        <div className={styles.middleSection}>
          <SearchBox />
        </div>

        <div className={styles.rightSection}>
          <Account />
          <LikedIcon count={0}/>
          <ShoppingCartIcon count={0}/>
        </div>
      </div>
    </div>
  )
}

export default memo(PrimaryHeader);
