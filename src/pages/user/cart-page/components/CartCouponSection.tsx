import Button from "../../../../components/common/Button";

export default function CartCouponSection() {
  return (
    <div className="mt-6">
      <p className="font-medium mb-2">Phiếu ưu đãi</p>
      <input
        type="text"
        placeholder="Mã ưu đãi"
        className="border w-full rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <Button className="w-full">
        Áp dụng
      </Button>
    </div>
  );
};
