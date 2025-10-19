import { FiShare } from "react-icons/fi";
import LovedToggle from "../../common/LovedToggle";
import { VscArrowSwap } from "react-icons/vsc";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateProduct } from "../../../redux/features/productSlice";
import { type Product } from "../../../types/Product";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const dispatch = useAppDispatch();

  const handleLovedClick = (event: React.MouseEvent, newLoved: boolean) => {
    dispatch(updateProduct({ ...product,
      loved: newLoved
    }));
  };

  const handleShareProduct = () => {
    // TODO
  }

  return (
    <div className="flex mt-6 py-4">
      <div className="flex items-center gap-2 text-gray-600">
        <LovedToggle loved={product.loved} onLovedClick={handleLovedClick} />
        Add to wishlist
      </div>

      <div
        className="flex items-center gap-2 ml-10 text-gray-600"
        onClick={handleShareProduct}
      >
        <FiShare size={20}/>
        Share this Product
      </div>

      <div className="flex items-center gap-2 ml-10 text-gray-600">
        <VscArrowSwap size={20} />
        Compare
      </div>
    </div>
  )
}
