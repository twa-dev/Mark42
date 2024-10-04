import { Fragment, ReactNode, useEffect } from "react";

import { useColorScheme } from "hooks/useColorScheme";
import { useDidMount } from "hooks/useDidMount";
import { useTheme } from "hooks/useTheme";
import WebApp from "@twa-dev/sdk";

interface PageProps {
  mode?: "primary" | "secondary" | "inverted";
  expandOnMount?: boolean;
  headerColor?: string;
  children: ReactNode;
}

const { setHeaderColor, setBackgroundColor, themeParams, isVersionAtLeast } =
  WebApp;

export const Page = ({
  children,
  mode = "primary",
  expandOnMount = false,
  headerColor,
}: PageProps) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  useDidMount(() => {
    if (expandOnMount) {
      WebApp.expand();
    }
  });

  useEffect(() => {
    const colorMapping = {
      primary: themeParams.bg_color,
      secondary: themeParams.secondary_bg_color,
      inverted: "#1c1c1e",
    };
    const backgroundColor = colorMapping[mode];
    try {
      // TODO: make fixes to avoid type assertion
      setBackgroundColor(
        backgroundColor as `#${string}` | "bg_color" | "secondary_bg_color"
      );
      if (isVersionAtLeast("6.9")) {
        // TODO: make fixes to avoid type assertion
        setHeaderColor(
          (headerColor
            ? headerColor
            : theme === "material" || mode === "primary"
            ? "bg_color"
            : "secondary_bg_color") as
            | `#${string}`
            | "bg_color"
            | "secondary_bg_color"
        );
      } else {
        // TODO: make fixes to avoid type assertion
        setHeaderColor(
          (theme === "material" ? themeParams.bg_color : backgroundColor) as
            | `#${string}`
            | "bg_color"
            | "secondary_bg_color"
        );
      }
    } catch (e) {
      console.error(e);
    }

    document.documentElement.style.setProperty("background", backgroundColor);
  }, [mode, colorScheme, theme, headerColor]);

  return <Fragment>{children}</Fragment>;
};

export default Page;
