import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { AppleTextField } from './AppleTextField';

export default {
  title: 'TextField/AppleTextField',
  component: AppleTextField,
  parameters: {
    viewMode: 'story',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'search', 'password'],
    },
    multiline: {
      control: 'boolean',
      if: { arg: 'type', eq: 'text' },
    },
  },
} as Meta<typeof AppleTextField>;

export const AppleTextFieldStory: StoryFn<typeof AppleTextField> = (props) => {
  const [stateValue, setStateValue] = useState(props.value);
  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <AppleTextField
        {...props}
        onChange={(value) => setStateValue(value)}
        onClear={() => {
          setStateValue('');
        }}
        value={stateValue}
      />
    </div>
  );
};

AppleTextFieldStory.args = {
  label: 'Label',
  type: 'text',
  value: '',
  multiline: false,
};

AppleTextFieldStory.storyName = 'AppleTextField';
