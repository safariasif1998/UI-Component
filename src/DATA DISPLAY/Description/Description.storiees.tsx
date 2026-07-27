import type { StoryFn, Meta } from "@storybook/react";
import { Description } from "./Description";

const meta: Meta<typeof Description> = {
  component: Description,
  title: "DATA DISPLAY / Description / Description",
};

export default meta;

const template: StoryFn<typeof Description> = (args) => {
  return (
    <div>
      <Description {...args} />
    </div>
  );
};

const description = template.bind({});
description.storyName = "Description";
description.args = {
  text: "",
};
