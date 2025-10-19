import ImageSlider from './ImageSlider';
import ZoomImage from './ZoomImage';
import { type Product } from '../../../types/Product';
import { useState } from 'react';
import ZoomModal from './ZoomModal';

interface ProductDetailImagesProps {
  product: Product;
}

export default function ProductDetailImages({ product }: ProductDetailImagesProps) {
  const initialImage = product?.imageUrls[0] || '';
  const imageUrls = product?.imageUrls || [];
  const [zoomImage, setZoomImage] = useState<string>(initialImage);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageSelect = (index: number, url: string) => {
    setCurrentIndex(index);
    setZoomImage(url);
  }

    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col ">
        <div className="h-96 w-full">
            <ZoomImage
              imgUrl={zoomImage}
              productType={product.type}
              discountPercentage={product.discountPercentage}
              onZoomClick={handleOpenModal}
            />
        </div>

        <ImageSlider
            currentIndex={currentIndex}
            imgUrls={imageUrls}
            onImageSelect={handleImageSelect}
        />

        {isModalOpen && (
            <ZoomModal
                imgUrl={zoomImage}
                onClose={handleCloseModal}
            />
        )}
    </div>
  )
}
