/* eslint-disable */

import React from "react";

interface DropdownProps {
  label: string;
  options: Record<string, string>;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled>
          Select your {label.toLowerCase()}
        </option>
        {Object.entries(options).map(([key, val]) => (
          <option key={key} value={val}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
