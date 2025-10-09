import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type TextColorVariant = 'default' | 'primary' | 'danger';

interface DropdownToggleProps {
  label: React.ReactNode;
  color?: TextColorVariant;
  children: React.ReactNode;
}

const colorVariants: Record<TextColorVariant, string> = {
  default: "text-black",
  primary: "text-indigo-600",
  danger: "text-red-600",
};

export default function DropdownToggle({
  label,
  color = "default",
  children,
}: DropdownToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const textColorClass = colorVariants[color];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`inline-flex items-center justify-center p-2 text-[15px] font-semibold leading-[48px] tracking-[-0.3px] align-middle transition duration-150 hover:text-[#634C9F] ${textColorClass}`}
        aria-expanded={isOpen}
      >
        {label}
        <FaChevronDown
          className={`ml-1 h-3 w-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-20 mt-0 w-44 rounded-lg shadow-sm bg-white divide-y divide-gray-100 dark:bg-gray-700"
          role="menu"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" role="none">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}
