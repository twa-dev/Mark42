import { useState } from "react";
import { AppearanceProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [theme, setTheme] = useState("apple");

    return (
      <div>
        <div style={{ marginBottom: 10, fontFamily: "sans-serif" }}>
          <label>
            Theme:{" "}
            <select
              value={theme}
              onChange={(e) => setTheme(e.currentTarget.value)}
            >
              <option value="material">Material</option>
              <option value="apple">Apple</option>
            </select>
          </label>
        </div>
        <AppearanceProvider theme={theme}>
          <Story />
        </AppearanceProvider>
      </div>
    );
  },
];
