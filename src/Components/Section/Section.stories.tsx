import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Section as Component } from "./Section";
import { Page } from "../Page";
import { Cell } from "../Cell";
import { Switch } from "../Switch";

export default {
  title: "UI/Section",
  component: Component,
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
  },
} as ComponentMeta<typeof Component>;

export const Section: ComponentStory<typeof Component> = (props) => {
  return (
    <Page mode="secondary">
      <Component {...props}>
        <Cell after={<Switch />} description="@Stambultsian">
          Twitter
        </Cell>
        <Cell after={<Switch />} description="@artursupertramp">
          Facebook
        </Cell>
        <Cell after={<Switch />} description="@ArthurStam">
          Telegram
        </Cell>
      </Component>
    </Page>
  );
};

Section.args = {
  header: "Public contacts",
  description:
    "Share your contacts with the community. It will help other members to reach you faster.",
};

Section.storyName = "Section";
