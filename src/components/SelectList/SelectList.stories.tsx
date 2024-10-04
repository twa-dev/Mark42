import { Meta, StoryFn } from "@storybook/react";

import { RegularButton } from "../Button";

import SelectList from "./SelectList";

export default {
  title: "SelectList",
  component: SelectList,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof SelectList>;

export const SelectListStory: StoryFn<typeof SelectList> = (props) => {
  return (
    <SelectList {...props}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <RegularButton>Open select</RegularButton>
      </div>
    </SelectList>
  );
};

SelectListStory.args = {
  placement: "bottom-end",
  onChange: (newValue) => {
    console.log("New value", newValue);
  },
  options: [
    {
      value: "1",
      label: "option 1",
    },
    {
      value: "2",
      label: "option 2",
    },
  ],
};

SelectListStory.storyName = "SelectList";
