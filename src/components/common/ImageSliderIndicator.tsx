interface ImageSliderIndicatorProps {
  totalImages: number;
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
  className?: string;
}

export default function ImageSliderIndicator({
  totalImages,
  currentIndex,
  onIndicatorClick = () => {},
  className='',
}: ImageSliderIndicatorProps) {
  if (totalImages <= 1) {
    return null;
  }

  return (
    <div className={`flex space-x-2 z-10 ${className} bg-[#0000001A]  p-1 rounded-full`}>
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            index === currentIndex ? 'bg-[#FACC15]' : 'bg-white'
          }`}
          onClick={() => onIndicatorClick(index)}
        ></div>
      ))}
    </div>
  );
}
