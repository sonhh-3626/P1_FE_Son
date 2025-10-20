import Logo from "../../user/header/PrimaryHeader/Logo";
import UserCard from "./UserCard";
import NavItem from "./NavItem";
import { useState } from "react";
import NavToggle from "./NavToggle";
import { useNavConfig } from "../../../constants/admin/sideNavItems";

export default function SideNav() {
  const [activeItem, setActiveItem] = useState<string>("dashboard");
  const navConfig = useNavConfig();

  const handleItemClick = (itemIdentifier: string) => {
    setActiveItem(itemIdentifier);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F4FE] flex flex-col p-4 gap-1 w-[280px]">
      <div className="px-3">
        <Logo />
      </div>

      <UserCard name="Shawon Farabi" role="admin" />

      {navConfig.map((section) => (
        <div key={section.title} className={section.title ? "mt-4 space-y-2" : "space-y-2"}>
          {section.title && <h3 className="text-xs font-semibold text-gray-400 uppercase px-1 mb-1">{section.title}</h3>}
          {section.items.map((item) =>
            item.type === "item" ? (
              <NavItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                label={item.label}
                active={activeItem === item.id}
                onClick={() => handleItemClick(item.id)}
              />
            ) : (
              <NavToggle
                key={item.id}
                label={item.label}
                icon={item.icon}
                items={item.items}
                activeItem={activeItem}
                onItemClick={handleItemClick}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}
