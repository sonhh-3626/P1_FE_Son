import { useTranslation } from "react-i18next";

import ProductListHeader from "../../../components/common/ProductListHeader";
import { useNavigate } from "react-router-dom";
import CategoryCardList from "../../../components/user/category/CategoryCardList";

export default function TopCategorySection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCategorySelect = (categoryName: string) => {
    navigate(`/shop?category=${categoryName}`);
  };

  return (
    <div className="my-10">
      <ProductListHeader title={t('topCategorySection.title')} subtitle={t('topCategorySection.subtitle')} pathTo="categories" />
      <CategoryCardList onCategorySelect={handleCategorySelect} />
    </div>
  )
}
