import type { Meta, StoryFn } from "@storybook/react";

import { QRCodeGenerator } from "./QRCodeGenerator";

const meta = {
  component: QRCodeGenerator,
  title: "Application /QRCodeGenerator/QRCodeGenerator",
} as Meta<typeof QRCodeGenerator>;

export default meta;

const Template: StoryFn<typeof QRCodeGenerator> = (args) => {
  return (
    <div className={"w-full h-full flex"}>
      <QRCodeGenerator {...args} />
    </div>
  );
};

export const QRCodeGeneratorStory = Template.bind({});

QRCodeGeneratorStory.storyName = "QRCodeGenerator";

QRCodeGeneratorStory.args = {};
