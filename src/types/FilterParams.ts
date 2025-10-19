export interface FilterParams {
    selectedFilters: string[];
    currentSort: string;
    currentPage: number;
    itemsPerPage: number;
    inStock?: boolean;
    onSale?: boolean;
}
