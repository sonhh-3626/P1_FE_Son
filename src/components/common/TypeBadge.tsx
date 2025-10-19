interface TypeBadgeProps {
  label: string;
  type?: 'organic' | 'cold-sale' | '';
  className?: string;
}

export default function TypeBadge({ label, type = '', className }: TypeBadgeProps) {
  const badgeClasses = {
    'organic': '',
    'cold-sale': '',
    '': 'hidden',
  };

  const organicStyle = type === 'organic' ? {
    background: 'linear-gradient(90deg, #D4FC79 0%, #96E6A1 50%)',
    color: '#166534',
    fontWeight: '800',
  } : {};

  const coldSaleStyle = type === 'cold-sale' ? {
    background: 'linear-gradient(90deg, #A5EFFF 0%, #E7F8FD 50%)',
    color: '#0891B2',
    fontWeight: '800',
  } : {};

  return (
    <div
      className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${badgeClasses[type]} ${className}`}
      style={type === 'organic' ? organicStyle : type === 'cold-sale' ? coldSaleStyle : {}}
    >
      {label}
    </div>
  );
}
