import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { MaterialTextField } from "./MaterialTextField";

export default {
  title: "TextField/MaterialTextField",
  component: MaterialTextField,
  parameters: {
    viewMode: "story",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outlined", "lined"],
    },
    hint: {
      description: "Hint for lined input",
      control: "text",
      if: { arg: "variant", eq: "lined" },
    },
    multiline: {
      control: "boolean",
      if: { arg: "type", eq: "text" },
    },
    error: {
      control: "boolean",
    },
    type: {
      control: "inline-radio",
      options: ["text", "search", "password"],
    },
  },
} as Meta<typeof MaterialTextField>;

export const MaterialTextFieldStory: StoryFn<typeof MaterialTextField> = (
  props,
) => {
  const [stateValue, setStateValue] = useState(props.value);
  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <MaterialTextField
        {...props}
        onChange={(value) => setStateValue(value)}
        value={stateValue}
      />
    </div>
  );
};

MaterialTextFieldStory.args = {
  label: "Label",
  variant: "outlined",
  error: false,
  value: "",
  multiline: false,
  type: "text",
};

MaterialTextFieldStory.storyName = "MaterialTextField";
