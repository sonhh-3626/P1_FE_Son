import React from 'react';
import styles from './NewsThisWeek.module.css';
import Button from '../../common/Button';
import { useNavigate } from 'react-router-dom';

interface NewsThisWeekProps {
  title: string;
  description: string;
  image: string;
  hasButton?: boolean;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

export default function NewsThisWeek ({
  title,
  description,
  image,
  orientation,
  style,
  hasButton=true
} : NewsThisWeekProps) {
  const newsThisWeekClasses = `${styles.newsThisWeek} ${orientation === 'vertical' ? styles.vertical : ''}`;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/on-this-week');
  };

  return (
    <div className={newsThisWeekClasses} style={{ backgroundImage: `url('${image}')`, ...style }}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Only This Week</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {hasButton &&
        <Button className={styles.shopNowButton} onClick={handleButtonClick}>
          Shop Now <span className={styles.arrow}>→</span>
        </Button>}
      </div>
    </div>
  );
};
