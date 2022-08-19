import { useContext } from "react";
import { AppearanceContext } from "../Components/AppearanceProvider/AppearanceProvider";

export function useTheme(): "apple" | "material" {
  const { theme } = useContext(AppearanceContext);

  return theme;
}
