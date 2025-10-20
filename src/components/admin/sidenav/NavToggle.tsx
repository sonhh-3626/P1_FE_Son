import { useState, useEffect, type ReactNode } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import NavItem from "./NavItem";

interface NavToggleProps {
  label: string;
  icon: ReactNode;
  items: { id: string; label: string }[];
  activeItem: string;
  onItemClick: (itemIdentifier: string) => void;
}

export default function NavToggle({ label, icon, items, activeItem, onItemClick }: NavToggleProps) {
  const hasActiveSubItem = items.some(item => item.id === activeItem);
  const [open, setOpen] = useState(hasActiveSubItem);

  useEffect(() => {
    if (hasActiveSubItem) {
      setOpen(true);
    }
  }, [hasActiveSubItem]);

  const handleToggleClick = () => {
    if (!hasActiveSubItem) {
      setOpen(!open);
    } else if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <div
        onClick={handleToggleClick}
        className="flex items-center cursor-pointer px-3 py-2 gap-2 rounded-md hover:bg-gray-100"
      >
        <div className="flex items-center gap-1 text-gray-700 text-sm font-medium">
          {icon}
          {label}
        </div>
        <FaLongArrowAltRight className="text-xs" />
      </div>

      {open && (
        <div className="ml-4 mt-0.5 flex flex-col gap-0.5">
          {items.map((subItem) => (
            <NavItem
              key={subItem.id}
              id={subItem.id}
              label={subItem.label}
              active={activeItem === subItem.id}
              onClick={onItemClick}
              isSubItem={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
