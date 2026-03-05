import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof CheckBox> = {
  title: "components/CheckBoxes",
  component: CheckBox,
  argTypes: { handleCheck: { action: "checked" } },
};

export default meta;

const Template: StoryFn<typeof CheckBox> = (args) => {
  const [checkBoxStateValue, setCheckBoxStateValue] = useState(args.value);
  useEffect(() => {
    setCheckBoxStateValue(args.value);
  }, [args.value]);

  const handleCheck = () => {
    args.handleCheck();
    setCheckBoxStateValue(!checkBoxStateValue);
    console.log(checkBoxStateValue);
  };
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <CheckBox
        {...args}
        handleCheck={handleCheck}
        checkBoxStateValue={checkBoxStateValue}
      />
    </div>
  );
};

export const CheckBoxStory = Template.bind({});
CheckBoxStory.storyName = "CheckBox";
CheckBoxStory.args = {
  id: 1,
  label: "item one",
  value: true,
};
