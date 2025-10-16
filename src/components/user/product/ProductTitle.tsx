interface ProductTitleProps {
  title: string;
}

export default function ProductTitle({ title }: ProductTitleProps) {
  return (
    <h3 className="text-lg font-semibold text-gray-800 truncate flex-grow">{title}</h3>
  );
}
