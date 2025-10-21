import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../../components/common/StatusBadge";
import { currencyService, useSelectedCurrency } from "../../../services/currencyService";
import { formatDate } from "../../../utils/formatDate";
import { type Order } from "../../../types/Order";

interface TableOrdersProps {
  orders: Order[];
}

export default function OrderListCards({ orders }: TableOrdersProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selectedCurrency = useSelectedCurrency();

  const handleClick = (id: number | string) => {
    navigate(`/orders/${id}`);
  };

  if (orders.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        {t("orderPage.empty")}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="hidden md:grid md:grid-cols-6 text-xs font-semibold text-gray-600 uppercase bg-gray-50 p-3 rounded-t-lg">
        <span>{t("order.id")}</span>
        <span>{t("order.productInfo")}</span>
        <span>{t("order.total")}</span>
        <span>{t("order.date")}</span>
        <span>{t("order.status")}</span>
        <span className="text-right">{t("order.action")}</span>
      </div>

      {orders.map((order) => (
        <div
          key={order.id}
          onClick={() => handleClick(order.id)}
          className="grid grid-cols-1 md:grid-cols-6 items-start gap-2 md:gap-4 p-4 cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="font-semibold text-[#634C9F] text-sm">
            #{order.id}
          </div>

          <div className="text-gray-700 text-sm">
            <ul className="list-disc list-inside space-y-1">
              {(order.order_items || []).map((item: Order) => (
                <li key={item.id}>
                  <span className="font-medium">{item.product?.name}</span>
                  <span className="text-gray-500"> x {item.quantity}</span>
                  <span className="text-gray-400">
                    {" "}
                    ({currencyService.formatPrice(item.price, selectedCurrency)})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-gray-900 font-medium">
            {order.subtotal > order.final_total && (
              <span className="line-through text-gray-400 mr-1">
                {currencyService.formatPrice(order.subtotal, selectedCurrency)}
              </span>
            )}
            {currencyService.formatPrice(order.final_total, selectedCurrency)}
          </div>

          <div className="text-gray-500 text-sm">{formatDate(order.order_date)}</div>

          <div>
            <StatusBadge status={order.status} />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-end items-center"
          >
            <button
              className="text-gray-400 hover:text-gray-700 transition"
              aria-label="More options"
            >
              ⋮
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
