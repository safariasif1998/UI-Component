import React from "react";
import { Exclamation } from "../../icons/Exclamation";
import { PlusIcon } from "../../icons/PlusIcon";
import { MinusIcon } from "../../icons/MinusIcon";
import { CircleCheckIcon } from "../../icons/CircleCheckIcon";

export type NumberInputProps = {
  label?: string;
  type?: string;
  value?: number | string;
  placeholder?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (value: number | string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onDecrement?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onIncrement?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * /**
 * Flexible input field with validation, descriptions, error handling,
 * and optional increment/decrement functionality.
 * @typedef {Object} InputProps
 * @property {string} [label] Label text displayed for the input
 * @property {string} [type] HTML input type (e.g., "text", "number")
 * @property {number|string} [value] Current value of the input
 * @property {string} [placeholder] Placeholder text when empty
 * @property {string} [description] Helper text shown below input
 * @property {number} [min] Minimum allowed value
 * @property {number} [max] Maximum allowed value
 * @property {number} [step] Step increment/decrement value
 * @property {string} [error] Error message for validation
 * @property {boolean} [disabled] Whether input is disabled
 * @property {boolean} [readOnly] Whether input is read-only
 * @property {boolean} [required] Whether input is required
 * @property {(value: number|string) => void} [onChange] Triggered on value change
 * @property {(event: React.FocusEvent<HTMLInputElement>) => void} [onFocus] Triggered on focus
 * @property {(event: React.FocusEvent<HTMLInputElement>) => void} [onBlur] Triggered on blur
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onDecrement] Triggered on decrement click
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onIncrement] Triggered on increment click
 */

export function NumberInput(props: NumberInputProps) {
  const {
    label,
    type = "number",
    value = "",
    placeholder = "Enter a number",
    description = "",
    min = 0,
    max = 100,
    step = 1,
    error,
    disabled,
    readOnly,
    required,
    onChange,
    onFocus,
    onBlur,
    onDecrement,
    onIncrement,
  } = props;

  function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
    const raw = event.target.value;

    if (raw === "") {
      onChange?.("");
      return;
    }

    const num = Number(raw);
    onChange?.(Number.isNaN(num) ? raw : num);
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    onFocus?.(event);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    onBlur?.(event);
  }

  function handleDecrement(event: React.MouseEvent<HTMLButtonElement>) {
    onDecrement?.(event);
  }

  function handleIncrement(event: React.MouseEvent<HTMLButtonElement>) {
    onIncrement?.(event);
  }
  const id = React.useId();

  return (
    <div className={`w-full h-full  p-0 ${disabled && "opacity-50"}`}>
      <div className="flex items-center">
        <label htmlFor={id} className="my-1 px-1 select-none">
          {label}
        </label>
        {required && (
          <abbr title="required" className={`select-none`}>
            *
          </abbr>
        )}
      </div>
      <div
        className={`rounded h-full w-full flex justify-between items-center m-0 p-0 ${error ? "border-[1.5px] border-red-500" : "border border-gray-200 p-0 m-0"} ${value && !error && "border-green-700"} `}
      >
        <div className="flex justify-between w-full items-center relative p-0 m-0 h-8">
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handelChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            min={min}
            max={max}
            step={step}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            className="w-full h-full px-2.5  m-0 rounded outline-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-sm"
          />

          <div className="flex items-center">
            <div
              className={`transition-all duration-500 ease-in-out select-none ${value && !error ? "opacity-100 translate-x-0 max-w-20" : "opacity-0 -translate-x-2 max-w-0 overflow-hidden"}`}
            >
              <CircleCheckIcon
                className="text-green-700 w-3 h-3"
                width={24}
                height={24}
              />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out select-none overflow-hidden ${error ? "opacity-100 translate-x-0 max-w-20" : "opacity-0 translate-x-2 max-w-0 "}`}
            >
              <Exclamation
                width={24}
                height={24}
                className="text-red-500 w-3 h-3"
              />
            </div>
          </div>

          <div className="flex h-full">
            <button
              onClick={handleDecrement}
              className="cursor-pointer select-none text-gray-700 hover:bg-gray-100  hover:text-gray-900 transition-all duration-200 h-full p-0 m-0 px-3 overflow-hidden rounded-l delay-150 ease-in-out"
            >
              <MinusIcon
                className="font-light text-sm w-5 h-5 select-none"
                strokeWidth={1}
              />
            </button>
            <span className="text-gray-200 select-none">|</span>
            <button
              onClick={handleIncrement}
              className={`cursor-pointer select-none text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 h-full p-0 m-0 px-3 overflow-hidden rounded-r delay-75 ease-in-out`}
            >
              <PlusIcon
                className=" font-light text-sm w-5 h-5"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <span
          className={`block text-sm my-1 pl-0.5 text-gray-600 select-none
                      transition-all duration-500 ease-in-out
                      ${
                        value && !error
                          ? "opacity-100 translate-y-0 max-h-20"
                          : "opacity-0 -translate-y-2 max-h-0 overflow-hidden"
                      }
                    `}
        >
          {description + min + " and " + max}
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
            <Exclamation className="w-3 h-3 text-red-500" width={24} height={24} />
            <span className="text-red-500 text-sm">:</span>
          </div>
          <p className="text-sm text-red-500 select-none">{error}</p>
        </div>
      </div>
    </div>
  );
}
