import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import WebApp from "@twa-dev/sdk";
import { ColorSchemes, Themes } from "../../types";

let theme: Themes;

if (WebApp.platform) {
  theme = WebApp.platform === 'macos' || WebApp.platform === 'ios' ? 'apple' : 'material';
} else if (navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)) {
  theme = 'apple';
} else {
  theme = 'material';
}

export const AppearanceContext = createContext<{
  theme: Themes;
  colorScheme: ColorSchemes;
}>({
  colorScheme: WebApp.colorScheme,
  theme,
});

export const AppearanceProvider: FC<{
  children?: ReactNode;
  theme?: Themes;
  colorScheme?: ColorSchemes;
}> = ({
  children,
  theme: themeProp = theme,
  colorScheme: colorSchemeProp= WebApp.colorScheme,
}) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemes>(
    colorSchemeProp
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", themeProp);
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
      theme: themeProp,
      colorScheme,
    };
  }, [colorScheme, themeProp]);

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};
