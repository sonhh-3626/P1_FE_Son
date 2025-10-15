interface ImageSliderProps {
  currentIndex: number;
  imgUrls: string[];
  onImageSelect: (index: number, url: string) => void;
}

export default function ImageSlider({ currentIndex, imgUrls, onImageSelect } : ImageSliderProps) {

  return (
    <div className="flex">
      {imgUrls.map((url, index) => (
        <div
          key={index}
          className={`
            w-20 h-20 flex-shrink-0 border-2 rounded-lg cursor-pointer overflow-auto
            ${currentIndex === index ? 'border-gray-800 shadow-md' : 'border-none'}
          `}
          onClick={() => onImageSelect(index, url)}
        >
          <img src={url} alt="" className="w-full h-full object-cover" />

        </div>
      ))}
    </div>
  )
}
