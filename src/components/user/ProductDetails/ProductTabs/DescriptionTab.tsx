interface DescriptionTabProps {
  description: string;
}

export default function DescriptionTab({ description }: DescriptionTabProps) {
  return <p className="text-gray-700">{description}</p>;
}
