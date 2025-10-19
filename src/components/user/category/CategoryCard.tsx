interface CategoryCardProps {
  imgUrl?: string;
  title?: string;
  pathTo: string;
  onClick: (categoryName: string) => void;
}

export default function CategoryCard({ imgUrl = '', title, onClick }: CategoryCardProps) {
  const handleCardClick = () => {
    if (title) {
      onClick(title);
    }
  };

  return (
    <div
      className="flex flex-col py-4 px-2
      border border-gray-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="mb-3">
        <img src={imgUrl} alt={title} />
      </div>

      <h3 className="text-sm font-semibold text-gray-800 text-center">
        {title}
      </h3>
    </div>
  );
}
