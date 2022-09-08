import { FC, useEffect, Fragment, ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useColorScheme } from "../../hooks/useColorScheme";
import WebApp from "@twa-dev/sdk";

interface PageProps {
  mode?: "primary" | "secondary";
  children?: ReactNode;
}

const { setHeaderColor, setBackgroundColor, themeParams } = WebApp;

export const Page: FC<PageProps> = ({ children, mode = "primary" }) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const color =
      mode === "primary"
        ? themeParams.bg_color
        : themeParams.secondary_bg_color;

    try {
      setBackgroundColor(color);
      if (theme === "apple") {
        setHeaderColor(color);
      }
    } catch (e) {
      console.error(e);
    }
    document.documentElement.style.setProperty("background", color);

    return () => {
      document.documentElement.style.removeProperty("background");
    };
  }, [mode, colorScheme, theme]);

  return <Fragment>{children}</Fragment>;
};
