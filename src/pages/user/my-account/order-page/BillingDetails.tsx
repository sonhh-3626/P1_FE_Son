import { useTranslation } from "react-i18next";
import type { BillingDetailsData } from "../../payment/types";

interface BillingDetailsProps {
  billingDetails: BillingDetailsData;
}

export default function BillingDetails({ billingDetails }: BillingDetailsProps) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t('order.billingDetails')}</h2>
      <p>{billingDetails.first_name} {billingDetails.last_name}</p>
      <p>{billingDetails.country_region}</p>
      <p>{billingDetails.street_address} {billingDetails.apartment_suite ?? ""}</p>
      <p>{billingDetails.town_city}, {billingDetails.state} {billingDetails.zip_code}</p>
      <p>Phone: {billingDetails.phone}</p>
      <p>Email: {billingDetails.email}</p>
    </>
  );
}
