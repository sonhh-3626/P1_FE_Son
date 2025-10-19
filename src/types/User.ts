export interface User {
  id: string;
  email: string;
  username: string;
  role: "customer" | "vendor" | "admin";
}
