import { CSSProperties } from "react";

export type Themes = "apple" | "material";

export type ColorSchemes = "light" | "dark";

export interface AppearanceProps {
  theme?: Themes;
  colorScheme?: ColorSchemes;
}

export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
}
