import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFormData = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (key: string, value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return [formData, updateFormData];
};

export default useFormData;
