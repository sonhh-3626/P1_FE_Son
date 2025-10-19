import BannerSlider from "../../../components/banner/BannerSlider";
import TopCategorySection from "./TopCategorySection";
import NewProductSection from "./NewProductSection";
import NewArrivalsSection from "./NewArrivalsSection";
import FeaturedProductSection from "./FeaturedProductSection";
import DealsOfTheDaySection from "./DealsOfTheDaySection";

export default function HomePage() {
  return (
    <div className='my-10 mx-[15%]'>
      <BannerSlider />
      <TopCategorySection />
      <NewProductSection />
      <NewArrivalsSection />
      <FeaturedProductSection />
      <DealsOfTheDaySection />
    </div>
  );
}
