export interface SortOptionProps {
  value: string;
  label: string;
}

export const sortOptions : SortOptionProps[] = [
  { value: 'latest', label: 'Sort by latest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'name-desc', label: 'Name: Z-A' },
];
