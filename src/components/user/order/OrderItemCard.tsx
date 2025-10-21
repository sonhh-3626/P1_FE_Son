import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENCY_SYMBOL } from '../../../constants/currency';

interface OrderItemCardProps {
  item: {
    id: number;
    quantity: number;
    price: number;
    product: {
      id: number;
      name: string;
      imageUrls: string[];
    };
  };
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const imageUrl = item.product.imageUrls && item.product.imageUrls.length > 0
    ? item.product.imageUrls[0]
    : 'https://via.placeholder.com/100';

  const handleCardClick = () => {
    navigate(`/products/${item.product.id}`);
  };

  return (
    <div
      className="flex items-center border border-gray-200 rounded-md p-3 mb-3 shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      onClick={handleCardClick}
    >
      <img src={imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
        <p className="text-gray-600">Số lượng: {item.quantity}</p>
        <p className="text-lg font-bold text-gray-600">{CURRENCY_SYMBOL}{(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderItemCard;
