import type { Meta, StoryFn } from '@storybook/react';



import { Welcome } from './Welcome';

const meta = {
  component: Welcome,
  title: 'Application/Welcome'
} as Meta<typeof Welcome>;

export default meta;



const Template: StoryFn<typeof Welcome> = (args) => {
  return(
    <div className={'w-full h-full flex items-center justify-center min-h-[300px]'}>
      <Welcome {...args} />
    </div>
  );
}

export const WelcomeStory = Template.bind({});

WelcomeStory.storyName = 'Welcome';

WelcomeStory.args = {
  
};