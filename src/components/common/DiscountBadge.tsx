interface DiscountBadgeProps {
  discountPercentage: number;
  className?: string;
}

export default function DiscountBadge({ discountPercentage, className }: DiscountBadgeProps) {
  return (
    <div className={`bg-red-500  text-white text-xs font-bold px-2 py-1 rounded-full ${className}`}>
      {discountPercentage}%
    </div>
  )
}
