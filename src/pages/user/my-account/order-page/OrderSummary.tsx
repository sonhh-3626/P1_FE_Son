import type { Order } from "../../../../types/Order";

export default function OrderSummary({ subtotal, appliedDiscount, isFreeShipping, finalTotal }: Omit<Order, "id" | "billingDetails" | "items" | "orderDate">) {
  return (
    <>
      <p><span className="font-semibold">Subtotal:</span> ${subtotal.toFixed(2)}</p>
      <p><span className="font-semibold">Applied Discount:</span> -${appliedDiscount.toFixed(2)}</p>
      <p><span className="font-semibold">Shipping:</span> {isFreeShipping ? "Free Shipping" : "Standard Shipping"}</p>
      <p className="text-lg font-bold"><span className="font-semibold">Total:</span> ${finalTotal.toFixed(2)}</p>
    </>
  );
}
