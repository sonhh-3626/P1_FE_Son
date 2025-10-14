interface SelectedFiltersProps {
  selectedFilters: string[];
  onClearFilters: () => void;
  onRemoveFilter: (filter: string) => void;
}

export default function SelectedFilters({
  selectedFilters,
  onClearFilters,
  onRemoveFilter,
} : SelectedFiltersProps) {
  return (
    <div className="mb-4 flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        {selectedFilters.length > 0 && (
          <button
            onClick={onClearFilters}
            className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            <span className="mr-1">X</span> Clear filters
          </button>
        )}
        {selectedFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => onRemoveFilter(filter)}
            className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            <span className="mr-1">X</span> {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
