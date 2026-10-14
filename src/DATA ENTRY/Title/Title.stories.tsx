import type { Meta, StoryFn } from "@storybook/react";
import { Title } from "./Title";
import { useEffect, useReducer, useRef, type Reducer } from "react";

const meta = {
  component: Title,
  title: "DATA ENTRY/Title/Title",
} as Meta<typeof Title>;

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

const Template: StoryFn<typeof Title> = (args) => {
  const [state, dispatch] = useReducer(reducer, {
    value: args.value,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.value;
      dispatch({ type: "changeValue", payload: { value: value } });
    }
  };

  const handleUnfocus = () => {
    inputRef.current?.blur();
  };
  return (
    <div className={"w-full h-full flex"}>
      <Title
        {...args}
        inputRef={inputRef}
        value={state.value}
        onchange={handleChange}
        onFocus={handleUnfocus}
      />
    </div>
  );
};

export const TitleStory = Template.bind({});

TitleStory.storyName = "Title";

TitleStory.args = {
  value: "",
  type: "text",
  placeholder: "Unternehmen ersetzen KI durch AI",
  readOnly: false,
  required: true,
  disabled: false,
  disableInfo: `This field is disabled. You cannot edit this field.`,
  labelDescription: "A simple field for entering user Title.",
};
