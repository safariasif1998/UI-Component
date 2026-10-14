import { Exclamation } from "../../../icons/Exclamation";
import React, { useState } from "react";

export type InputProps = {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  disableInfo?: string;
  showEmailICon?: boolean;
  isValidEmail?: boolean;
  labelDescription?: string;
  children?: React.ReactNode;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export function BasicInput(props: InputProps) {
  const {
    label,
    value,
    type = "email",
    placeholder,
    error,
    readOnly,
    required,
    disabled,
    disableInfo,
    labelDescription,
    children,
    onchange,
    onBlur,
  } = props;

  const [borderBottom, setBorderBottom] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchange?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event) {
      setBorderBottom(false);
      onBlur?.(event);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event) {
      setBorderBottom(true);
    }
  };

  return (
    <div className="w-full h-full box-border m-0 p-0">
      <div className="">
        <div className="flex gap-x-1 text-sm font-medium text-gray-700">
          <label htmlFor="Email">{label}</label>
          {required && (
            <abbr title="Email is Required" className={``}>
              *
            </abbr>
          )}
        </div>
        <div className="relative border w-full h-10 flex  rounded border-gray-200">
          <input
            value={value}
            type={type}
            name="Email"
            id="Email"
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="w-full outline-none px-2"
          />
          {children}
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
      </div>
      {disabled && <p className="text-gray-500 text-xs">{disableInfo}</p>}
      <div>
        <span
          className={`block text-xs my-1 pl-0.5 text-gray-600 select-none transition-all duration-500 ease-in-out`}
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
