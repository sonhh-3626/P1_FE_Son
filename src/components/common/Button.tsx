import React, { memo, useMemo } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false,
} : ButtonProps) => {

  const buttonClasses = useMemo(() => {
    const classes = [
      styles.base,
      styles[variant],
      styles[size],
      className,
    ];

    return classes.join(' ');
  }, [variant, size, className]);

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
