/* eslint-disable */

import React, { useState, useRef } from "react";

interface DragAndDropProps {
  label: string;
  onFileSelect: (file: { key: string; file: File } | null) => void;
  fieldKey: string;
  validateFile?: (file: File) => boolean;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({
  label,
  onFileSelect,
  fieldKey,
  validateFile,
}) => {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileDrop = (files: FileList) => {
    const newFile = files[0];
    if (!newFile) return;

    if (validateFile && !validateFile(newFile)) {
      setError("Invalid file type or size.");
      return;
    }

    setError(null);
    setPreview(URL.createObjectURL(newFile));
    setFile(newFile);
    onFileSelect({ key: fieldKey, file: newFile });
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

  const handleRemoveFile = () => {
    setPreview(null);
    setFile(null);
    setError(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-48 mb-2 rounded"
            />
            <button
              onClick={handleRemoveFile}
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
        ) : (
          <p className="text-sm text-gray-500">
            Drag and drop an image file here, or{" "}
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
