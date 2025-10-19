interface AdjustItemProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function AdjustItem({ value, onDecrement, onIncrement }: AdjustItemProps) {
  return (
    <div className="flex items-center justify-between w-24 h-10 border border-gray-300 rounded-md">
      <button
        onClick={onDecrement}
        className="flex items-center justify-center w-1/3 h-full text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
      >
        -
      </button>
      <span className="w-1/3 text-center text-lg font-semibold text-gray-800">
        {value}
      </span>
      <button
        onClick={onIncrement}
        className="flex items-center justify-center w-1/3 h-full text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
      >
        +
      </button>
    </div>
  );
}
