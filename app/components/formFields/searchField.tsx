/* eslint-disable */

import React, { useState } from "react";
import Button from "../button/buttonComponent";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  liveSearch?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onSearch,
  placeholder = "Search...",
  liveSearch = false,
}) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (liveSearch) {
      onSearch(newValue);
    }
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 max-w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-blue-400"
      />
      {!liveSearch && (
        <Button
          name="Search"
          className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
          onClick={handleSearchClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
