import { Meta, StoryFn } from "@storybook/react";

import { Cell } from "../Cells";

import Section from "./Section";

export default {
  title: "Section",
  component: Section,
  parameters: { viewMode: "story" },
} as Meta<typeof Section>;

export const Story: StoryFn<typeof Section> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "var(--tg-theme-secondary-bg-color)",
        height: "100vh",
      }}
    >
      <Section {...props}>
        <Cell.List>
          <Cell>
            <Cell.Text skeleton description inverted />
          </Cell>
          <Cell>
            <Cell.Text skeleton description inverted />
          </Cell>
        </Cell.List>
      </Section>
      <Section title="Second section to check out the separator prop">
        <Cell.List>
          <Cell>
            <Cell.Text skeleton description inverted />
          </Cell>
          <Cell>
            <Cell.Text skeleton description inverted />
          </Cell>
        </Cell.List>
      </Section>
    </div>
  );
};

Story.args = {
  title: "Choose Payment Method",
  description:
    "From now on, buyers must upload a receipt for sellers to confirm the payment.",
  separator: true,
};

Story.storyName = "Section";
