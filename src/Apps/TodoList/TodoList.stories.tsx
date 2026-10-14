import type { Meta, StoryFn } from "@storybook/react";
import { tasks } from "./tasks";
import { colors } from "./colors";

import { TodoList } from "./TodoList";

const meta = {
  component: TodoList,
  title: "Application / TodoList / TodoList",
} as Meta<typeof TodoList>;

export default meta;

const Template: StoryFn<typeof TodoList> = (args) => {
  return (
    <div className={"w-full h-full"}>
      <TodoList {...args} />
    </div>
  );
};

export const TodoListStory = Template.bind({});

TodoListStory.storyName = "TodoList";

TodoListStory.args = {
  tasks: tasks,
  colors: colors,
};
