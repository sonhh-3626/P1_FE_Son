import { useTranslation } from "react-i18next";

import ProductListHeader from "../../../components/common/ProductListHeader";
import CategoryCardList from "../../../components/user/category/CategoryCardList";

export default function TopCategorySection() {
  const { t } = useTranslation();
  return (
    <div className="my-10">
      <ProductListHeader title={t('topCategorySection.title')} subtitle={t('topCategorySection.subtitle')} pathTo="categories" />
      <CategoryCardList />
    </div>
  )
}
