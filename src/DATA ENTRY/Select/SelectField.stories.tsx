import SelectField from "./SelectField";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof SelectField> = {
  title: "DATA ENTRY/Select/Select",
  component: SelectField,
};

export default meta;

const Template: StoryFn<typeof SelectField> = (args) => {
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <SelectField {...args} />
    </div>
  );
};

export const SelectStory = Template.bind({});
SelectStory.storyName = "SelectField";
SelectStory.args = {
  label: "some thin",
};
