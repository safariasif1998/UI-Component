import React, { useState } from "react";
import { Exclamation } from "../../icons/Exclamation";

type option = { id: number; value: string; text: string };

export type SelectFieldProps = {
  value?: string;
  label?: string;
  error?: string;
  disable?: boolean;
  required?: boolean;
  description?: string;
  options: option[] | undefined;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

function SelectField(props: SelectFieldProps) {
  const {
    value,
    label,
    error,
    disable,
    required,
    options,
    description,
    onChange,
    onBlur,
  } = props;

  const [borderBottom, setBorderBottom] = useState<Boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange?.(event);
  }

  function handleFocus(event: React.FocusEvent<HTMLSelectElement>) {
    if (event) {
      setBorderBottom(true);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLSelectElement>) {
    setBorderBottom(false);
    onBlur?.(event);
  }

  return (
    <div className="w-full">
      {label && (
        <div className="flex gap-x-1">
          <label htmlFor={label}>{label}</label>
          {required && <abbr>*</abbr>}
        </div>
      )}
      <div className="relative w-full border border-gray-200 rounded pr-2">
        <select
          disabled={disable}
          name={label}
          value={value}
          id=""
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="px-2 py-1.5 w-full outline-none cursor-pointer"
        >
          {options?.map((opt) => (
            <option key={opt.id} value={opt.value} className="">
              {opt.text}
            </option>
          ))}
        </select>
        <span
          className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 origin-center transition-transform duration-300 ease-out`}
          style={{
            height: "4px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            borderBottom: borderBottom
              ? "2px solid #0d1b29"
              : "2px solid #d1d1d1",
            transform: borderBottom ? "scaleX(1)" : "scaleX(0)",
          }}
        ></span>
      </div>
      <div>
        <span
          className={`block text-xs my-1 pl-0.5 text-gray-600 select-none
                            transition-all duration-500 ease-in-out
                            ${
                              !error
                                ? "opacity-100 translate-y-0 max-h-20"
                                : "opacity-0 -translate-y-2 max-h-0 overflow-hidden"
                            }
                          `}
        >
          {description}
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
            <label className="text-xs text-red-500">{label}</label>
            <Exclamation
              className="w-3 h-3 text-red-500"
              width={24}
              height={24}
            />
            <span className="text-red-500 text-sm">:</span>
          </div>
          <p className="text-xs text-red-500 select-none">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectField;
