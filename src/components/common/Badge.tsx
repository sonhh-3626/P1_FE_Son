interface BadgeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  gradient?: string;
  size?: 'small' | 'medium' | 'large';
}

const Badge = ({ text, bgColor, textColor, gradient, size = 'medium' } : BadgeProps) => {
  let paddingClass = '';
  let textSizeClass = '';

  switch (size) {
    case 'small':
      paddingClass = 'px-2 py-0.5';
      textSizeClass = 'text-[12px]';
      break;
    case 'large':
      paddingClass = 'px-4 py-2';
      textSizeClass = 'text-base';
      break;
    case 'medium':
    default:
      paddingClass = 'px-3 py-1';
      textSizeClass = 'text-[12px]';
      break;
  }

  const backgroundStyle = gradient ? { backgroundImage: gradient } : (bgColor ? { backgroundColor: bgColor } : { backgroundColor: 'var(--green-badge)' });
  const textStyle = textColor ? { color: textColor } : { color: 'white' };

  const className = `inline-block rounded-full ${paddingClass} ${textSizeClass} font-semibold font-inter leading-[18px] tracking-[-0.32px]`;

  return (
    <span className={className} style={{ ...backgroundStyle, ...textStyle }}>
      {text}
    </span>
  );
};

export default Badge;
