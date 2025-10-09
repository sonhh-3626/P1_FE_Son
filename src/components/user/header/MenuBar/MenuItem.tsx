import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

interface MenuItemProps {
  path: string;
  label: string;
}

export default function MenuItem({ path, label } : MenuItemProps) {
  return (
    <NavLink to={path} className={styles.menuItem}>
      {label}
    </NavLink>
  )
}
