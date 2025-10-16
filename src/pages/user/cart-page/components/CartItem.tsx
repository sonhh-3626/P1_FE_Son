import { useDispatch } from "react-redux";
import Button from "../../../../components/common/Button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import type { CartItem } from "../../../../redux/features/cartSlice";
import { incrementQuantity, decrementQuantity, removeItemFromCart } from "../../../../redux/features/cartSlice";
import { currencyService, useSelectedCurrency } from "../../../../services/currencyService";
interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item } : CartItemProps) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelectedCurrency();

  const handleIncreaseQuantity = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div
      key={item.id}
      className="flex items-center justify-between py-4"
    >
      <div className="flex items-center gap-4">
        <img
          src={item.imageUrls ? item.imageUrls[0] : ''}
          alt={item.name}
          className="w-16 h-16 rounded object-cover border"
        />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">
            {currencyService.formatPrice(item.price, selectedCurrency)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={handleDecreaseQuantity}>
          <FaMinus className="w-4 h-4" />
        </Button>
        <span className="w-6 text-center">{item.quantity}</span>
        <Button onClick={handleIncreaseQuantity}>
          <FaPlus className="w-4 h-4" />
        </Button>
      </div>

      <div className="w-24 text-right font-semibold">
        {currencyService.formatPrice(item.price * item.quantity, selectedCurrency)}
      </div>

      <Button onClick={handleRemoveItem}>
        <FaTrash className="w-5 h-5" />
      </Button>
    </div>
  );
};
