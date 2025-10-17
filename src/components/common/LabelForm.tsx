import React from 'react';

interface LabelFormProps {
  htmlFor: string;
  title: string;
  isRequired?: boolean;
}

export default function LabelForm({
  htmlFor,
  title,
  isRequired = false
}: LabelFormProps) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {title} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};
