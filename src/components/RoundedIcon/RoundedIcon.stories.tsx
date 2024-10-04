import { Meta, StoryFn } from "@storybook/react";

import { RoundedIcon } from "./RoundedIcon";

import { ReactComponent as BuySVG } from "images/buy.svg";

export default {
  title: "RoundedIcon",
  component: RoundedIcon,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof RoundedIcon>;

export const RoundedIconStory: StoryFn<typeof RoundedIcon> = (props) => {
  return (
    <RoundedIcon {...props}>
      <BuySVG />
    </RoundedIcon>
  );
};

RoundedIconStory.args = {
  size: 40,
  iconColor: "#fff",
  backgroundColor: "button",
};

RoundedIconStory.storyName = "RoundedIcon";
