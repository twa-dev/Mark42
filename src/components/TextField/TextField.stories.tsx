import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    viewMode: 'story',
  },
  argTypes: {
    multiline: {
      control: 'boolean',
      if: { arg: 'type', eq: 'text' },
    },
    type: {
      control: 'inline-radio',
      options: ['text', 'search', 'password'],
    },
    material: {
      control: 'object',
    },
    apple: {
      control: 'object',
    },
  },
} as Meta<typeof TextField>;

export const TextFieldStory: StoryFn<typeof TextField> = (props) => {
  const [stateValue, setStateValue] = useState(props.value);
  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <TextField
        {...props}
        apple={{
          ...props.apple,
          onClear: () => setStateValue(''),
        }}
        onChange={(value) => setStateValue(value)}
        value={stateValue}
      />
    </div>
  );
};

TextFieldStory.args = {
  label: 'Label',
  value: '',
  multiline: false,
  type: 'text',
  apple: {
    onClear: () => console.log('clear'),
  },
  material: {
    variant: 'lined',
    error: false,
    hint: '',
  },
};

TextFieldStory.storyName = 'TextField';
