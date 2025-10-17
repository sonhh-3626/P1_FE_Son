import { useTranslation } from 'react-i18next';
import type { Order } from "../../../../types/Order";
import BillingDetails from "./BillingDetails";
import OrderItemsList from "./OrderItemsList";
import OrderNotes from "./OrderNotes";
import OrderSummary from "./OrderSummary";

interface OrderItem {
  order: Order;
}

export default function OrderItem({ order }: OrderItem) {
  const { t } = useTranslation();
  const { billingDetails, items, subtotal, appliedDiscount, finalTotal, isFreeShipping, orderDate, id } = order;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <p className="mb-2"><span className="font-semibold">{t('order.id')}:</span> {id}</p>
      <p className="mb-4"><span className="font-semibold">{t('order.date')}:</span> {new Date(orderDate).toLocaleDateString()}</p>
      <section className="mb-4"><BillingDetails billingDetails={billingDetails} /></section>
      <section className="mb-4"><OrderItemsList items={items} /></section>
      <section className="mb-4"><OrderSummary {...{ subtotal, appliedDiscount, isFreeShipping, finalTotal }} /></section>
      <section><OrderNotes orderNotes={billingDetails.order_notes} /></section>
    </div>
  );
}
