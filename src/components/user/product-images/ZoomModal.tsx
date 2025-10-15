import { IoClose } from "react-icons/io5";

interface ZoomModalProps {
  imgUrl: string;
  onClose: () => void;
}

export default function ZoomModal({ imgUrl, onClose }: ZoomModalProps) {
  const handleImageClick = (e: React.MouseEvent) => {
      e.stopPropagation();
  };

  return (
      <div
          className="fixed inset-0 bg-none bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
      >
          <div
              className="relative"
              onClick={handleImageClick}
          >
              <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 cursor-pointer"
                  onClick={onClose}
              >
                  <IoClose size={32} />
              </button>

              <img
                  src={imgUrl}
                  alt="Zoomed Product Detail"
                  className="object-contain"
              />
          </div>
      </div>
  );
}
