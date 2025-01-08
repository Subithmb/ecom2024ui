/* eslint-disable */

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneFieldProps {
  value: { countryCode: string; phoneNumber: string };
  onChange: (value: { countryCode: string; phoneNumber: string }) => void;
  validatePhoneNumber: (phoneNumber: string) => boolean;
  inputStyle?: React.CSSProperties | undefined;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  value,
  onChange,
  validatePhoneNumber,
  inputStyle,
}) => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError("");
  }, [value]);

  const handleBlur = () => {
    if (!validatePhoneNumber(value.phoneNumber)) {
      setError("Invalid phone number format.");
    } else {
      setError("");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneChange = (phone: string, countryData: any) => {
    const countryCode = countryData.dialCode;
    const phoneNumber = phone.replace(`+${countryCode}`, "").trim();
    onChange({ countryCode, phoneNumber });
  };

  return (
    <div className="mt-1">
      <label className="block text-sm font-medium text-gray-600">
        Phone Number
      </label>
      <PhoneInput
        country={value.countryCode || "in"}
        value={value.phoneNumber}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(phone: string, countryData: any) =>
          handlePhoneChange(phone, countryData)
        }
        onBlur={handleBlur}
        inputStyle={inputStyle ?? { width: "450px" }}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneField;
