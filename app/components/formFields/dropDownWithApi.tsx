"use client";

import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/services/dataProvider/dataProvider";
import { ApiEnum } from "@/app/utils/enumUtils";

/* eslint-disable */

interface DropdownProps {
  endpoint: ApiEnum;
  label: string;
  onChange: (value: string) => void;
}
/* eslint-enable */

const DropdownApi: React.FC<DropdownProps> = ({
  endpoint,
  label,
  onChange,
}) => {
  const [options, setOptions] = useState<{ key: string; value: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(endpoint);
        const data = response.data.map(
          (item: { name: string; _id: string }) => ({
            key: item.name,
            value: item._id,
          }),
        );
        setOptions(data);
      } catch (error) {
        console.error("Failed to fetch data for dropdown:", error);
        setError("Failed to load options.");
      }
    };

    fetchData();
  }, [endpoint]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DropdownApi;
