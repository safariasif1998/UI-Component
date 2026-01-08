import React, { useState } from "react";

export type UserNameProps = {
  label: string;
  value: string;
  type: string;
};

function UserName(props: UserNameProps) {
  const { label, value, type } = props;
  const [inputText, setInputText] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  return (
    <div className="flex flex-col w-fit static max-w-60 ">
      <label
        htmlFor="input"
        className="text-blue-600 font-semibold relative top-3.5 bg-white m-0 ml-3 px-0 py-1  w-fit"
      >
        {label + " :"}
      </label>
      <input
        type={type}
        value={inputText}
        onChange={handleChange}
        className="px-3 py-2.5 border text-blue-600 border-blue-600 bg-white rounded-md  outline-none "
        id="input"
        placeholder="write here..."
      />
    </div>
  );
}

export default UserName;
