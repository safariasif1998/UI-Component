import React, { useState } from "react";
import { Exclamation } from "../../../icons/Exclamation";
import { rangeStyle } from "./index";

export type InputRangeProps = {
  label?: string;
  value?: number;
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
  selected?: string | null;
  min?: number;
  max?: number;
  step?: number;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputRange(props: InputRangeProps) {
  const {
    label,
    value,
    type = "range",
    error,
    readOnly,
    required,
    disabled,
    disableInfo,
    labelDescription = "Use the slider to select a value within the available range.",
    onchange,
    selected,
    min = 1.5,
    max = 3,
    step = 0.1,
  } = props;

  const handleChangeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchange?.(event);
  };

  return (
    <div
      className={`w-full h-full box-border m-0 p-0 ${disabled && "opacity-60"}`}
    >
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <span>{label}</span> 
        {required && (
          <abbr title="" className={``}>
            *
          </abbr>
        )}
        <span className="inline-flex min-w-9 h-7 items-center justify-center rounded-full bg-sky-900 text-white px-2 text-[12px] font-semibold text-gray-900">
          {value?.toFixed(1)}
        </span>
      </label>
      <input
        required={required}
        readOnly={readOnly}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChangeRange}
        disabled={selected === null}
        className={rangeStyle}
      />
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
