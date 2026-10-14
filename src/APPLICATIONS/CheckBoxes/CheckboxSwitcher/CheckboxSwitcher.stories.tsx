import { CheckboxSwitcher } from "./CheckboxSwitcher";

import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof CheckboxSwitcher> = {
  title: "components/CheckBoxes/CheckboxSwitcher/CheckboxSwitcher",
  component: CheckboxSwitcher,
};

export default meta;

const Template: StoryFn<typeof CheckboxSwitcher> = (args) => {
  return (
    <div className="w-full h-full  mt-4">
      <CheckboxSwitcher {...args} />
    </div>
  );
};

export const CheckboxSwitcherStory = Template.bind({});
CheckboxSwitcherStory.storyName = "CheckboxSwitcher";
CheckboxSwitcherStory.args = {};
