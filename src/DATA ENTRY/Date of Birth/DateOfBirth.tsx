import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { Exclamation } from "../../icons/Exclamation";

export type DateOfBirthProps = {
  value?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  description?: string;
  disableInfo?: string;
  error?: string;
};

export function DateOfBirth(props: DateOfBirthProps) {
  const {
    label,
    value,
    required,
    disabled,
    readOnly,
    description,
    error,
    disableInfo,
  } = props;
  const [year, setYear] = useState<Date | null>();
  const [month, setMonth] = useState<Date | null>();
  const [day, setDay] = useState<Date | null>();
  const [focusedField, setFocusedField] = useState<
    "day" | "month" | "year" | null
  >(null);

  return (
    <div className="w-full">
      {label && (
        <div className="flex gap-x-1">
          <label htmlFor={label}>{label}</label>
          {required && <abbr>*</abbr>}
        </div>
      )}
      <div className="w-full flex flex-row gap-x-3">
        <div className="relative date-picker-wrapper border border-gray-200 rounded">
          <DatePicker
            placeholderText="Day"
            selected={day}
            onChange={setDay}
            onFocus={() => setFocusedField("day")}
            onBlur={() => setFocusedField(null)}
            dateFormat="dd"
            showPopperArrow={false}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            className={`outline-none py-2 text-center cursor-pointer`}
            calendarClassName="custom-calendar day-only-calendar dob-calendar day-calendar"
          />
          <span
            className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 origin-center transition-transform duration-300 ease-out`}
            style={{
              height: "4px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottom:
                focusedField === "day"
                  ? "2px solid #0d1b29"
                  : "2px solid #d1d1d1",
              transform: focusedField === "day" ? "scaleX(1)" : "scaleX(0)",
            }}
          ></span>
        </div>

        <div className="relative date-picker-wrapper border border-gray-200 rounded">
          <DatePicker
            placeholderText="Month"
            selected={month}
            onChange={setMonth}
            onFocus={() => setFocusedField("month")}
            onBlur={() => setFocusedField(null)}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            showMonthYearPicker
            dateFormat="MMMM"
            className="w-full outline-none py-2 text-center cursor-pointer"
            calendarClassName="month-only-calendar dob-calendar month-calendar"
          />
          <span
            className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 origin-center transition-transform duration-300 ease-out`}
            style={{
              height: "4px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottom:
                focusedField === "month"
                  ? "2px solid #0d1b29"
                  : "2px solid #d1d1d1",
              transform: focusedField === "month" ? "scaleX(1)" : "scaleX(0)",
            }}
          ></span>
        </div>

        <div className="relative date-picker-wrapper border border-gray-200 rounded">
          <DatePicker
            placeholderText="Year"
            selected={year}
            onChange={setYear}
            onFocus={() => setFocusedField("year")}
            onBlur={() => setFocusedField(null)}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            showYearPicker
            dateFormat="yyyy"
            yearItemNumber={9}
            className="outline-none py-2 text-center cursor-pointer"
            calendarClassName="custom-calendar dob-calendar year-calendar"
          />
          <span
            className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 origin-center transition-transform duration-300 ease-out`}
            style={{
              height: "4px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottom:
                focusedField === "year"
                  ? "2px solid #0d1b29"
                  : "2px solid #d1d1d1",
              transform: focusedField === "year" ? "scaleX(1)" : "scaleX(0)",
            }}
          ></span>
        </div>
      </div>

      {disabled && <p className="text-gray-500 text-xs">{disableInfo}</p>}
      <div>
        <span
          className={`block text-xs my-1 pl-0.5 text-gray-600 select-none transition-all duration-500 ease-in-out`}
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
