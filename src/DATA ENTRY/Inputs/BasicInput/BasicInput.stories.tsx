import type { Meta, StoryFn } from "@storybook/react";

import { BasicInput } from "./BasicInput";
import React, { useReducer, useState } from "react";
import type { Reducer } from "react";
import { PlusIcon } from "../../../icons/PlusIcon";

const meta = {
  component: BasicInput,
  title: "Data Entry/Inputs/BasicInput/BasicInput",
} as Meta<typeof BasicInput>;

export default meta;

type State = {
  value: string | undefined;
};

type Action = {
  type: "changeValue";
  payload: {
    value: string;
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

const Template: StoryFn<typeof BasicInput> = (args) => {
  const [state, dispatch] = useReducer(reducer, {
    value: args.value,
  });
  const [error, setError] = useState(args.error ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.value;
      dispatch({ type: "changeValue", payload: { value: value } });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(event.target.value.length);
    console.log(typeof event.target.value);

    if (args.required && event.target.value.length <= 0) {
      setError("This Field is required and you must filed it out.");
    }
  };

  const addItem = () => {
    alert(state.value);
  };
  return (
    <div className={"w-full h-full flex"}>
      <BasicInput
        {...args}
        value={state.value}
        error={error}
        onchange={handleChange}
        onBlur={handleBlur}
      >
        <div className="flex items-center px-1.5 border-l border-gray-200">
          <button onClick={addItem}>
            <PlusIcon className="cursor-pointer text-sm w-5" />
          </button>
        </div>
      </BasicInput>
    </div>
  );
};

export const BasicInputStory = Template.bind({});

BasicInputStory.storyName = "BasicInput";

BasicInputStory.args = {
  value: "",
  label: "Basic Input",
  type: "text",
  placeholder: "basic input",
  error: "",
  readOnly: false,
  required: true,
  disabled: false,
  disableInfo: `This field is disabled. You cannot edit this field.`,
  labelDescription: "A simple field for entering user input.",
};
