import { Button } from "./Button";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Buttons",
  component: Button,
  argTypes: { handleClick: { action: "the Button clicked" } },
};
export default meta;

const Template: StoryFn<typeof Button> = (args) => {
  const handleClick = () => {
    args.handleClick();
    console.log("clicked");
  };
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <Button {...args} handleClick={handleClick} />
    </div>
  );
};

export const ButtonStory = Template.bind({});
ButtonStory.storyName = "Button";
ButtonStory.args = {
  label: "simple Button",
};
