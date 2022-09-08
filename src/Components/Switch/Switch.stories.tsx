import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch as Component } from "./Switch";

export default {
  title: "UI/Switch",
  component: Component,
  parameters: {
    layout: "centered",
    viewMode: "story",
  },
} as ComponentMeta<typeof Component>;

export const Switch: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />;
};

Switch.args = {};

Switch.storyName = "Switch";
