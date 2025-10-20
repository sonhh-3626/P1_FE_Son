import { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderCart from "./HeaderCart";

interface HeaderProps {
  title: string;
}

export default function Header({ title="Dashboard" }: HeaderProps) {
  const [notificationsCount, setNotificationsCount] = useState(2);
  const [cartCount, setCartCount] = useState(3);

  const handleSearch = (query: string) => {
    // TODO
  };

  const handleNotificationClick = () => {
    // TODO
    setNotificationsCount(0);
  };

  const handleCartClick = () => {
    // TODO
    setCartCount(0);
  };

  return (
    <header className="flex items-center justify-between bg-[#F7F6FF] px-8 py-4">
      <HeaderTitle title={title} />

      <div className="flex-1 max-w-4xl mx-8">
        <HeaderSearch onSearch={handleSearch} />
      </div>

      <div className="flex items-center gap-6">
        <HeaderNotification
          count={notificationsCount}
          onClick={handleNotificationClick}
        />
        <HeaderCart count={cartCount} onClick={handleCartClick} />
      </div>
    </header>
  );
}
