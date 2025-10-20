import { IoNotificationsOutline } from "react-icons/io5";

interface HeaderNotificationProps {
  count?: number;
  onClick?: () => void;
}

export default function HeaderNotification({
  count = 0,
  onClick,
}: HeaderNotificationProps) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <IoNotificationsOutline className="text-2xl text-gray-700" />
      {count > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
