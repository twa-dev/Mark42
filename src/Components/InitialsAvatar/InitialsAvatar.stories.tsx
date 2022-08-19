import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InitialsAvatar as Component } from "./InitialsAvatar";

export default {
  title: "InitialsAvatar",
  component: Component,
} as ComponentMeta<typeof Component>;

export const InitialsAvatar: ComponentStory<typeof Component> = ({
  userId,
  userName,
  size,
}) => {
  return <Component size={size} userId={userId} userName={userName} />;
};

InitialsAvatar.args = {
  userName: "Artur Stambultsian",
  userId: 1,
  size: 40,
};
