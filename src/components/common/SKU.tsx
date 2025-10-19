interface SKUProps {
  code: string;
}

export default function SKU({ code='' }: SKUProps) {
  return (
    <div>
      <span className="text-[#6B7280]">
        SKU:
      </span>
      <span>
        {code}
      </span>
    </div>
  )
}
