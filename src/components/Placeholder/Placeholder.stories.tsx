import { Meta, StoryFn } from '@storybook/react';

import { Placeholder } from './Placeholder';

import { ReactComponent as FolderSVG } from 'images/folder.svg';

export default {
  title: 'Placeholder',
  component: Placeholder,
  parameters: {
    viewMode: 'story',
  },
} as Meta<typeof Placeholder>;

export const Story: StoryFn<typeof Placeholder> = (props) => {
  return <Placeholder {...props} />;
};

Story.args = {
  media: <FolderSVG />,
  title: 'Beautiful title',
  text: 'Amazing text',
  description: 'Heartbreaking description',
  bottom: 'Captivating bottom content',
};

Story.storyName = 'Placeholder';
