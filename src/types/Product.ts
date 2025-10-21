export type ProductType = "organic" | "cold sale" | "";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };

  stockQuantity: number;
  totalQuantity: number;
  discountPercentage: number;

  product_type: ProductType;
  reviewCount: number;

  rating: number;
  ratingCount?: number;
  sku: string;

  imageUrls: string[];
  loved: boolean;
  dealEndTime?: Date;

  inStock: boolean;
  onSale: boolean;

  calculateSaving?: () => number;
}
