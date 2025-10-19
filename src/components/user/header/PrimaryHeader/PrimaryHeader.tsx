import Logo from "./Logo";
import LocationOption from "./LocationOption";
import SearchBox from "./SearchBox";
import Account from "./Account";
import LikedIcon from "./LikedIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";

import styles from './PrimaryHeader.module.css';

export default function PrimaryHeader() {
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
          <LikedIcon/>
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  )
}
