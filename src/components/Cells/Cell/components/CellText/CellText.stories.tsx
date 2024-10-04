import { Meta, StoryFn } from "@storybook/react";

import SectionDescription from "../../../../SectionDescription/SectionDescription";

import { CellText } from "./CellText";

export default {
  title: "Cell/Cell.Text",
  component: CellText,
  parameters: {
    viewMode: "story",
  },
} as Meta<typeof CellText>;

export const CellTextStory: StoryFn<typeof CellText> = ({ ...props }) => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText {...props} />
    </div>
  );
};

CellTextStory.args = {
  title: "Label",
};

CellTextStory.storyName = "Simpliest";

export const Description: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText title="Label" description="Description" />
    </div>
  );
};

export const Doubledecker: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <SectionDescription style={{ marginBottom: 10 }}>
        By default heights of CellText with title and CellText with title and
        description are different
      </SectionDescription>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <CellText
          title="Label"
          style={{ background: "var(--quaternary-fill-background)" }}
        />
        <CellText
          title="Label"
          description="Description"
          style={{ background: "var(--quaternary-fill-background)" }}
        />
      </div>
      <SectionDescription style={{ marginBottom: 10 }}>
        Sometimes, we need to draw CellText with only title but with height of
        Cell with description. That's what doubledecker prop does
      </SectionDescription>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: 8,
        }}
      >
        <CellText
          title="Label"
          doubledecker
          style={{ background: "var(--quaternary-fill-background)" }}
        />
        <CellText
          title="Label"
          description="Description"
          style={{ background: "var(--quaternary-fill-background)" }}
        />
      </div>
    </div>
  );
};

export const Skeleton: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText
        title
        description
        skeleton
        skeletonTitleWidth={70}
        skeletonDescriptionWidth={100}
      />
    </div>
  );
};

export const Badge: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText
        title="Label"
        description="Description"
        badge="new"
        badgeAppearance="accent"
      />
    </div>
  );
};

export const TextOverflow: StoryFn<typeof CellText> = () => {
  return (
    <div style={{ padding: 20 }}>
      <SectionDescription style={{ marginBottom: 10 }}>
        Default text overflows
      </SectionDescription>
      <CellText
        style={{
          marginBottom: 20,
          background: "var(--quaternary-fill-background)",
        }}
        title="This is very long very very very very very long title"
        description="This is very long very very very very very long description"
      />
      <SectionDescription style={{ marginBottom: 10 }}>
        Making title and description single line
      </SectionDescription>
      <CellText
        style={{
          marginBottom: 20,
          background: "var(--quaternary-fill-background)",
        }}
        title="This is very long very very very very very long title"
        multilineTitle={false}
        description="This is very long very very very very very long description"
        multilineDescription={false}
      />
      <SectionDescription style={{ marginBottom: 10 }}>
        Making title and description multiline line
      </SectionDescription>
      <CellText
        style={{
          marginBottom: 20,
          background: "var(--quaternary-fill-background)",
        }}
        title="This is very long very very very very very long title"
        multilineTitle
        description="This is very long very very very very very long description"
        multilineDescription
      />
    </div>
  );
};

export const Inverted: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText title="Label" description="Description" inverted />
    </div>
  );
};

export const DifferentAppearance: StoryFn<typeof CellText> = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <CellText
        title="Label"
        titleWeight="medium"
        description="Description"
        descriptionAppearance="accentText"
      />
    </div>
  );
};
