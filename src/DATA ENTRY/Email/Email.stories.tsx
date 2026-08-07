import type { Meta, StoryFn } from "@storybook/react";
import { Email } from "./Email";
import React, { useReducer, useState, type ChangeEvent } from "react";
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
  const [state, dispatch] = useReducer(reducer, {
    value: args.value,
  });
  const [error, setError] = useState(args.error ?? "");
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [isVaildEmail, setIsValidEmail] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.value;
      dispatch({ type: "changeValue", payload: { value: value } });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event) {
      setShowEmailIcon(true);
    }
    console.log(event.target.value.length);
    console.log(typeof event.target.value);

    if (args.required && event.target.value.length <= 0) {
      setError("This Field is required and you must filed it out.");
    }
    const valid = EmailValidation(event.target.value);
    if (!valid && event.target.value.length > 0) {
      setError("Please Enter a valid Email!");
    }
  };

  function EmailValidation(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;
    const valid = emailRegex.test(value);
    return valid;
  }

  return (
    <div className={"w-full h-full flex"}>
      <Email
        {...args}
        value={state.value}
        error={error}
        showEmailICon={showEmailIcon}
        isValidEmail={isVaildEmail}
        onchange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export const EmailStory = Template.bind({});

EmailStory.storyName = "Email";

EmailStory.args = {
  value: "",
  label: "Email Component",
  type: "email",
  placeholder: "safari@me.org",
  error: "",
  readOnly: false,
  required: true,
  disabled: false,
  multiple: true,
  disableInfo: `This field is disabled. You cannot edit this field.`,
  labelDescription:
    "Please enter a valid email address. This email will be used for communication and account-related notifications.",
};
