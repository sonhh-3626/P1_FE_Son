import type { Product } from "../types/Product";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export const generateBreadcrumbs = (
  pathname: string,
  product?: Product
): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

  if (product) {
    breadcrumbs.push({
      label: product.category,
      path: `/category/${product.category}`,
    });

    breadcrumbs.push({
      label: product.name,
      path: `/product/${product.id}`,
    });

    return breadcrumbs;
  }

  const pathnames = pathname.split("/").filter(Boolean);
  for (let i = 0; i < pathnames.length; i++) {
    const path = `/${pathnames.slice(0, i + 1).join("/")}`;
    breadcrumbs.push({
      label: pathnames[i].charAt(0).toUpperCase() + pathnames[i].slice(1),
      path,
    });
  }

  return breadcrumbs;
};
