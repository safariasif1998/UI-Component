import SubmitButton from "./SubmitButton";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof SubmitButton> = {
  title: "components/Buttons/Submit Button/SubmitButton",
  component: SubmitButton,
};

export default meta;

const Template: StoryFn<typeof SubmitButton> = (args) => {
  return (
    <div className="flex justify-center">
      <SubmitButton {...args} />
    </div>
  );
};

export const SubmitButtonStroy = Template.bind({});
SubmitButtonStroy.storyName = "Submit Button";
SubmitButtonStroy.args = {
  label: "Submit",
};
