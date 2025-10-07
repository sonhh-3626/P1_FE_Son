import { memo } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

interface MenuItemProps {
  path: string;
  label: string;
}

function MenuItem({ path, label } : MenuItemProps) {
  return (
    <NavLink to={path} className={styles.menuItem}>
      {label}
    </NavLink>
  )
}

export default memo(MenuItem);
