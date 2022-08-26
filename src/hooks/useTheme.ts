import { useContext } from "react";
import { AppearanceContext } from "../Components/AppearanceProvider/AppearanceProvider";
import { Themes } from "../types";

export function useTheme(forceTheme?: Themes): Themes {
  const { theme } = useContext(AppearanceContext);

  return forceTheme || theme;
}
