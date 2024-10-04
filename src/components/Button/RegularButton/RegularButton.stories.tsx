import { Meta, StoryFn } from "@storybook/react";

import { RegularButton } from "./RegularButton";

import { ReactComponent as SendIconSVG } from "images/send.svg";

export default {
  title: "RegularButton",
  component: RegularButton,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof RegularButton>;

export const RegularButtonStory: StoryFn<typeof RegularButton> = ({
  icon,
  ...props
}) => {
  const resolvedIcon = icon || <SendIconSVG />;

  return (
    <div
      style={{
        padding: 40,
        background: props.appearance === "overlay" ? "#000" : "transparent",
      }}
    >
      <RegularButton {...props} icon={resolvedIcon} />
    </div>
  );
};

RegularButtonStory.args = {
  children: "Label",
};

RegularButtonStory.storyName = "RegularButton";
