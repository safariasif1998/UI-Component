import { SearchBox } from "./SearchBox";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof SearchBox> = {
  title: "DATA ENTRY/SearchBox/SearchBox",
  component: SearchBox,
};

export default meta;

const Template: StoryFn<typeof SearchBox> = (args) => {
  return (
    <div className="w-full h-full">
      <SearchBox {...args} />
    </div>
  );
};

export const SearchBoxStory = Template.bind({});
SearchBoxStory.storyName = "SearchBox";
SearchBoxStory.args = {};
