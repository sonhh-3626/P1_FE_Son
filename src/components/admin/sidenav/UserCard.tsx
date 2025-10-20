interface UserCardProps {
  name: string;
  role: 'admin';
}

export default function UserCard({ name, role }: UserCardProps) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl shadow p-3">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full text-lg font-semibold">
        {name[0]}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-purple-700">{name}</h3>
        <p className="text-gray-500 text-2xs">{role}</p>
      </div>
    </div>
  );
}
