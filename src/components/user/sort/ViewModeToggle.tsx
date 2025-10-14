import { LuLayoutList } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";

interface ViewModeToggleProps {
  onViewChange: (viewMode: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
}

export default function ViewModeToggle({
  onViewChange,
  currentView,
}: ViewModeToggleProps) {
  return (
    <div className="flex items-center space-x-2 p-1">
      <button
        className={`p-1 rounded-md ${
          currentView === 'grid' ? 'bg-gray-200' : ''
        }`}
        onClick={() => onViewChange('grid')}
      >
        <LuLayoutGrid />
      </button>
      <button
        className={`p-1 rounded-md ${
          currentView === 'list' ? 'bg-gray-200' : ''
        }`}
        onClick={() => onViewChange('list')}
      >
      <LuLayoutList />
      </button>
    </div>
  );
};
