import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../../components/common/Button";
import CartEmptyState from "./components/CartEmptyState";
import CartItemList from "./components/CartItemList";
import CartSummary from "./components/CartSummary";
import type { RootState } from "../../../redux/store";

export default function CartPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOnClick = () => {
    navigate('/shop')
  }

  return (
    <div className="py-10 mx-[15%]">
      {cartItems.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <CartItemList cartItems={cartItems} />

            <div className="flex justify-between mt-6">
              <Button onClick={handleOnClick}>
                {t('cartPage.continueShoppingButton')}
              </Button>
            </div>
          </div>

          <div>
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      )}
    </div>
  );
};
