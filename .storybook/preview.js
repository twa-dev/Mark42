import { AppearanceProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
  return (
    <AppearanceProvider theme={theme} colorScheme={colorScheme}>
      <Story {...context} />
    </AppearanceProvider>
  );
};
export const decorators = [withThemeProvider];
