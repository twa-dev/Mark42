import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InitialsAvatar as Component } from "./InitialsAvatar";

export default {
  title: "Components/InitialsAvatar",
  component: Component,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

export const InitialsAvatar: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />;
};

InitialsAvatar.args = {
  userName: "Artur Stambultsian",
  userId: 1,
  size: 200,
};

InitialsAvatar.storyName = "InitialsAvatar";
