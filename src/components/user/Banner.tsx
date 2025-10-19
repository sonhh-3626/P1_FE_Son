import BannerContent from "../banner/BannerContent";

interface BannerProps {
  badgeText: string;
  title: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  backgroundImage: string;
  onShopNowClick?: () => void;
}

export default function Banner({
  badgeText,
  title,
  description,
  currentPrice,
  originalPrice,
  backgroundImage,
  onShopNowClick = () => {},
}: BannerProps) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  };

  const handleShopNowClick = onShopNowClick;

  return (
    <div className="container mx-auto mb-5">
      <section className="bg-gray-100" style={bannerStyle}>
        <div className="container mx-auto flex items-center py-20">
          <BannerContent
            badgeText={badgeText}
            title={title}
            description={description}
            currentPrice={currentPrice}
            originalPrice={originalPrice}
            onShopNowClick={handleShopNowClick}
          />
        </div>
      </section>
    </div>
  );
}
