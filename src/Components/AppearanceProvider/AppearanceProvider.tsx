import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import WebApp from "@twa-dev/sdk";
import { Platforms } from "@twa-dev/types";
import { ColorSchemes, Themes } from "../../types";

function resolveThemeByPlatform(platform: Platforms): Themes {
  if (platform) {
    return platform === "macos" || platform === "ios" ? "apple" : "material";
  } else if (
    navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)
  ) {
    return "apple";
  } else {
    return "material";
  }
}

export const AppearanceContext = createContext<{
  colorScheme: ColorSchemes;
  theme: Themes;
  platform: Platforms;
}>({
  colorScheme: WebApp.colorScheme,
  theme: resolveThemeByPlatform(WebApp.platform),
  platform: WebApp.platform,
});

export const AppearanceProvider: FC<{
  children?: ReactNode;
  theme?: Themes;
  platform?: Platforms;
  colorScheme?: ColorSchemes;
}> = ({
  children,
  theme: themeProp,
  platform: platformProp,
  colorScheme: colorSchemeProp,
}) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemes>(
    colorSchemeProp || WebApp.colorScheme
  );

  const platform = platformProp || WebApp.platform;

  const theme = useMemo(() => {
    return themeProp || resolveThemeByPlatform(platform);
  }, [themeProp, platform]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
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
      platform,
      theme,
      colorScheme,
    };
  }, [colorScheme, theme, platform]);

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};
