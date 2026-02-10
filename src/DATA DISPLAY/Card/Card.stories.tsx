import type { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';

const meta = {
  component: Card,
  title: 'DatA DISPLAY/Card/Card'
} as Meta<typeof Card>;

export default meta;

const CopyComponent = `<Card 
enter your mandatory props
as example/>`;

const Template: StoryFn<typeof Card> = (args) => {
  return(
    <div className={'w-full h-full flex items-center justify-center min-h-[300px]'}>
      <Card {...args} />
    </div>
  );
}

export const CardStory = Template.bind({});

CardStory.storyName = 'Card';

CardStory.args = {
  
};