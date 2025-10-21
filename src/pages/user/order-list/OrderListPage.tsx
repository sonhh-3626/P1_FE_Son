import { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationNav from "../../../components/common/PaginationNav";
import FilterTools from "./FIlterTools";
import TableOrders from "./TableOrders";
import type { AppDispatch, RootState } from "../../../redux/store";
import {
  fetchOrders,
  setItemsPerPage,
  setSortOption,
} from "../../../redux/features/orderSlice";
import { OrderSortOption } from "../../../types/Order";

export default function OrderListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error, sortOption, itemsPerPage } = useSelector(
    (state: RootState) => state.orders
  );
  const [currentPage, setCurrentPage] = useState(1);

  const safeOrders = Array.isArray(orders) ? orders : [];

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(safeOrders.length / itemsPerPage)),
    [safeOrders.length, itemsPerPage]
  );

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = safeOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  useEffect(() => {
    dispatch(fetchOrders({ sortOption, currentPage, itemsPerPage }));
  }, [dispatch, sortOption, currentPage, itemsPerPage]);

  const handleSearch = (term: string) => {
    // TODO
  };

  const handleSort = (option: OrderSortOption) => {
    dispatch(setSortOption(option));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleItemsPerPageChange = (items: number) => {
    dispatch(setItemsPerPage(items));
    setCurrentPage(1);
  };

  if (loading)
    return <div className="p-6 text-gray-500">Loading orders...</div>;

  if (error)
    return (
      <div className="p-6 text-red-500">
        Error: {typeof error === "string" ? error : "Unknown error"}
      </div>
    );

  console.log(orders)
  return (
    <div className="mx-[15%] mb-10">
      <FilterTools
        onSearch={handleSearch}
        onSort={handleSort}
        currentSort={sortOption}
        onItemsPerPageChange={handleItemsPerPageChange}
        currentItemPerPage={itemsPerPage}
      />

      <TableOrders orders={currentOrders} />

      <PaginationNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
