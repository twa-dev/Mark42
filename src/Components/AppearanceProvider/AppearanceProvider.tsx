import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { WebApp } from "@twa-dev/types";
import { ColorSchemes, Themes } from "../../types";

/* TODO определять тему не по userAgent, а по имени клиента (MacOS, Android, iOS, Desktop, Web),
     который телега нам скоро начнет присылать.  */

export const AppearanceContext = createContext<{
  theme: Themes;
  colorScheme: ColorSchemes;
}>({
  colorScheme: "light",
  theme: "apple",
});

export const AppearanceProvider: FC<{
  children?: ReactNode;
  theme?: Themes;
  colorScheme?: ColorSchemes;
  WebApp: WebApp;
}> = ({
  children,
  theme = navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)
    ? "apple"
    : "material",
  colorScheme: colorSchemeProp,
  WebApp,
}) => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    colorSchemeProp || WebApp.colorScheme
  );

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (!colorSchemeProp) {
      const onChange = () => {
        setColorScheme(WebApp.colorScheme);
      };
      WebApp.onEvent("themeChanged", onChange);
      return () => {
        WebApp.offEvent("themeChanged", onChange);
      };
    } else {
      setColorScheme(colorSchemeProp);
    }
  }, [colorSchemeProp]);

  useEffect(() => {
    document.body.setAttribute("data-color-scheme", colorScheme);
  }, [colorScheme]);

  const value = useMemo(() => {
    return {
      theme,
      colorScheme,
    };
  }, [colorScheme, theme]);

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};
