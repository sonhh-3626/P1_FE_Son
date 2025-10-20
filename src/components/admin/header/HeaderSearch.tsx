import { FiSearch } from "react-icons/fi";
import { useState } from "react";

interface HeaderSearchProps {
  onSearch?: (query: string) => void;
}

export default function HeaderSearch({ onSearch }: HeaderSearchProps) {
  const [query, setQuery] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder="Search..."
        className="w-full bg-white pl-10 pr-4 py-2 rounded-xl border border-transparent focus:border-purple-500 outline-none"
      />
    </div>
  );
}
