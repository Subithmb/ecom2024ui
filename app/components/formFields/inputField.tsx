/* eslint-disable */

import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  validate,
  placeholder,
}) => {
  const [error, setError] = useState<string>("");

  const handleBlur = () => {
    if (!validate(value)) {
      setError(`Invalid ${label.toLowerCase()} format.`);
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required
        className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
        }`}
        placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
