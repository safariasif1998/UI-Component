import React, { useEffect, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchIcon } from "../../icons/SearchIcon";

export type SearchBoxProps = {
  onSearch?: (value: string) => void;
};

export function SearchBox(props: SearchBoxProps) {
  const { onSearch } = props;
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  useEffect(() => {
    if (inputValue.length > 0) {
      setShowCloseIcon(true);
      setShowSearchIcon(false);
    } else {
      setShowCloseIcon(false);
      setShowSearchIcon(true);
    }
  });

  function handleClean() {
    setShowCloseIcon((prev) => !prev);
    setInputValue("");
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    onSearch?.(event.target.value);
  }

  return (
    <div className="flex items-center rounded transition delay-150 duration-300 h-8">
      <button className="border-r border-gray-300 h-full w-8 text-center flex justify-center items-center">
        <SearchIcon className="w-4 h-4 font-bold text-gray-500" />
      </button>
      <input
        type="text"
        onChange={handleSearch}
        value={inputValue}
        className="border-none outline-none w-full px-2"
        placeholder="Quick Find"
      />
      {showCloseIcon && (
        <button className="w-8 h-full border-l border-gray-300">
          <CloseIcon handleClose={handleClean} />
        </button>
      )}
    </div>
  );
}
