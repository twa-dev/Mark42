import { Meta, StoryFn } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    viewMode: 'story',
  },
} as Meta<typeof Spinner>;

export const Story: StoryFn<typeof Spinner> = (props) => {
  return <Spinner color="var(--tg-theme-accent-text-color)" {...props} />;
};

Story.args = {};

Story.storyName = 'Spinner';
