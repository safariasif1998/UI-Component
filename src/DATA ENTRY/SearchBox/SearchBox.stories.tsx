import { SearchBox } from "./SearchBox";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof SearchBox> = {
  title: "DATA ENTRY/SearchBox/SearchBox",
  component: SearchBox,
  argTypes: { handleClean: { action: "cleaned the text" } },
};

export default meta;

const Template: StoryFn<typeof SearchBox> = (args) => {
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <SearchBox {...args} />
    </div>
  );
};

export const SearchBoxStory = Template.bind({});
SearchBoxStory.storyName = "SearchBox";
SearchBoxStory.args = {};
