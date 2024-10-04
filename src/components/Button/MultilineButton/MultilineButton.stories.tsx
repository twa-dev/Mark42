import { Meta, StoryFn } from "@storybook/react";

import { MultilineButton } from "./MultilineButton";

import { ReactComponent as SendIconSVG } from "images/send.svg";

export default {
  title: "MultilineButton",
  component: MultilineButton,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof MultilineButton>;

export const MultilineButtonStory: StoryFn<typeof MultilineButton> = ({
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
      <MultilineButton {...props} icon={resolvedIcon} />
    </div>
  );
};

MultilineButtonStory.args = {
  children: "Label",
};

MultilineButtonStory.storyName = "MultilineButton";
