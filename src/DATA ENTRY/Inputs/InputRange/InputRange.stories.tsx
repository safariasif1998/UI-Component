import type { Meta, StoryFn } from "@storybook/react";
import React, { useReducer, useState, type Reducer } from "react";
import { InputRange } from "./InputRange";

const meta = {
  component: InputRange,
  title: "DATA ENTRY/Inputs/InputRange/InputRange",
} as Meta<typeof InputRange>;

export default meta;

type State = {
  value: number | undefined;
};

type Action = {
  type: "changeValue";
  payload: {
    value: number;
  };
};

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case "changeValue":
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};

const Template: StoryFn<typeof InputRange> = (args) => {
  const [state, dispatch] = useReducer(reducer, {
    value: args.value,
  });
  const [error, setError] = useState(args.error ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.value;
      dispatch({ type: "changeValue", payload: { value: Number(value) } });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(event.target.value.length);
    console.log(typeof event.target.value);

    if (args.required && event.target.value.length <= 0) {
      setError("This Field is required and you must filed it out.");
    }
  };

  return (
    <div className={"w-full h-full flex"}>
      <InputRange
        {...args}
        value={state.value}
        error={error}
        onchange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export const InputRangeStory = Template.bind({});

InputRangeStory.storyName = "InputRange";

InputRangeStory.args = {
  value: 1.4,
  label: "Range",
  type: "range",
  error: "",
  readOnly: false,
  required: true,
  disabled: false,
  disableInfo: "This field is disabled and cannot be changed.",
  labelDescription:
    "Use the slider to select a value within the available range.",
  min: 1,
  max: 3,
  step: 0.1,
};
