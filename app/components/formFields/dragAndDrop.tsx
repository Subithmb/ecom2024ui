/* eslint-disable */

import React, { useState, useRef } from "react";

interface DragAndDropProps {
  label: string;
  onFileSelect: (file: { key: string; files: File[] } | null) => void;
  fieldKey: string;
  validateFile?: (file: File) => boolean;
  isMultiple?: boolean; // New prop for enabling/disabling multiple file selection
}

const DragAndDrop: React.FC<DragAndDropProps> = ({
  label,
  onFileSelect,
  fieldKey,
  validateFile,
  isMultiple = false, // Default value is false
}) => {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileDrop = (droppedFiles: FileList) => {
    const newFiles: File[] = Array.from(droppedFiles);
    const validFiles = validateFile
      ? newFiles.filter((file) => validateFile(file))
      : newFiles;

    if (newFiles.length > validFiles.length) {
      setError("Some files are invalid.");
    } else {
      setError(null);
    }

    if (isMultiple) {
      const filePreviews = validFiles.map((file) => URL.createObjectURL(file));
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setPreviews((prevPreviews) => [...prevPreviews, ...filePreviews]);
      onFileSelect({ key: fieldKey, files: [...files, ...validFiles] });
    } else {
      const firstFile = validFiles[0];
      if (firstFile) {
        setFiles([firstFile]);
        setPreviews([URL.createObjectURL(firstFile)]);
        onFileSelect({ key: fieldKey, files: [firstFile] });
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    handleFileDrop(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileDrop(e.target.files);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    onFileSelect({
      key: fieldKey,
      files: files.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center ${
          dragging
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 bg-gray-100"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {previews.length > 0 ? (
          <div
            className={`grid ${
              isMultiple ? "grid-cols-3 gap-4" : "grid-cols-1"
            }`}
          >
            {previews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="max-w-full max-h-24 mb-2 rounded"
                />
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-2 right-2 bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Drag and drop {isMultiple ? "image files" : "an image file"} here,
            or{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={handleBrowseClick}
            >
              browse
            </span>
          </p>
        )}
        <input
          type="file"
          accept="image/*"
          multiple={isMultiple} // Dynamically enable multiple file selection
          onChange={handleInputChange}
          className="hidden"
          ref={fileInputRef}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DragAndDrop;
