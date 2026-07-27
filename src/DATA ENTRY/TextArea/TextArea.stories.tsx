import type { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "DATA ENTRY/TextArea/TextArea",
  component: TextArea,
  argTypes: {},
};

export default meta;

const Template: StoryFn<typeof TextArea> = (args) => {
  return (
    <div className="flex justify-center mt-4">
      <TextArea  {...args}/>
    </div>
  );
};

export const TextAreaStory = Template.bind({});
TextAreaStory.storyName = "TextArea";
TextAreaStory.args = {
  label: "Description",
  type: "textarea",
  value: "",
};
