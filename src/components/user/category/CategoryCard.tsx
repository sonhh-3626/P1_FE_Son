import { useNavigate } from "react-router-dom";
interface CategoryCardProps {
  imgUrl?: string;
  title?: string;
  pathTo: string;
}

export default function CategoryCard({ imgUrl='', title, pathTo }: CategoryCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(pathTo);
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
};
