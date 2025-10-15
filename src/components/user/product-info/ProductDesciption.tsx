interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="pt-5 border-1 border-[#E5E7EB]">
      <div className="text-[#4B5563]">
          {description}
      </div>
    </div>
  )
}
