import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import WebApp from "@twa-dev/sdk";

/* TODO определять тему не по userAgent, а по имени клиента (MacOS, Android, iOS, Desktop, Web),
     который телега нам скоро начнет присылать.  */
const theme: "apple" | "material" = navigator.userAgent.match(
  /iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i
)
  ? "apple"
  : "material";

export const AppearanceContext = createContext<{
  theme: "apple" | "material";
  colorScheme: "light" | "dark";
}>({
  colorScheme: WebApp.colorScheme,
  theme,
});

export const AppearanceProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    WebApp.colorScheme
  );

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

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
    };
  }, [colorScheme]);

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};
