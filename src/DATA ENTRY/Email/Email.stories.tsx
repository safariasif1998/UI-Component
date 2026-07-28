import type { Meta, StoryFn } from "@storybook/react";
import { Email } from "./Email";
import { useReducer, type ChangeEvent } from "react";
import type { Reducer } from "react";

const meta = {
  component: Email,
  title: "DATA ENTRY/Email/Email",
} as Meta<typeof Email>;

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

const Template: StoryFn<typeof Email> = (args) => {
  const [state, dispatch] = useReducer(reducer, { value: args.value });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.value;
      dispatch({ type: "changeValue", payload: { value: value } });
    }
  };

  return (
    <div className={"w-full h-full flex"}>
      <Email {...args} value={state.value} onchange={handleChange} />
    </div>
  );
};

export const EmailStory = Template.bind({});

EmailStory.storyName = "Email";

EmailStory.args = {
  value: "",
  type: "email",
  placeholder: "safari@me.org",
  error: "",
  readOnly: false,
  required: false,
  disabled: false,
};
