import type { Meta, StoryFn } from "@storybook/react";
import { TelephoneNumber } from "./TelephoneNumber";
import React from "react";

const meta: Meta<typeof TelephoneNumber> = {
  title: "DATA ENTRY/ TelephoneNumber / TelephoneNumber",
  component: TelephoneNumber,
};

export default meta;

const template: StoryFn<typeof TelephoneNumber> = (args) => {
  return <TelephoneNumber {...args} />;
};

export const telephoneNumber = template.bind({});
telephoneNumber.storyName = "TelephoneNumber";
telephoneNumber.args = {
  label: "Telephone Number",
  type: "tel",
  value: null,
  placeholder: "077 1276 9890",
  labelDescription:
    "You should just enter a valid telephone number. I will call you back.",
  error: "",
  required: false,
  readOnly: false,
  disabled: false,
};
