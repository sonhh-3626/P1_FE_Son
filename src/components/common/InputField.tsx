import React from 'react';
import LabelForm from "./LabelForm";
import { useTranslation } from 'react-i18next';

interface InputFieldProps {
  id: string;
  title: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string | number;
  isSelect?: boolean;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  title,
  type = "text",
  isRequired = false,
  placeholder,
  value,
  isSelect = false,
  options = [],
  onChange,
  error,
}) => {
  const { t } = useTranslation();

  const inputProps = {
    id,
    className: `mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2`,
    onChange: onChange,
    value: value || "",
    type,
    required: isRequired,
    placeholder: placeholder,
  };

  return (
    <div className="mb-4">
      <LabelForm htmlFor={id} title={t(title)} isRequired={isRequired} />
      {isSelect ? (
        <select {...inputProps}>
          {options.map((option: string) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : (
        type === 'textarea' ? (
          <textarea {...inputProps} rows={4}></textarea>
        ) : (
          <input {...inputProps} />
        )
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
