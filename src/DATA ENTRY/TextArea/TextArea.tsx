import React, { useState } from "react";
import SubmitButton from "../../APPLICATION/Buttons/Submit Button/SubmitButton";

export type TextAreaProps = {
  label: string;
  type: string;
  value: string;
};

export function TextArea(props: TextAreaProps) {
  const { type, value, label } = props;
  const [textarea, setTextarea] = useState(value);
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(event.target.value);
  }
  return (
    <section >
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
