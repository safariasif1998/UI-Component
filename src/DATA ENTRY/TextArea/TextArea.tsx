/* import React, { useState } from "react";
import SubmitButton from "../../APPLICATIONS/Buttons/Submit Button/SubmitButton";

export type TextAreaProps = {
  label?: string;
  type?: string;
  value?: string;
};

export function TextArea(props: TextAreaProps) {
  const { type, value, label } = props;
  const [textarea, setTextarea] = useState(value);
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(event.target.value);
  }
  return (
    <section>
      <div className="flex flex-col static">
        <label
          htmlFor="input"
          className="text-blue-600 font-semibold relative top-3.5 bg-white m-0 ml-3 px-0 py-1  w-fit"
        >
          {label + " :"}
        </label>
        <textarea
          typeof={type}
          name="desc"
          onChange={handleChange}
          value={textarea}
          placeholder="write the description here....."
          className="px-3 py-3 border text-blue-600 border-blue-600 bg-white rounded-md outline-none w-80 h-40"
          id="desc"
        ></textarea>
      </div>
      <div className="mt-2 flex justify-end">
        <SubmitButton label="Submit" />
      </div>
    </section>
  );
}
 */

import React, { useState } from "react";
import { Exclamation } from "../../icons/Exclamation";

export type TextAreaProps = {
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
  onchange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};

export function TextArea(props: TextAreaProps) {
  const {
    label,
    value,
    placeholder = "Your message wite here......................",
    error,
    readOnly = false,
    required = true,
    disabled = false,
    disableInfo = "This field in unfortunately disabled",
    labelDescription = "Please enter your " + label,
    children,
    onchange,
    onBlur,
  } = props;

  const [borderBottom, setBorderBottom] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onchange?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event) {
      setBorderBottom(false);
      onBlur?.(event);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event) {
      setBorderBottom(true);
    }
  };

  return (
    <div className="w-full h-full box-border m-0 p-0">
      <div className="">
        <div className="flex gap-x-1 text-sm font-medium text-gray-700 my-2">
          <label htmlFor="Email">{label}</label>
          {required && (
            <abbr title="Email is Required" className={``}>
              *
            </abbr>
          )}
        </div>
        <div className="relative border w-full h-20 flex  rounded border-gray-200">
          <textarea
            name="message"
            id="message"
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="w-full outline-none p-3 h-full resize-none placeholder:text-sm"
          ></textarea>

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
