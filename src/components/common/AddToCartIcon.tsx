interface AddToCartIconProps {
  productId: number;
  className?: string;
  onAddToCart: (productId: number) => void;
}

export default function AddToCartIcon({ productId, onAddToCart, className }: AddToCartIconProps) {
  const handleClick = () => {
    onAddToCart(productId);
  };

  return (
    <div className={`${className}`}>
      <button
        className="flex w-6 h-6 rounded-full bg-[#634C9F] text-white hover:bg-purple-700"
        onClick={handleClick}
      >
        +
      </button>
    </div>
  );
}
