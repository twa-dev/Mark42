import { Meta, StoryFn } from '@storybook/react';

import { SmallButton } from './SmallButton';

export default {
  title: 'SmallButton',
  component: SmallButton,
  parameters: {
    viewMode: 'story',
  },
} as Meta<typeof SmallButton>;

export const SmallButtonStory: StoryFn<typeof SmallButton> = (props) => {
  return (
    <div
      style={{
        padding: 40,
        background: props.appearance === 'overlay' ? '#000' : 'transparent',
      }}
    >
      <SmallButton {...props} />
    </div>
  );
};

SmallButtonStory.args = {
  children: 'Label',
};

SmallButtonStory.storyName = 'SmallButton';
