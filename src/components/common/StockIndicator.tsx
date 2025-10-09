interface StockIndicatorProps {
  stock: number;
  total: number;
}

export default function StockIndicator({ stock, total } : StockIndicatorProps) {
  const percentage = (stock / total) * 100;
  const styleForStockIndicator = {
    width: `${percentage}%`,
    background: 'linear-gradient(to right, #fde047, #f87171, #ef4444)',
  }

  return (
    <div className="stock-indicator pt-2 border-t border-gray-300">
      <p className="text-xs text-gray-500">This product is about to run out</p>
      <div className="w-full bg-gray-200 rounded-full h-1.5 my-1">
        <div
          className="h-1.5 rounded-full"
          style={styleForStockIndicator}
        ></div>
      </div>
      <p className="text-xs text-gray-500">
        available only: <span className="font-bold text-black">{stock}</span>
      </p>
    </div>
  );
};
