import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../redux/store";
import { fetchOrders } from "../../../../redux/features/orderSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import OrderItem from "./OrderItem";

export default function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector((state: RootState) => state.order);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading)
    return <div className="text-center p-4">{t("orderPage.loading")}</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-600">
        {t("orderPage.error")}: {error}
      </div>
    );
  if (!orders.length)
    return <div className="text-center p-4">{t("orderPage.empty")}</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("orderPage.title")}
      </h1>

      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
