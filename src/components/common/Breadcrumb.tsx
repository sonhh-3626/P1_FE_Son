import { Link } from 'react-router-dom';
import { HiChevronRight } from "react-icons/hi";
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) {
    return ;
  }

  return (
    (<nav className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item.path} className={styles.item}>
            {index > 0 && <HiChevronRight className={styles.icon} />}
            {index === items.length - 1 ? (
              <span className={styles.label}>{item.label}</span>
            ) : (
              <Link to={item.path} className={styles.link}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>)
  );
}
