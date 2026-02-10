import React, { useState } from "react";
import { ClassNames } from "storybook/theming";

export type UserNameProps = {
  label: string;
  value: string;
  type: string;
  style?: string;
};

function UserName(props: UserNameProps) {
  const { label, value, type, style } = props;
  const [inputText, setInputText] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  return (
    <div
      className={`flex flex-col static ${style ? style : "w-56 bg-white"}`}
    >
      <label
        htmlFor="input"
        className="font-semibold relative top-3.5 bg-[#111827FF] z  m-0 ml-3 px-0 py-1  w-fit"
      >
        {label}
      </label>
      <input
        type={type}
        value={inputText}
        onChange={handleChange}
        className="px-3 py-2.5 border  text-[#F3F4F6FF]  bg-[#111827FF] rounded-md  outline-none "
        id="input"
        placeholder="write here..."
      />
    </div>
  );
}

export default UserName;
