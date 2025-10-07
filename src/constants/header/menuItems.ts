interface SubMenuItem {
  label: string;
  path: string;
}

interface DropdownMenuItem {
  type: "dropdown";
  label: React.ReactNode;
  items: SubMenuItem[];
}

interface StandardMenuItem {
  type: "item";
  label: string;
  path: string;
}

export type MenuItemType = DropdownMenuItem | StandardMenuItem;
export const MENU_ITEMS_LEFT: MenuItemType[] = [
  {
    type: "dropdown",
    label: "home",
    items: [
      { label: "home_sub_1", path: "/home/sub1" },
      { label: "home_sub_2", path: "/home/sub2" },
    ],
  },
  {
    type: "dropdown",
    label: "shop",
    items: [
      { label: "all_products", path: "/shop/all" },
      { label: "best_sellers", path: "/shop/best" },
    ],
  },
  { type: "item", label: "fruits_vegetables", path: "/category/fruits" },
  { type: "item", label: "beverages", path: "/category/beverages" },
  { type: "item", label: "blog", path: "/blog" },
  { type: "item", label: "contact", path: "/contact" },
];
