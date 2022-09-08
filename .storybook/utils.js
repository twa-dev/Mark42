import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const mdxMetaParams = {
  viewMode: "docs",
  previewTabs: { canvas: { hidden: true } },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: "desktop",
  },
};
