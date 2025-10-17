import { useTranslation } from "react-i18next";
import Button from "../../../../components/common/Button";
import CartCouponSection from "./CartCouponSection";
import { useNavigate } from "react-router-dom";

interface CartSummaryProps {
  subtotal: number;
}

export default function CartSummary({ subtotal } : CartSummaryProps) {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const navigateToPaymentPage = () => navigate("/payment")

  return (
    <div className="shadow-md rounded-lg border bg-card text-card-foreground">
      <div className="font-semibold text-gray-700 border-b p-6 flex flex-col space-y-1.5">
        {t("cart_summary_title")}
      </div>
      <div className="space-y-4 p-6 pt-0">
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

        <Button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          onClick={navigateToPaymentPage}
        >
          {t("proceed_to_checkout")}
        </Button>

        <CartCouponSection />
      </div>
    </div>
  );
};
