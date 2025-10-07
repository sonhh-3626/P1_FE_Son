import React from 'react';

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

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false,
} : ButtonProps) {

  const buttonClasses = [
      styles.base,
      styles[variant],
      styles[size],
      className,
    ].join(' ');

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
