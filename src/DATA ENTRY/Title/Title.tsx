import type { Ref } from "react";

export type TitleProps = {
  value?: string | undefined;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  disableInfo?: string;
  showEmailICon?: boolean;
  isValidEmail?: boolean;
  labelDescription?: string;
  inputRef?: Ref<HTMLInputElement> | undefined;
  style?: React.CSSProperties;
  className?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};

export function Title(props: TitleProps) {
  const {
    value,
    type = "email",
    placeholder,
    readOnly,
    required,
    disabled,
    disableInfo,
    labelDescription,
    inputRef,
    style,
    className,
    onchange,
    onFocus,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchange?.(event);
  };

  return (
    <div className={`w-full box-border m-0 p-0 ${className}`}>
      <div className="">
        <div className={`relative w-full h-20 flex`}>
          <input
            ref={inputRef}
            value={value}
            type={type}
            name="Email"
            id="Email"
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            style={style}
            onChange={handleChange}
            onFocus={onFocus}
            className="w-full outline-none px-2 py-2 text-2xl  font-extrabold uppercase"
          />
        </div>
      </div>
      {disabled && <p className="text-gray-500 text-xs">{disableInfo}</p>}
      <div>
        <span
          className={`block text-xs my-1 pl-0.5 text-gray-600 select-none transition-all duration-500 ease-in-out`}
        >
          {labelDescription}
        </span>
      </div>
    </div>
  );
}
