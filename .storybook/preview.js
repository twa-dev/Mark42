import { AppearanceProvider } from "../src";
import { useEffect, useState } from "react";
import { tgThemeParamsMock } from "./tgThemeParamsMock";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { globalStyles } from "../src/globalStyles";

document.body.classList.add(globalStyles);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Introduction", "UI", "Service"],
    },
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: "alpha",
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: "mobile1",
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme from AppearanceProvider",
    defaultValue: "apple",
    toolbar: {
      icon: "tablet",
      items: ["apple", "material"],
      title: true,
      dynamicTitle: true,
    },
  },
  colorScheme: {
    name: "colorScheme",
    description: "Global colorScheme from AppearanceProvider",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      title: true,
      dynamicTitle: true,
    },
  },
};

export const argTypes = {
  theme: {
    control: "select",
    defaultValue: undefined,
    description: "Each component can override `theme` from AppearanceProvider",
    options: [undefined, "apple", "material"],
  },
  colorScheme: {
    control: "select",
    defaultValue: undefined,
    description:
      "Each component can override `colorScheme` from AppearanceProvider",
    options: [undefined, "light", "dark"],
  },
};

const withThemeProvider = (Story, context) => {
  const { theme, colorScheme } = context.globals;
  const [themeState, setThemeState] = useState(theme);

  useEffect(() => {
    window.Telegram.WebView.receiveEvent("theme_changed", {
      theme_params: tgThemeParamsMock[theme][colorScheme],
    });
    setThemeState(theme);
  }, [colorScheme, theme]);

  return (
    <AppearanceProvider theme={themeState}>
      <Story {...context} />
    </AppearanceProvider>
  );
};
export const decorators = [withThemeProvider];
