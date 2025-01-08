import React, { useState } from "react";

interface StringToArrayInputProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  placeholder?: string;
}

const StringToArrayInput: React.FC<StringToArrayInputProps> = ({
  label,
  onChange,
  placeholder,
}) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Convert the string into an array by splitting it by commas and trimming whitespace
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item); // Filter out empty strings
    onChange(array);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={input}
        onChange={handleInputChange}
        placeholder={placeholder || "Enter comma-separated values"}
        className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default StringToArrayInput;
