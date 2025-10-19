export interface Category {
  id: string;
  name: string;
  pathTo: string;
  imgUrl?: string;
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    id: 'fruits-vegetables',
    imgUrl: "https://placehold.co/400",
    name: "Fruits & Vegetables",
    pathTo: "/categories/fruits-vegetables",
    subcategories: [
      { id: 'fresh-fruits', name: 'Fresh Fruits', pathTo: '/categories/fruits-vegetables/fresh-fruits' },
      { id: 'fresh-vegetables', name: 'Fresh Vegetables', pathTo: '/categories/fruits-vegetables/fresh-vegetables' },
    ],
  },
  {
    id: 'baby-pregnancy',
    imgUrl: "https://placehold.co/400",
    name: "Baby & Pregnancy",
    pathTo: "/categories/baby-pregnancy",
    subcategories: [
      { id: 'baby-food', name: 'Baby Food', pathTo: '/categories/baby-pregnancy/baby-food' },
      { id: 'diapers', name: 'Diapers', pathTo: '/categories/baby-pregnancy/diapers' },
    ],
  },
  { id: 'beverages', imgUrl: "https://placehold.co/400", name: "Beverages", pathTo: "/categories/beverages" },
  { id: 'meats-seafood', imgUrl: "https://placehold.co/400", name: "Meats & Seafood", pathTo: "/categories/meats-seafood" },
  { id: 'biscuits-snacks', imgUrl: "https://placehold.co/400", name: "Biscuits & Snacks", pathTo: "/categories/biscuits-snacks" },
  { id: 'breads-bakery', imgUrl: "https://placehold.co/400", name: "Breads & Bakery", pathTo: "/categories/breads-bakery" },
  { id: 'breakfast-dairy', imgUrl: "https://placehold.co/400", name: "Breakfast & Dairy", pathTo: "/categories/breakfast-dairy" },
  { id: 'frozen-foods', imgUrl: "https://placehold.co/400", name: "Frozen Foods", pathTo: "/categories/frozen-foods" },
  { id: 'grocery-staples', imgUrl: "https://placehold.co/400", name: "Grocery & Staples", pathTo: "/categories/grocery-staples" },
  { id: 'healthcare', imgUrl: "https://placehold.co/400", name: "Healthcare", pathTo: "/categories/healthcare" },
  { id: 'household-needs', imgUrl: "https://placehold.co/400", name: "Household Needs", pathTo: "/categories/household-needs" },
];
