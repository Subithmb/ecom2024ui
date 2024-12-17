/* eslint-disable */

import React, { useState } from "react";

interface EmailFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateEmail: (email: string) => boolean;
}

const EmailField: React.FC<EmailFieldProps> = ({
  value,
  onChange,
  validateEmail,
}) => {
  const [error, setError] = useState<string>("");

  const handleBlur = () => {
    if (!validateEmail(value)) {
      setError("Invalid email format.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-600"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required
        className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
        }`}
        placeholder="Enter your email"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default EmailField;
