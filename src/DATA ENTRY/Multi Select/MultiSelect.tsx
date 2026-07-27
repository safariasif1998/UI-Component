import { useEffect, useState } from "react";
import { Chevron } from "../../icons/Chevron";
import { CloseIcon } from "../../icons/CloseIcon";
import { Globe } from "../../icons/Globe";
import CheckBox from "../../APPLICATION/CheckBoxes/CheckBox/CheckBox";
import { SearchIcon } from "../../icons/SearchIcon";

export type DropDownItem = {
  id: number | string;
  label: string;
  value: boolean;
};
export type EntityRecord = Record<string, DropDownItem>;
export type MultiSelectProps = {
  placeHolder?: string;
  data: DropDownItem[];
  onUpdate: (id: number | string) => void;
  selectedItems?: { id: number; label: string }[];
  onSelectedChange: (selectedItems: { id: number; label: string }[]) => void;
};

export function MultiSelect(props: MultiSelectProps) {
  const { data, onUpdate, placeHolder, selectedItems, onSelectedChange } =
    props;
  const [open, setOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const checked = data
      .filter((item) => item.value == true)
      .map((item) => ({ id: Number(item.id), label: item.label }));
    onSelectedChange(checked);
  }, [data, onSelectedChange]);

  const handleChevron = () => {
    setOpen((prev) => !prev);
    setShowSearchBox((prev) => !prev);
  };

  const handleUpdate = (id: string | number) => {
    onUpdate(id);
  };

  const removeSelectedItem = (id: number | string) => {
    const updatedSelected =
      selectedItems?.filter((item) => item.id !== id) || [];
    onSelectedChange(updatedSelected);
    onUpdate(id);
  };

  const handleSearchBox = () => {
    setOpen((prev) => !prev);
    setShowSearchBox((prev) => !prev);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };
  const searchData = search
    ? data.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      )
    : data;
  return (
    <div>
      <div className="lg:w-4/12 md:w-6/12 mx-auto px-2">
        <div className="bg-gray-100 border relative border-gray-400/90 rounded px-2 py-1.5 ">
          <div className="flex items-center px-2 justify-between">
            <button onClick={handleChevron} className="">
              <Globe className="text-gray-500" />
            </button>
            <div className="w-full items-center ">
              {showSearchBox && selectedItems?.length ? (
                <div className="flex gap-x-2 ml-2">
                  {showSearchBox &&
                    selectedItems.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        className="border-gray-300 border rounded px-2 py-1 flex items-center gap-x-1.5"
                      >
                        <label htmlFor={item.label}>{item.label}</label>
                        <button onClick={() => removeSelectedItem(item.id)}>
                          <CloseIcon className="h-4 text-center cursor-pointer hover:text-red-500" />
                        </button>
                      </div>
                    ))}
                  {showSearchBox && selectedItems.length > 2 ? (
                    <div className="ml-auto mr-3 my-auto flex justify-center items-center gap-1 group/two relative">
                      <span className="pb-2 font-bold">...</span>
                      <span className="border rounded-full inline-flex text-center items-center p-3 cursor-pointer  bg-green-700 text-white justify-center self-center content-center w-5 h-5">
                        {selectedItems.slice(2).length}
                      </span>
                      <div className="absolute top-full -left-5 mt-2 flex flex-wrap gap-2 bg-white border border-gray-200 rounded p-2 shadow-xl z-20  max-w-0 group-hover/two:max-w-lg overflow-hidden opacity-0 group-hover/two:opacity-100 transition-all duration-500 ease-in-out">
                        {selectedItems?.slice(2).map((item) => (
                          <div
                            key={item.id}
                            className="border-gray-300 border rounded px-2 py-1 flex items-center gap-x-1.5"
                          >
                            <label>{item.label}</label>
                            <button onClick={() => removeSelectedItem(item.id)}>
                              <CloseIcon className="h-4 cursor-pointer hover:text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <input
                  id="multi-select"
                  type="text"
                  className="px-2 py-1.5 outline-none rounded-l w-full"
                  placeholder={placeHolder}
                  onChange={handleSearch}
                />
              )}
            </div>
            <div className="flex items-center gap-x-1.5 h-full">
              {false && (
                <button className="text-center">
                  <CloseIcon />
                </button>
              )}
              {showSearchBox && (
                <button onClick={handleSearchBox}>
                  {selectedItems?.length && (
                    <SearchIcon className="my-auto fill-gray-700 mx-1.5 w-4 h-4" />
                  )}
                </button>
              )}
              {!showSearchBox && selectedItems?.length && (
                <span className="border rounded-full inline-flex text-center items-center p-3 cursor-pointer  bg-green-700 text-white justify-center self-center content-center w-5 h-5">
                  {selectedItems.length>0? selectedItems.length : ""}
                </span>
              )}
              <button onClick={handleChevron} className="group">
                <Chevron
                  className={[
                    "cursor-pointer",
                    "transform transition-transform duration-200 ease-out",
                    "group-hover:text-blue-500",
                    open ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                />
              </button>
            </div>
          </div>
          {open && (
            <div className="absolute top-full transform transition-transform duration-500 ease-out left-0 w-full h-4/12 shadow-2xl rounded-md  mt-1 z-10  py-1">
              <div className="grid border grid-cols-2  gap-x-3  border-gray-200 h-64 overflow-y-scroll overflow-hidden p-2 rounded-2xl shadow-2xl ">
                {searchData.map((item) => (
                  <div
                    className="flex py-1 border-b h-fit border-gray-300/95 justify-between rounded-sm   mb-1 last:mb-0 hover:bg-sky-300/50 cursor-pointer hover:rounded-sm my-1 transition-colors duration-200 shadow"
                    key={item.id}
                  >
                    <CheckBox
                      id={item.id}
                      label={item.label}
                      value={item.value}
                      handleUpdate={handleUpdate}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
