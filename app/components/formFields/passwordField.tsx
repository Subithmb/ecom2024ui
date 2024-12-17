/* eslint-disable */

import { useState } from "react";

interface PasswordFieldProps {
  value: string;
  passwordName?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  validatePassword: (password: string) => boolean;
  required?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  validatePassword,
  passwordName,
  placeholder,
  required = false,
}) => {
  const [error, setError] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBlur = () => {
    if (!validatePassword(value)) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-600"
      >
        {passwordName ? passwordName : "Password"}
      </label>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          required={required}
          className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
          }`}
          placeholder={placeholder ? placeholder : "Enter your password"}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {passwordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.992C4.974 7.403 7.613 4 12 4c4.387 0 7.027 3.403 8.02 4.992m.334 4.03c-.994 1.588-3.633 4.992-8.02 4.992-4.387 0-7.026-3.403-8.02-4.992m3.686-1.56A3 3 0 1112 15a3 3 0 01-3.02-3.538z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.992C4.974 7.403 7.613 4 12 4c4.387 0 7.027 3.403 8.02 4.992m.334 4.03c-.994 1.588-3.633 4.992-8.02 4.992-4.387 0-7.026-3.403-8.02-4.992m3.686-1.56A3 3 0 1112 15a3 3 0 01-3.02-3.538z"
              />
            </svg>
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordField;
