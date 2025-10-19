import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/common/Button";
import { FaTrash } from "react-icons/fa";
import AdjustItem from "../../../../components/common/AdjustItem";
import type { CartItem } from "../../../../redux/features/cartSlice";
import { incrementQuantity, decrementQuantity, removeItemFromCart } from "../../../../redux/features/cartSlice";
import { currencyService, useSelectedCurrency } from "../../../../services/currencyService";
interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item } : CartItemProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const navigateToProductDetail = () => navigate(`/products/${item.id}`)

  return (
    <div
      key={item.id}
      className="grid grid-cols-[2fr_1fr_1fr_auto] items-center py-4 gap-4"
    >
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={navigateToProductDetail}
      >
        <img
          src={item.imageUrls ? item.imageUrls[0] : ''}
          alt={item.name}
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">
            {currencyService.formatPrice(item.price, selectedCurrency)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <AdjustItem
          value={item.quantity}
          onDecrement={handleDecreaseQuantity}
          onIncrement={handleIncreaseQuantity}
        />
      </div>

      <div className="text-right font-semibold">
        {currencyService.formatPrice(item.price * item.quantity, selectedCurrency)}
      </div>

      <Button onClick={handleRemoveItem}>
        <FaTrash className="w-5 h-5" />
      </Button>
    </div>
  );
};
