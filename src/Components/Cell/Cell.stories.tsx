import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cell as Component } from "./Cell";
import { InitialsAvatar } from "../InitialsAvatar";

export default {
  title: "UI/Cell",
  component: Component,
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
  },
} as ComponentMeta<typeof Component>;

export const Cell: ComponentStory<typeof Component> = () => {
  return (
    <>
      <Component
        description="@ArthurStam"
        before={<InitialsAvatar entityName="Artur Stambultsian" entityId={1} />}
      >
        Artur Stambultsian
      </Component>
      <Component
        description="@grshn"
        before={<InitialsAvatar entityName="Ilia Grishin" entityId={2} />}
      >
        Ilia Grishin
      </Component>
      <Component
        description="@DY"
        before={<InitialsAvatar entityName="Daria Yakovleva" entityId={3} />}
      >
        Daria Yakovleva
      </Component>
    </>
  );
};

Cell.args = {};

Cell.storyName = "Cell";
