import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from '../../../../components/common/Card';
import Button from "../../../../components/common/Button";
import CartCouponSection from "./CartCouponSection";

interface CartSummaryProps {
  subtotal: number;
}

export default function CartSummary({ subtotal } : CartSummaryProps) {
  const { t } = useTranslation();
  return (
    <Card className="shadow-md">
      <CardHeader className="font-semibold text-gray-700 border-b">
        {t("cart_summary_title")}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span>{t("cart_subtotal")}</span>
          <span className="font-medium">
            {subtotal.toLocaleString()} ₫
          </span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>{t("cart_total")}</span>
          <span>{subtotal.toLocaleString()} ₫</span>
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          {t("proceed_to_checkout")}
        </Button>

        <CartCouponSection />
      </CardContent>
    </Card>
  );
};
