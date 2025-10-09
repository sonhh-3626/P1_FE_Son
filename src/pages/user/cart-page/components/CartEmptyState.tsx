import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../../../components/common/Button";
import cartEmptyImage from "/cart-empty.png";

export default function CartEmptyState() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleOnClick = () => {
    navigate("/");
  }
  return (
    <div className="text-center py-10">
      <img src={cartEmptyImage} alt="Cart Empty" className="mx-auto mb-4" />
      <p className="text-red-600 mb-4 font-bold border border-gray-200 mx-30 py-5">{t('cartEmptyState.title')}</p>
      <Button onClick={handleOnClick}>
        {t('cartEmptyState.returnToShopButton')}
      </Button>
    </div>
  );
};
