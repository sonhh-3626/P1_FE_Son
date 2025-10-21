export interface Review {
  id: number;
  productId: number;
  user: {
    id: number;
    username: string;
  }
  rating: number;
  comment: string;
  created_at: string;
  featured?: boolean;
}
