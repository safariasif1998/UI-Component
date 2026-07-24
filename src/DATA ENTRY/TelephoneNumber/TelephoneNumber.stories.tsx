import type { Meta, StoryFn } from "@storybook/react";
import { TelephoneNumber } from "./TelephoneNumber";
import React, { useState } from "react";

const meta: Meta<typeof TelephoneNumber> = {
  title: "DATA ENTRY/ TelephoneNumber / TelephoneNumber",
  component: TelephoneNumber,
};

export default meta;

const template: StoryFn<typeof TelephoneNumber> = (args) => {
  const [value, setValue] = useState<number | string>(args.value ?? "");
  const [error, setError] = useState<string>(args.error ?? "");
  const [showTelePhoneIcon, setShowTelePhoneIcon] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    setValue(v);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      setShowTelePhoneIcon(true);
    }
    if (!/^\d+$/.test(value.trim()) && value.length) {
      setError("Please Enter a valid Number!");
    } else {
      setError("");
    }
  };

  return (
    <TelephoneNumber
      {...args}
      value={value}
      showTelePhoneIcon={showTelePhoneIcon}
      error={error}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export const telephoneNumber = template.bind({});
telephoneNumber.storyName = "TelephoneNumber";
telephoneNumber.args = {
  label: "Telephone Number",
  type: "tel",
  value: "",
  placeholder: "77 1276 9890",
  labelDescription:
    "You should just enter a valid telephone number. I will call you back.",
  error: "",
  required: false,
  readOnly: false,
  disabled: false,
};
