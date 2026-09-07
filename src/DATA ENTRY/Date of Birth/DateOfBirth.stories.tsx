import type { Meta, StoryFn } from "@storybook/react";
import { DateOfBirth } from "./DateOfBirth";

const meta = {
  component: DateOfBirth,
  title: "DATA Entry/DateOfBirth/DateOfBirth",
} as Meta<typeof DateOfBirth>;

export default meta;

const Template: StoryFn<typeof DateOfBirth> = (args) => {
  return (
    <div className={"w-full h-full  justify-center min-h-[300px]"}>
      <DateOfBirth {...args} />
    </div>
  );
};

export const DateOfBirthStory = Template.bind({});

DateOfBirthStory.storyName = "DateOfBirth";

DateOfBirthStory.args = {
  value: "",
  label: "Date of Birth",
  required: false,
  disabled: false,
  readOnly: false,
  description:
    "Enter your date of birth by selecting the day, month, and year. Make sure the information is correct before continuing.",
  disableInfo: `This field is disabled. You cannot edit this field.`,
  error: "",
};
