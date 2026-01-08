import UserName from "./UserName";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof UserName> = {
  title: "DATA ENTRY/INPUTS/UserName",
  component: UserName,
};

export default meta;

const Template: StoryFn<typeof UserName> = (args) => {
  return (
    <div className="flex justify-center  w-full h-full">
      <UserName {...args} />
    </div>
  );
};

export const UserNameStory = Template.bind({});
UserNameStory.storyName = "UserName";
UserNameStory.args = {
  label: "Username",
  value: "",
  type: "text",
};
