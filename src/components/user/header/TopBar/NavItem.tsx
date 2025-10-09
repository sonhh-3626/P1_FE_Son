import { NavLink } from "react-router-dom";
import styles from './NavItem.module.css';

interface NavItemProps {
  path: string;
  title: string
}

export default function NavItem({ path, title }: NavItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {title}
    </NavLink>
  );
}
