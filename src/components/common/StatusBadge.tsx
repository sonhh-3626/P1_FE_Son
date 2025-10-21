import { getStatusColor } from "../../utils/getStatusColor";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  )
}
