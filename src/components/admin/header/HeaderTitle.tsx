interface HeaderTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return <h1 className="text-xl font-semibold text-gray-900">{title}</h1>;
}
