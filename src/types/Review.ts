export interface Review {
  id: number;
  productId: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  featured?: boolean;
}
