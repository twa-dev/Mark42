import { Meta, StoryFn } from '@storybook/react';

import InitialsAvatar from './InitialsAvatar';

export default {
  title: 'InitialsAvatar',
  component: InitialsAvatar,
  parameters: {
    viewMode: 'story',
  },
} as Meta<typeof InitialsAvatar>;

export const InitialsAvatarStory: StoryFn<typeof InitialsAvatar> = (props) => {
  return <InitialsAvatar {...props} />;
};

InitialsAvatarStory.args = {
  name: 'Alicia Toreeaux',
  userId: 1234,
};

InitialsAvatarStory.storyName = 'InitialsAvatar';
