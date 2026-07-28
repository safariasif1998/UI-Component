import React, { type ChangeEvent } from "react";
import { EmailIcon } from "../../icons/EmailIcon";

export type EmailProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Email(props: EmailProps) {
  const {
    value,
    type = "email",
    placeholder,
    error,
    readOnly,
    required,
    disabled,
    onchange,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onchange?.(event);
  };

  return (
    <div className="w-full h-full box-border m-0 p-0">
      <div className="">
        <div className="flex gap-x-1">
          <label htmlFor="Email">Email</label>
          <abbr title="Email is Required">*</abbr>
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
            className="w-full outline-none px-2"
          />
          <div className="w-14  border-l border-gray-200 group">
            <a
              href={`mailto`}
              className={`group- w-full h-full flex items-center justify-center ${error ? "cursor-not-allowed" : "hover:bg-gray-200"}`}
            >
              <EmailIcon className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
