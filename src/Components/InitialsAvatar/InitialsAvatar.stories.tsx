import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InitialsAvatar as Component } from "./InitialsAvatar";

export default {
  title: "UI/InitialsAvatar",
  component: Component,
  parameters: {
    layout: "centered",
    viewMode: "story",
  },
} as ComponentMeta<typeof Component>;

export const InitialsAvatar: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />;
};

InitialsAvatar.args = {
  entityName: "Artur Stambultsian",
  entityId: 1,
  size: 200,
};

InitialsAvatar.storyName = "InitialsAvatar";
