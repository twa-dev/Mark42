import { Meta, StoryFn } from "@storybook/react";

import { ActionBanner } from "./ActionBanner";

export default {
  title: "ActionBanner",
  component: ActionBanner,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof ActionBanner>;

export const ActionBannerStory: StoryFn<typeof ActionBanner> = (props) => {
  return <ActionBanner {...props} />;
};

ActionBannerStory.args = {
  title: "Get verified",
  text: "Quick verification will unlock all Wallet features and protect your account.",
  buttonText: "Continue",
  onButtonClick: () => {
    console.log("onButtonClick");
  },
};

ActionBannerStory.storyName = "ActionBanner";
