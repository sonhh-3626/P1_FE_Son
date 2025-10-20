interface NavItemProps {
  id: string;
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: (id: string) => void;
  isSubItem?: boolean;
}

export default function NavItem({ id, icon, label, active = false, onClick, isSubItem = false }: NavItemProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`flex gap-2 rounded-full cursor-pointer px-3 py-2 ${
        active
          ? "bg-[#634C9F] border-lr border-4 border-[#634C9F] text-white font-medium"
          : "text-gray-700 hover:bg-purple-100"
      }`}
    >
      {!isSubItem && <div className="text-base">{icon}</div>}
      <span className="text-sm">{label}</span>
    </div>
  );
}
