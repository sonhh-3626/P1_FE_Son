export const getStatusColor = (status: string) => {
  switch (status) {
    case "processing":
      return "bg-[#FF6E40] text-white";
    case "shipped":
      return "bg-[#293134] text-white";
    case "completed":
      return "bg-[#05B171] text-white";
    case "Refunded":
      return "bg-[#FAAE42] text-white";
    case "cancelled":
      return "bg-[Cancelled] text-white";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
