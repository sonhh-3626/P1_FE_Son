import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { type Order } from '../../../types/Order';
import { formatDate } from '../../../utils/formatDate';
import { CURRENCY_SYMBOL } from '../../../constants/currency';
import { orderService } from '../../../services/orderService';
import OrderItemCard from '../../../components/user/order/OrderItemCard';
import StatusBadge from '../../../components/common/StatusBadge';

export default function OrderDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrder = async () => {
      if (!id) {
        setError(t('orderDetailPage.orderIdMissing'));
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedOrder = await orderService.fetchOrderById(id);
        setOrder(fetchedOrder);
      } catch (err) {
        setError(t('orderDetailPage.failedToFetch'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getOrder();
  }, [id]);

  console.log(order);
  if (loading) {
    return <div className="container mx-auto p-4 text-center">{t('orderDetailPage.loadingDetails')}</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-center text-red-600">{error}</div>;
  }

  if (!order) {
    return <div className="container mx-auto p-4 text-center">{t('orderDetailPage.orderNotFound')}</div>;
  }

  const shippingCost = order.is_free_shipping ? t('orderDetailPage.freeShipping') : `${CURRENCY_SYMBOL}5.00`; // Assuming a fixed shipping cost if not free

  return (
    <div className="p-5 mx-[15%] flex flex-col md:flex-row gap-5">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('orderDetailPage.productsPurchased')}</h1>
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-md mb-5">
          {order.order_items.map((item: any) => (
            <OrderItemCard key={item.id} item={item} />
          ))}
          <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
            <span>{t('orderDetailPage.shipping')}</span>
            <span>{shippingCost}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-lg">
            <span>{t('orderDetailPage.total')}</span>
            <span>{CURRENCY_SYMBOL}{order.final_total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('orderDetailPage.orderInformation')}</h1>
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-md mb-5">
          <p className="mb-2"><strong>{t('orderDetailPage.orderId')}</strong> {order.id}</p>
          <p className="mb-2"><strong>{t('orderDetailPage.orderDate')}</strong> {formatDate(order.order_date)}</p>
          <div className="flex">
            <p className="mb-2"><strong>{t('orderDetailPage.paymentStatus')}</strong></p>
            <StatusBadge status={order.status} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('orderDetailPage.paymentInformation')}</h1>
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-md">
          <p className="mb-2"><strong>{t('orderDetailPage.customerName')}</strong> {order.billing_detail.first_name} {order.billing_detail.last_name}</p>
          <p className="mb-2"><strong>{t('orderDetailPage.email')}</strong> {order.billing_detail.email}</p>
          <p className="mb-2"><strong>{t('orderDetailPage.phone')}</strong> {order.billing_detail.phone}</p>
          <p className="mb-2"><strong>{t('orderDetailPage.shippingAddress')}</strong> {order.billing_detail.street_address}, {order.billing_detail.town_city}, {order.billing_detail.state}, {order.billing_detail.zip_code}, {order.billing_detail.country_region}</p>
        </div>
      </div>
    </div>
  );
}
