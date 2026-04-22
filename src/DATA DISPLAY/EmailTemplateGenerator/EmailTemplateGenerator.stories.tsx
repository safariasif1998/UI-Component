import type { Meta, StoryFn } from "@storybook/react";
import { EmailTemplateGenerator } from "./EmailTemplateGenerator";

const meta = {
  title: "DATA DISPLAY /EmailTemplateGenerator/EmailTemplateGenerator ",
  component: EmailTemplateGenerator,
} as Meta<typeof EmailTemplateGenerator>;

export default meta;

const Template: StoryFn<typeof EmailTemplateGenerator> = (args) => {
  return (
    <div>
      <EmailTemplateGenerator {...args} />
    </div>
  );
};

export const EmailTemplateGeneratorStory = Template.bind({});
EmailTemplateGeneratorStory.storyName = "EmailTemplateGenerator";
EmailTemplateGeneratorStory.args = {
  value: "",
};
