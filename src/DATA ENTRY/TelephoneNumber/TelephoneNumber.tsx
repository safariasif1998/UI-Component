import React, { useState } from "react";
import { Exclamation } from "../../icons/Exclamation";
import { SearchBox } from "../SearchBox/SearchBox";
import Countries from "world-countries";

import { Chevron } from "../../icons/Chevron";
import { PhoneIcon } from "../../icons/PhoneIcon";

type CountryItem = {
  code: string;
  code3: string;
  numericCode: string;
  name: string;
  officialName: string;
  flag: string;
  callingCode: string;
};
const countryList: CountryItem[] = Countries.map((country) => ({
  code: country.cca2,
  code3: country.cca3,
  numericCode: country.ccn3,
  name: country.name.common,
  officialName: country.name.official,
  flag: getFlagEmoji(country.cca2),
  callingCode: country.idd.root + (country.idd.suffixes?.[0] ?? ""),
}));
function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export type TelephoneNumberProps = {
  label?: string;
  type: string;
  value?: number | string;
  placeholder?: string;
  labelDescription?: string;
  error?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  showTelePhoneIcon?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TelephoneNumber(props: TelephoneNumberProps) {
  const {
    label,
    type = "tel",
    value,
    placeholder,
    labelDescription,
    error,
    required,
    readOnly,
    disabled,
    showTelePhoneIcon,
    onChange,
    onBlur,
  } = props;

  const [showSearch, setShowSearch] = useState(false);
  const [countries, setCountries] = useState(countryList);
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    countryList[0],
  );
  const [filteredCountries, setFilteredCountries] = useState<
    CountryItem[] | null
  >(countryList);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event);
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    onBlur?.(event);
  }

  function openModal(event: React.MouseEvent<HTMLButtonElement>) {
    if (event) {
      setShowSearch((prev) => !prev);
      setFilteredCountries(countries);
    }
  }
  function handleSearch(value: string) {
    if (!value.trim()) {
      setFilteredCountries(countries);
      return;
    }

    const filtered = countries.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredCountries(filtered);
  }
  return (
    <div className="w-full h-full box-border p-0 m-0">
      <div className="w-full h-full box-border m-0 p-0">
        <div className="">
          <label htmlFor="#">
            {label}
            {required && (
              <abbr className={`ml-1`} title="Required">
                *
              </abbr>
            )}
          </label>
        </div>
        <div className="w-full h-10 flex border rounded border-gray-200">
          <div className="flex h-full  justify-center items-center border-r group border-gray-200 w-16 cursor-pointer">
            {selectedCountry && (
              <div className=" flex justify-center items-center w-full h-full">
                <img
                  src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                  alt={selectedCountry.name}
                  width={24}
                />
              </div>
            )}

            <div className="flex items-center h-full ">
              <button onClick={openModal}>
                <Chevron
                  className={[
                    "cursor-pointer",
                    "transform transition-transform duration-200 ease-out",
                    "group-hover:text-blue-500",
                    showSearch ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                />
              </button>
            </div>
          </div>
          <div className="w-full h-full px-2 flex items-center">
            <span className="block mr-1">{selectedCountry?.callingCode}</span>
            <input
              value={value}
              type={type}
              id="phone"
              name="phone"
              pattern="^\+?[0-9\s\-]{7,15}$"
              className="w-full h-full outline-none"
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              disabled={disabled}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {showTelePhoneIcon && (
            <div className="w-14  border-l border-gray-200 group">
              <a
                href={`tel:${selectedCountry?.callingCode}`}
                className={`group- w-full h-full flex items-center justify-center ${error ? "cursor-not-allowed" : "hover:bg-gray-200"}`}
              >
                <PhoneIcon className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div>
        <span
          className={`block text-sm my-1 pl-0.5 text-gray-600 select-none transition-all duration-500 ease-in-out`}
        >
          {labelDescription}
        </span>
        <div
          className={`flex gap-x-2 items-center
                            transition-all duration-500 ease-in-out overflow-hidden
                            ${
                              error
                                ? "opacity-100 translate-y-0 max-h-20 mt-1"
                                : "opacity-0 translate-y-2 max-h-0"
                            }
                          `}
        >
          <div className="flex items-center gap-x-1">
            <label className="text-sm text-red-500">{label}</label>
            <Exclamation
              className="w-3 h-3 text-red-500"
              width={24}
              height={24}
            />
            <span className="text-red-500 text-sm">:</span>
          </div>
          <p className="text-sm text-red-500 select-none">{error}</p>
        </div>
      </div>
      {showSearch && (
        <div className="w-full max-h-48 h-40 overflow-y-scroll border rounded-sm border-gray-200">
          <div className="border-b-2 border-gray-200">
            <SearchBox onSearch={handleSearch} />
          </div>
          {filteredCountries?.map((country) => (
            <div>
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  setSelectedCountry(country);
                  setShowSearch(false);
                }}
                className="flex w-full items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                    alt={country.name}
                    width={24}
                  />
                  <span>{country.name}</span>
                  <span>{country.callingCode}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
