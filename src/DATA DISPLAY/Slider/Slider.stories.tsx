import type { Meta, StoryFn } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title:"DATA DISPLAY/Slider/Slider"
};

export default meta;

const Template: StoryFn<typeof Slider> = (args) => {
  return <Slider {...args}/>;
};

export const SliderStory = Template.bind({});
SliderStory.storyName = "Slider";
SliderStory.args = {};
