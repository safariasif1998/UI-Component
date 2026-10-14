import type { Meta, StoryFn } from "@storybook/react";

import { Label } from "./Label";

const meta = {
  component: Label,
  title: "DATA Entry/Label/Label",
} as Meta<typeof Label>;

export default meta;

const Template: StoryFn<typeof Label> = (args) => {
  return (
    <div className={"w-full h-full"}>
      <Label {...args} />
    </div>
  );
};

export const LabelStory = Template.bind({});

LabelStory.storyName = "Label";

LabelStory.args = {
  label: "Label",
  required: true,
};
