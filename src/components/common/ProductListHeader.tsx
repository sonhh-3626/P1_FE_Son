import SectionTitle from "./SectionTitle";
import ViewAllButton from "./ViewAllButton";

interface ProductListHeaderProps {
  title: string;
  subtitle?: string;
  pathTo: string;
}

export default function ProductListHeader({title, subtitle, pathTo}: ProductListHeaderProps) {
  return (
    <div className= "flex justify-between items-center mb-4">
      <SectionTitle title={title} subtitle={subtitle} />
      <ViewAllButton pathTo={pathTo} />
    </div>
  )
}
