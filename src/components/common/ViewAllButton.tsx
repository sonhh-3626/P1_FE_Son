import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface ViewAllButtonProps {
  pathTo: string;
}

export default function ViewAllButton({ pathTo } : ViewAllButtonProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleOnClick = () => {
    navigate(pathTo);
  }

  return (
    <div onClick={handleOnClick} className="flex border border-1 border-gray-300 rounded-full px-3 cursor-pointer">
      <p className="font-sans font-bold text-xs leading-[42px] tracking-[-0.24px] text-center">{t('viewAllButton.text')}</p>
      <FaArrowRight
        size={24}
        className="text-gray-800 text-center ml-1 mt-2"
      />
    </div>
  )
}
