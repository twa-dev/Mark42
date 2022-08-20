import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
  theme,
  panelPosition: "right",
  toolbar: {
    zoom: { hidden: true },
  },
});
