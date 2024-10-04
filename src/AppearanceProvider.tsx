import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { resolveTheme } from "utils/common";
import { createPalette, Palette } from "./palette";
import WebApp from "@twa-dev/sdk";

const resolvedTheme = resolveTheme();

export const AppearanceContext = createContext<{
  theme: "apple" | "material";
  colorScheme: "light" | "dark";
  palette: Palette;
}>({
  colorScheme: WebApp.colorScheme,
  theme: resolvedTheme,
  palette: createPalette({
    colorScheme: WebApp.colorScheme,
    theme: resolvedTheme,
  }),
});

export const AppearanceProvider = ({
  theme = resolvedTheme,
  children,
}: {
  theme?: "apple" | "material";
  children: ReactNode;
}) => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    WebApp.colorScheme,
  );

  const palette = useMemo(() => {
    return createPalette({ theme, colorScheme });
  }, [colorScheme, theme]);

  useEffect(() => {
    document.body.classList.add(theme);
    if (WebApp.platform && !["android", "ios"].includes(WebApp.platform)) {
      document.body.classList.add("desktop");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    WebApp.onEvent("themeChanged", () => {
      setColorScheme(WebApp.colorScheme);
    });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-color-scheme", colorScheme);
  }, [colorScheme]);

  const value = useMemo(() => {
    return {
      theme,
      colorScheme,
      palette,
    };
  }, [colorScheme, theme, palette]);

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};
