interface PaginationOptionProps {
  itemsPerPage: number;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

export default function PaginationOption({ itemsPerPage, onItemsPerPageChange }: PaginationOptionProps) {
  const itemsPerPageOptions = [
    { value: 10, label: '10 items' },
    { value: 20, label: '20 items' },
    { value: 30, label: '30 items' },
  ];

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(e.target.value));
  };

  return (
    <div className="flex items-center space-x-2 border-l border-gray-200 pl-2">
      <label htmlFor="items-per-page" className="text-gray-600">
        Show:
      </label>
      <select
        id="items-per-page"
        className="p-2 cursor-pointer"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        {itemsPerPageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
