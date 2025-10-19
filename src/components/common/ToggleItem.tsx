import { NavLink } from "react-router-dom";

interface ToggleItemProps {
  label: string;
  path?: string;
  onClick?: () => void;
}

export default function ToggleItem({ label, path, onClick } : ToggleItemProps ) {
  return (
    <>
        <NavLink to={path || '#'} onClick={onClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          {label}
        </NavLink>
    </>
  )
}
