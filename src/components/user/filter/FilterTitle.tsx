interface FilterTitleProps {
  title: string;
}
export default function FilterTitle({title} : FilterTitleProps) {
  return (
    <div className="text-xl">
      {title}
    </div>
  )
}
