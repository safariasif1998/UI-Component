import { useState } from "react";
import { CheckBoxIcon } from "../../../icons/CheckBoxIcon";
import { CloseIcon } from "../../../icons/CloseIcon";
export type CheckboxSwitcherProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  className?: string;
};
export function CheckboxSwitcher(props: CheckboxSwitcherProps) {
  const { checked, onChange, onIcon, offIcon, className = "" } = props;
  console.log("checked", checked);

  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${className}`}
      role="switch"
      aria-checked={checked}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <div
        className={`w-12 h-6 rounded-full transition-colors duration-300 ${
          checked ? "bg-red-500" : "bg-gray-200"
        }`}
      />

      <div
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          w-8 h-8 bg-gray-300 rounded-full shadow
          flex items-center justify-center
          transition-transform duration-300 ease-out will-change-transform
          ${checked ? "translate-x-5 scale-105" : ""}
        `}
      >
        <span
          className={`transition-all duration-200 ease-out ${checked ? "opacity-100 scale-100" : "opacity-70 scale-90"}`}
        >
          {checked ? onIcon : offIcon}
        </span>
      </div>
    </label>
  );
}
