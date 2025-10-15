import DiscountBadge from "../../../common/DiscountBadge";
import TypeBadge from "../../../common/TypeBadge";
import { MdZoomOutMap } from "react-icons/md";

interface ZoomImageProps {
  imgUrl: string;
  productType: string;
  discountPercentage: number;
  onZoomClick?: () => void;
}

export default function ZoomImage({
  imgUrl="",
  productType,
  discountPercentage=0,
  onZoomClick=()=>{}
} : ZoomImageProps) {
  return (
    <div className="relative w-full h-full">
      {imgUrl ? (
        <img
          src={imgUrl}
          alt="Product detail"
          className="max-h-full max-w-full object-contain"
          />
      ) : (
        <span className="text-gray-500">No Image Available</span>
      )}

      <TypeBadge
        label={productType.toUpperCase()}
        type={productType === 'organic' ? 'organic' : productType === 'cold sale' ? 'cold-sale' : ''}
        className="absolute top-9 left-2 z-10"
      />

      <DiscountBadge
        discountPercentage={discountPercentage}
        className="absolute top-2 left-2 z-10"
      />

      <div className="relative inset-0 flex">
        <MdZoomOutMap
          size={32}
          className="cursor-pointer"
          onClick={onZoomClick} />
      </div>
    </div>
  )
}
