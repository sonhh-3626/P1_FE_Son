import { type Product } from '../types/Product';

export const applySorting = (products: Product[], currentSort: string): Product[] => {
  const sortedProducts = [...products];

  switch (currentSort) {
    case 'latest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-asc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return sortedProducts;
};
