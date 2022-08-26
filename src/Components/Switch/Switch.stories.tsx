import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch as Component } from "./Switch";

export default {
  title: "Components/Switch",
  component: Component,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

export const Switch: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />;
};

Switch.args = {};

Switch.storyName = "Switch";
