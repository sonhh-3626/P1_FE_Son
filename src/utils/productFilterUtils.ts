import { type Product } from '../types/Product';

interface ActiveFilters {
  category?: string[];
  type?: string[];
  price?: string[];
  [key: string]: string[] | undefined;
}

export const applyFilters = (
  products: Product[],
  selectedFilters: string[],
  inStock: boolean,
  onSale: boolean,
  searchTerm: string
): Product[] => {
  let filteredProducts = [...products];

  const activeFilters = selectedFilters.reduce((acc, filter) => {
    const [key, value] = filter.split(':');
    if (key && value) {
      if (!acc[key]) acc[key] = [];
      acc[key].push(value);
    }
    return acc;
  }, {} as ActiveFilters);

  filteredProducts = filteredProducts.filter(product => {
    if (activeFilters.category?.length && !activeFilters.category.includes(product.category)) {
      return false;
    }
    if (activeFilters.type?.length && !activeFilters.type.includes(product.product_type)) {
      return false;
    }
    if (activeFilters.price?.length) {
      const matchesPrice = activeFilters.price.some(priceRange => {
        const [min, max] = priceRange.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });
      if (!matchesPrice) {
        return false;
      }
    }
    if (inStock && !product.inStock) {
      return false;
    }
    if (onSale && !product.onSale) {
      return false;
    }
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return filteredProducts;
};
