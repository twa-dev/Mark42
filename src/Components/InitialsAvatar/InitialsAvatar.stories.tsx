import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InitialsAvatar as Component } from "./InitialsAvatar";

export default {
  title: "InitialsAvatar",
  component: Component,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

export const InitialsAvatar: ComponentStory<typeof Component> = ({
  userId,
  userName,
  size,
  theme,
}) => {
  return (
    <Component size={size} userId={userId} userName={userName} theme={theme} />
  );
};

InitialsAvatar.args = {
  userName: "Artur Stambultsian",
  userId: 1,
  size: 200,
  theme: "apple",
};
