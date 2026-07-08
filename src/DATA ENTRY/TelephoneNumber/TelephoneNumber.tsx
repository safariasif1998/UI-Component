import { useState } from "react";
import { Exclamation } from "../../icons/Exclamation";
import { countries } from "countries-list";
import { SquareChevronDown } from "../../icons/SquareChevronDown";

export type TelephoneNumberProps = {
  label?: string;
  type: string;
  value?: null;
  placeholder?: string;
  labelDescription?: string;
  error?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
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
  } = props;

  const [countryList, setCountryList] = useState([countries]);
  console.log(countryList);

  return (
    <div className="w-full h-full box-border p-0 m-0">
      <div className="w-full h-full box-border m-0 p-0">
        <label htmlFor="#">{label}</label>
        <div className="w-full h-8 flex border rounded border-gray-200">
          <div className="flex gap-x-2 items-center px-2 h-full border-r border-gray-200 rounded-r-sm">
            <span>Flag</span>
            <button>
              <SquareChevronDown className="w-5 h-5 cursor-pointer" />
            </button>
          </div>
          <div className="w-full h-full px-2">
            <input
              type={type}
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="w-full h-full outline-none"
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              disabled={disabled}
            />
          </div>
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
      <div className="w-full h-32 overflow-y-scroll border rounded-sm border-gray-200">
        <input type="text" className="w-full" />
        {Object.values(countryList[0]).map((country: any) => {
          return (
            <div className="flex px-2 py-2 gap-x-2 text-gray-800 cursor-pointer hover:bg-gray-100 transition-all duration-300 border-b-2 border-gray-200">
              <li className="" key={country.name}>
                {country.name}
              </li>
              <span>(
                <span>+</span>
                {country.phone})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
