import { Meta, StoryFn } from "@storybook/react";

import { RegularButton } from "../Button";

import DropdownList from "./DropdownList";

export default {
  title: "DropdownList",
  component: DropdownList,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof DropdownList>;

export const DropdownListStory: StoryFn<typeof DropdownList> = (props) => {
  return (
    <DropdownList {...props}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <RegularButton>Open dropdown</RegularButton>
      </div>
    </DropdownList>
  );
};

DropdownListStory.args = {
  placement: "bottom-end",
  options: [
    {
      before: "option 1",
      after: "1️⃣",
      onClick: () => {
        console.log("option 1 clicked");
      },
    },
    {
      before: "option 2",
      after: "2️⃣",
      onClick: () => {
        console.log("option 2 clicked");
      },
    },
  ],
};

DropdownListStory.storyName = "DropdownList";
