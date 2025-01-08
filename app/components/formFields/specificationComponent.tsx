/* eslint-disable */

import React, { useState } from "react";

export interface Specification {
  key: string;
  value: string;
}

interface SpecificationComponentProps {
  specifications: Specification[];
  onChange: (updatedSpecifications: Specification[]) => void;
}

const SpecificationComponent: React.FC<SpecificationComponentProps> = ({
  specifications,
  onChange,
}) => {
  const [specs, setSpecs] = useState<Specification[]>(specifications);

  const handleInputChange = (
    index: number,
    field: "key" | "value",
    value: string,
  ) => {
    const updatedSpecs = [...specs];
    updatedSpecs[index][field] = value;
    setSpecs(updatedSpecs);
    onChange(updatedSpecs);
  };

  const handleAddSpecification = () => {
    const updatedSpecs = [...specs, { key: "", value: "" }];
    setSpecs(updatedSpecs);
    onChange(updatedSpecs);
  };

  const handleRemoveSpecification = (index: number) => {
    const updatedSpecs = specs.filter((_, i) => i !== index);
    setSpecs(updatedSpecs);
    onChange(updatedSpecs);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700">Specifications</h3>
      {specs.map((spec, index) => (
        <div key={index} className="flex items-center space-x-4 mt-2">
          <input
            type="text"
            value={spec.key}
            onChange={(e) => handleInputChange(index, "key", e.target.value)}
            placeholder="Key"
            className="w-2/3 px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={spec.value}
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
            placeholder="Value"
            className="w-1/3 px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => handleRemoveSpecification(index)}
            className="px-1 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddSpecification}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Specification
      </button>
    </div>
  );
};

export default SpecificationComponent;
