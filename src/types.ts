export type Themes = "apple" | "material";

export type ColorSchemes = "light" | "dark";

export interface AppearanceProps {
  theme?: Themes;
  colorScheme?: ColorSchemes;
}
