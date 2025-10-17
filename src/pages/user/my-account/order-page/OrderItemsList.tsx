
import { useTranslation } from "react-i18next";
import type { Order } from "../../../../types/Order";

export default function OrderItemsList({ items }: { items: Order["items"] }) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t('order.items')}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
