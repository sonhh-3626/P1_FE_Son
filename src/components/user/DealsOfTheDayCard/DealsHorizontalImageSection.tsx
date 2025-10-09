import DiscountBadge from '../../common/DiscountBadge';
import LovedToggle from '../../common/LovedToggle';
import TypeBadge from '../../common/TypeBadge';
import { type ProductType } from '../../../types/Product';

interface Props {
  imageUrl?: string;
  name: string;
  discountPercentage: number;
  type: ProductType;
  loved: boolean;
  onLovedClick: (e: React.MouseEvent, newLoved: boolean) => void;
}

export default function DealsHorizontalImageSection({
  imageUrl,
  name,
  discountPercentage,
  type,
  loved,
  onLovedClick = () => {},
}: Props) {
  return (
    <div className="relative p-5 flex-shrink-0 flex w-4/7">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-lg">
          400 x 400
        </div>
      )}

      {discountPercentage > 0 && (
        <DiscountBadge discountPercentage={discountPercentage} className="absolute top-0 left-0 z-10" />
      )}

      {type && (
        <TypeBadge
          label={type.toUpperCase()}
          type={type === 'organic' ? 'organic' : type === 'cold sale' ? 'cold-sale' : ''}
          className="absolute bottom-0 left-0 z-10"
        />
      )}

      <LovedToggle
        loved={loved}
        onLovedClick={onLovedClick}
        className="absolute top-1 right-4"
      />
    </div>
  );
}
