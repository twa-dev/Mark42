import { useContext } from "react";
import { AppearanceContext } from "../Components/AppearanceProvider/AppearanceProvider";

export function useColorScheme(): "light" | "dark" {
  const { colorScheme } = useContext(AppearanceContext);

  return colorScheme;
}
