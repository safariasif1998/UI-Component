import Counter from "./Counter";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Counter> = {
  title: "DATA DISPLAY / Counter / Counter",
  component: Counter,
};

export default meta;

const Template: StoryFn<typeof Counter> = (args) => {
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <Counter {...args} />
    </div>
  );
};

export const CounterStory = Template.bind({});
CounterStory.storyName = "Counter";
CounterStory.args = {};
