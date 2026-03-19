import { useState } from "react";
import { CheckBoxIcon } from "../../../icons/CheckBoxIcon";
import { CloseIcon } from "../../../icons/CloseIcon";
export type CheckboxSwitcherProps = {
  className?: string;
  value?: boolean;
};
export function CheckboxSwitcher(props: CheckboxSwitcherProps) {
  const { value } = props;
  const [checked, setChecked] = useState(value || false);
  console.log("checked", checked);

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-10 h-4 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="sr-only"
        />

        <div
          className={`
            w-full h-full rounded-full transition-colors duration-300
            ${checked ? "bg-gray-400" : "bg-gray-200"}
          `}
        />

        <div
          className={`
            pointer-events-none
            absolute top-1/2 left-0 -translate-y-1/2
            w-5 h-5 bg-sky-600 rounded-full shadow
            flex items-center justify-center
            transition-transform duration-300
            ${checked ? "translate-x-5" : ""}
          `}
        >
          {checked ? (
            <CheckBoxIcon className="w-3 h-3 text-white" />
          ) : (
            <CloseIcon className="w-3 h-3 text-yellow-400" />
          )}
        </div>
      </label>
    </div>
  );
}
