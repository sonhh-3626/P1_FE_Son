import homepageSvg from '/homepage.svg';
import homepage2Svg from '/homepage-2.svg';

export interface BannerSlide {
  id: number;
  badgeText: string;
  title: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  backgroundImage: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    badgeText: "banner_slide_1_badge_text",
    title: "banner_slide_1_title",
    description: "banner_slide_1_description",
    currentPrice: 21.67,
    originalPrice: 59.99,
    backgroundImage: homepageSvg,
  },
  {
    id: 2,
    badgeText: "banner_slide_2_badge_text",
    title: "banner_slide_2_title",
    description: "banner_slide_2_description",
    currentPrice: 15.99,
    originalPrice: 25.00,
    backgroundImage: homepage2Svg,
  },
];
