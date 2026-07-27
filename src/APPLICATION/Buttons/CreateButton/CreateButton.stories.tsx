import { CreateButton } from "./CreateButton";
import type { Meta, StoryFn } from "@storybook/react";

const meta = {
  component: CreateButton,
  title: "Components / Buttons / Create Button/CreateButton",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof CreateButton>;

export default meta;

const Template: StoryFn<typeof CreateButton> = (args) => {
  const Created = () => {
    args.onClick?.();
    console.log("Create button clicked");
  };
  return (
    <div className="flex justify-center w-full h-full items-center mt-4">
      <CreateButton {...args} onClick={Created} />
    </div>
  );
};

export const CreateButtonStory = Template.bind({});
CreateButtonStory.storyName = "Create Button";
CreateButtonStory.args = {
  title: "Create",
};
