import { useContext } from "react";
import { AppearanceContext } from "../Components/AppearanceProvider";

export function useColorScheme(): "light" | "dark" {
  const { colorScheme } = useContext(AppearanceContext);

  return colorScheme;
}
