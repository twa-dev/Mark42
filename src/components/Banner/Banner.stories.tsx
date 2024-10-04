import { Meta, StoryFn } from '@storybook/react';

import { Banner } from './Banner';

export default {
  title: 'Banner',
  component: Banner,
  parameters: { viewMode: 'story' },
} as Meta<typeof Banner>;

export const Story: StoryFn<typeof Banner> = (props) => {
  return (
    <div style={{ margin: '16px' }}>
      <Banner {...props} />
    </div>
  );
};

Story.args = {
  text: 'From now on, buyers must upload a receipt for sellers to confirm the payment.',
  icon: 'warningTriangle',
  iconAppearance: 'subtitle',
  appearance: 'default',
};

Story.storyName = 'Banner';
