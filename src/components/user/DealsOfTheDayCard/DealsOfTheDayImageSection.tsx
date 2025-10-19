import DiscountBadge from '../../common/DiscountBadge';
import LovedToggle from '../../common/LovedToggle';
import ImageSliderIndicator from '../../common/ImageSliderIndicator';
import TypeBadge from '../../common/TypeBadge';
import { type ProductType } from '../../../types/Product';

interface DealsOfTheDayImageSectionProps {
  imageUrls: string[];
  name: string;
  discountPercentage: number;
  type: ProductType;
  loved: boolean;
  currentImageIndex: number;
  onLovedClick: (e: React.MouseEvent, loved: boolean) => void;
  onIndicatorClick: (index: number) => void;
}

export default function DealsOfTheDayImageSection({
  imageUrls,
  name,
  discountPercentage,
  type,
  loved,
  currentImageIndex,
  onLovedClick = () => {},
  onIndicatorClick = () => {},
}: DealsOfTheDayImageSectionProps) {
  return (
    <div className="relative p-2 h-48 flex items-center justify-center w-2/5">
      <img
        src={imageUrls?.[currentImageIndex] || ''}
        alt={name}
        className="w-full h-full object-cover"
      />

      {discountPercentage > 0 && (
        <DiscountBadge discountPercentage={discountPercentage} className="absolute top-2 left-2 z-10" />
      )}

      <LovedToggle
        loved={loved}
        onLovedClick={onLovedClick}
        className="absolute top-1 right-2 z-10"
      />

      <div className="absolute bottom-2 right-2 z-10">
        <ImageSliderIndicator
          totalImages={imageUrls?.length || 0}
          currentIndex={currentImageIndex}
          onIndicatorClick={onIndicatorClick}
        />
      </div>

      {type && (
        <TypeBadge
          label={type.toUpperCase()}
          type={type === 'organic' ? 'organic' : type === 'cold sale' ? 'cold-sale' : ''}
          className="absolute bottom-2 left-2 z-10"
        />
      )}
    </div>
  );
}
