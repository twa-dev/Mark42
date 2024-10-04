import { Meta, StoryFn } from "@storybook/react";

import InitialsAvatar from "../../InitialsAvatar/InitialsAvatar";
import { Switch } from "../../Switch/Switch";

import { Cell } from "./Cell";

// TODO: make useful doc
export default {
  title: "Cell",
  component: Cell,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof Cell>;

export const CellStory: StoryFn<typeof Cell> = ({ ...props }) => {
  return <Cell {...props} />;
};

CellStory.args = {
  start: (
    <Cell.Part type="avatar">
      <InitialsAvatar name="Artur Stambultsian" userId={1} />
    </Cell.Part>
  ),
  children: (
    <Cell.Text title="Artur Stambultsian" description="Last seen an hour ago" />
  ),
  end: (
    <Cell.Part type="switch">
      <Switch />
    </Cell.Part>
  ),
};

CellStory.storyName = "Simpliest";
