interface ProductPriceProps {
  price: number;
  discountPercentage: number;
}

export default function ProductPrice({ price, discountPercentage }: ProductPriceProps) {
  return (
    <div className="flex">
      <div className="text-[#DC2626]">
          $ {price}
      </div>
      <div className="line-through">
        {price*(1-discountPercentage)}
      </div>
    </div>
  )
}
