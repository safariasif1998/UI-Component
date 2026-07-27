import type { Meta, StoryFn } from "@storybook/react";
import { LoginPage } from "./LoginPage";

const meta = {
  component: LoginPage,
  title: "DATA ENTRY/LoginPage",
} as Meta<typeof LoginPage>;

export default meta;

const Template: StoryFn<typeof LoginPage> = (args) => {
  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <div className="flex flex-col">
        <LoginPage {...args} />
      </div>
    </div>
  );
};

export const LoginPageStory = Template.bind({});

LoginPageStory.storyName = "LoginPage";

LoginPageStory.args = {};
