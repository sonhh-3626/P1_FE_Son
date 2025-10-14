import { sortOptions, type SortOptionProps } from "../../../constants/sortOptions";

interface SortingControlProps {
  onSortChange: (sortValue: string) => void;
  currentSort: string;
}

export default function SortingControl({
  onSortChange,
  currentSort,
} : SortingControlProps) {

  const options: SortOptionProps[] = sortOptions;

  return (
    <div className="flex items-center space-x-4 pr-10">
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-gray-600">
          Sort:
        </label>
        <select
          id="sort"
          className="p-2 cursor-pointer"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
