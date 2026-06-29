import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "DATA ENTRY / NumberInput / NumberInput",
  component: NumberInput,
};

export default meta;

const template: StoryFn<typeof NumberInput> = (args) => {
  const [value, setValue] = useState<number | string>(args.value ?? "");
  const [error, setError] = useState<string>(args.error ?? "");
  const [required, setRequired] = useState<boolean>(args.required ?? false);


  const min = args.min ?? 0;
  const max = args.max ?? 100;
  const step = args.step ?? 1;

  const validate = (nextValue: number | string) => {
    if (nextValue === "") {
      setError("");
      return;
    }

    const number = Number(nextValue);

    if (!Number.isNaN(number) && number < min) {
      setError(`Minimum value should be ${min}`);
    } else if (!Number.isNaN(number) && number > max) {
      setError(`Maximum value should be ${max}`);
    } else {
      setError("");
    }
  };

  const handleChange = (val: number | string) => {
    setValue(val);
    validate(val);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("Focus event:", event.type);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(value + "in Blur");
    if (required && !value && Number(value) < min) {
      setError("Please fill out this Field. It is required..");
    }
    console.log(event);
  };
  const handleIncrement = () => {
    const next = Number(value || 0) + step;
    setValue(next);
    validate(next);
  };

  const handleDecrement = () => {
    const next = Number(value || 0) - step;
    setValue(next);
    validate(next);
  };

  return (
    <div className="w-full h-full flex justify-center m-0 p-0 rounded">
      <NumberInput
        {...args}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        error={error}
        required={required}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </div>
  );
};

export const numberInput = template.bind({});
numberInput.storyName = "NumberInput";
numberInput.args = {
  label: "Number",
  type: "number",
  placeholder: "Please enter number",
  description: "Your number should be between ",
  value: "",
  min: 0,
  max: 100,
  step: 1,
  error: "",
  disabled: false,
  readOnly: false,
  required: true,
};
