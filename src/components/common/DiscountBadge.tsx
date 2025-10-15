interface DiscountBadgeProps {
  discountPercentage: number;
  className?: string;
}

export default function DiscountBadge({ discountPercentage = 0, className }: DiscountBadgeProps) {
  return (
    <>
      {discountPercentage > 0 ? (
        <div className={`bg-red-500  text-white text-xs font-bold px-2 py-1 rounded-full ${className}`}>
          {discountPercentage}%
        </div>
      ) : <div></div>}
    </>
  )
}
