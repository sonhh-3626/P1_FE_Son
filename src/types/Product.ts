export type ProductType = "organic" | "cold sale" | "";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;

  stockQuantity: number;
  totalQuantity: number;
  discountPercentage: number;

  type: ProductType;

  rating: number;

  imageUrls?: string[];
  loved?: boolean;
  dealEndTime?: Date;

  inStock: boolean;
  onSale: boolean;

  calculateSaving?: () => number;
}
