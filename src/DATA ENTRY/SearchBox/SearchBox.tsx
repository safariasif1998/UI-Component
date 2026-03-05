import React, { useEffect, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchIcon } from "../../icons/SearchIcon";

export type SearchBoxProps = {};

export function SearchBox(props: SearchBoxProps) {
  const {} = props;
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
  }

  return (
    <div className="border border-gray-400 my-auto flex rounded px-2 pt-2 pb-1.5 outline-none focus-within:border-b-blue-500 focus-within:border-r-0 focus-within:border-l-0 focus-within:border-t-0 focus-within:rounded-none transition delay-150 duration-300">
      {showSearchIcon && <SearchIcon />}
      <input
        type="text"
        onChange={handleSearch}
        value={inputValue}
        className="border-none outline-none "
        placeholder="Quick Find"
      />
      {showCloseIcon && <CloseIcon handleClose={handleClean} />}
    </div>
  );
}
