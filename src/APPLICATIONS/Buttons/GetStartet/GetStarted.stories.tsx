import { GetStarted } from "./GetStarted";
import type { Meta, StoryFn } from "@storybook/react";

const meta = {
  component: GetStarted,
  title: "Components / Buttons / Get Started/GetStarted",
} as Meta<typeof GetStarted>;

export default meta;

const Template: StoryFn<typeof GetStarted> = (args) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <GetStarted {...args} />
    </div>
  );
};

export const GetStartedProps = Template.bind({});
GetStartedProps.storyName = "Get Started";
GetStartedProps.args = {
  title: "Get Started",
};
