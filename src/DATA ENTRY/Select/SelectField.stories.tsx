import type React from "react";
import SelectField from "./SelectField";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof SelectField> = {
  title: "DATA ENTRY/Select/Select",
  component: SelectField,
};

export default meta;

const Template: StoryFn<typeof SelectField> = (args) => {
  const [value, setValue] = useState(args.options?.[0]?.value ?? "");
  const [error, setError] = useState(args.error ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) {
      setValue(value);
      setError("");
    } else {
      setValue("");
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    if (args.required && !event.target.value) {
      setError("This Field is required and you must filed it out.");
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <SelectField
        {...args}
        error={error}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
      />
    </div>
  );
};

export const SelectStory = Template.bind({});
SelectStory.storyName = "Select";
SelectStory.args = {
  value: "",
  label: "Select",
  error: "",
  disable: false,
  required: false,
  description:
    "This is a select box and it gives you opportunity to select one item.",
  options: [
    {
      id: 0,
      value: "",
      text: "---",
    },
    { id: 1, value: "option 1", text: "option one" },
    { id: 2, value: "option 2", text: "option two" },
    { id: 3, value: "option 3", text: "option three" },
    { id: 4, value: "option 4", text: "option four" },
    { id: 5, value: "option 5", text: "option five" },
  ],
};
