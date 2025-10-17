import { useTranslation } from "react-i18next";

export type ShippingOptionType = "flat_rate" | "local_pickup";

interface ShippingOptionsProps {
  onShippingChange: (option: ShippingOptionType) => void;
  selectedShippingOption: ShippingOptionType;
  isFreeShipping: boolean;
}

export default function ShippingOptions({ onShippingChange, selectedShippingOption, isFreeShipping }: ShippingOptionsProps) {
  const { t } = useTranslation();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onShippingChange(event.target.value as ShippingOptionType);
  };

  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{t("shipping")}</span>
        <div>
          <div className="flex items-center">
            <span className="mr-2">{t("shipping_options.flat_rate")}: {isFreeShipping ? `$0.00` : `$15.00`}</span>
            <input
              type="radio"
              name="shipping"
              value="flat_rate"
              className="ml-auto"
              checked={selectedShippingOption === "flat_rate"}
              onChange={handleOptionChange}
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2">{t("shipping_options.local_pickup")}</span>
            <input
              type="radio"
              name="shipping"
              value="local_pickup"
              className="ml-auto"
              checked={selectedShippingOption === "local_pickup"}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
