interface CheckboxFieldProps {
  id: string;
  title: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxField({
  id,
  title,
  checked,
  handleChange = () => {},
}: CheckboxFieldProps) {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="mr-2 cursor-pointer accent-blue-500"
        onChange={handleChange}
        checked={checked}
      />
      <label
        htmlFor={`checkbox-${id}`}
        className="text-sm text-gray-700 cursor-pointer select-none"
      >
        {title}
      </label>
    </div>
  );
}
