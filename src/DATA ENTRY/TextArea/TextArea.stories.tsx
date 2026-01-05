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
    <div className="w-full h-full flex justify-center mt-4">
      <TextArea />
    </div>
  );
};

export const TextAreaStory = Template.bind({});
TextAreaStory.storyName = "TextArea";
TextAreaStory.args = {};
