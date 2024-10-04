import { Meta, StoryFn } from "@storybook/react";

import { ProgressCircle } from "./ProgressCircle";

export default {
  title: "ProgressCircle",
  component: ProgressCircle,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof ProgressCircle>;

export const Story: StoryFn<typeof ProgressCircle> = (props) => {
  return <ProgressCircle {...props} />;
};

Story.args = {
  progress: 0.6,
  size: 200,
};

Story.storyName = "ProgressCircle";
