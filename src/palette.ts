import WebApp from "@twa-dev/sdk";

const tgTheme = WebApp.themeParams;

// @wallet palette
// All colors are described here: https://www.figma.com/file/YED9hhqEsjhFLuYLuQy4x4/1-%C2%B7-Palette-%C2%B7-Telegram
export type Palette = {
  separator_color: string;
  second_button_color: string;
  text_confirm_color: string;
  button_confirm_color: string;
  button_main_disabled_color: string;
  text_main_disabled_color: string;
  button_destructive_color: string;
  highlight_default: string;
  quick_menu_background: string;
  quick_menu_foreground: string;
  toast_background: string;
  text_overlay: string;
  toast_link: string;
  tertiary_fill_background: string;
  quaternary_fill_background: string;
  separator_non_opaque_color: string;
  accent_orange: string;
  segmented_control_active_background: string;
  tooltip_background: string;
};

const destructiveColorFallback = "#FF3B30";

function opacifyHEXColor(color: string, opacity: number) {
  if (color.includes("#") && color.length === 7) {
    const [r, g, b] = [
      parseInt(color.slice(1, 3), 16),
      parseInt(color.slice(3, 5), 16),
      parseInt(color.slice(5, 7), 16),
    ];

    return `rgb(${r} ${g} ${b} / ${opacity}%)`;
  } else {
    return color;
  }
}

export function createPalette({
  theme,
  colorScheme,
}: {
  theme: "apple" | "material";
  colorScheme: "light" | "dark";
}): Palette {
  let palette: Palette | undefined;
  if (theme === "apple") {
    if (colorScheme === "light") {
      // apple light
      palette = {
        separator_color: "#C8C7CB",
        second_button_color: opacifyHEXColor(tgTheme.button_color, 10),
        text_confirm_color: "#34C759",
        button_confirm_color: "#34C759",
        button_main_disabled_color: "#E8E8E9",
        text_main_disabled_color: "#B9B9BA",
        button_destructive_color: opacifyHEXColor(
          tgTheme.destructive_text_color ?? destructiveColorFallback,
          10,
        ),
        highlight_default: "rgba(142, 142, 146, 0.24)",
        quick_menu_background: "rgba(255, 255, 255, 0.55)",
        quick_menu_foreground: "rgba(0, 0, 0, 0.1)",
        toast_background: "rgba(45, 45, 45, 0.8)",
        text_overlay: "#FFFFFF",
        toast_link: "#5AC8FA",
        tertiary_fill_background: "rgba(116, 116, 128, 0.12)",
        quaternary_fill_background: "rgba(116, 116, 128, 0.08)",
        separator_non_opaque_color: "rgba(60, 60, 67, 0.36)",
        accent_orange: "#FF9500",
        segmented_control_active_background: "#FFFFFF",
        tooltip_background: "rgba(0, 0, 0, 0.8)",
      };
    } else {
      // apple dark
      palette = {
        separator_color: "rgba(61, 61, 63, 1)",
        second_button_color: opacifyHEXColor(tgTheme.button_color, 10),
        text_confirm_color: "#30D158",
        button_confirm_color: "#30D158",
        button_main_disabled_color: "#2F2F2F",
        text_main_disabled_color: "#606060",
        button_destructive_color: opacifyHEXColor(
          tgTheme.destructive_text_color ?? destructiveColorFallback,
          10,
        ),
        highlight_default: "rgba(152, 152, 157, 0.24)",
        quick_menu_background: "rgba(0, 0, 0, 0.78)",
        quick_menu_foreground: "#FFFFFF",
        toast_background: "rgba(45, 45, 45, 0.8)",
        text_overlay: "#FFFFFF",
        toast_link: "#5AC8FA",
        tertiary_fill_background: "rgba(118, 118, 128, 0.24)",
        quaternary_fill_background: "rgba(116, 116, 128, 0.18)",
        separator_non_opaque_color: "rgba(84, 84, 88, 0.65)",
        accent_orange: "#FF9F0A",
        segmented_control_active_background: "#636366",
        tooltip_background: "#3a3a3c",
      };
    }
  } else {
    if (colorScheme === "light") {
      // material light
      palette = {
        separator_color: "#D9D9D9",
        second_button_color: opacifyHEXColor(tgTheme.button_color, 10),
        text_confirm_color: "#4ECC5E",
        button_confirm_color: "#4ECC5E",
        button_main_disabled_color: "#E9E8E8",
        text_main_disabled_color: "#BABABA",
        button_destructive_color: opacifyHEXColor(
          tgTheme.destructive_text_color ?? destructiveColorFallback,
          10,
        ),
        highlight_default: "rgba(0, 0, 0, 0.05)",
        quick_menu_background: "#FFFFFF",
        quick_menu_foreground: "#222222",
        toast_background: "rgba(40, 48, 57, 0.92)",
        text_overlay: "#FFFFFF",
        toast_link: "#85CAFF",
        tertiary_fill_background: "rgba(122, 122, 122, 0.12)",
        quaternary_fill_background: "rgba(122, 122, 122, 0.08)",
        separator_non_opaque_color: "rgba(153, 153, 153, 0.36)",
        accent_orange: "#F68136",
        segmented_control_active_background: "#FFFFFF",
        tooltip_background: "rgba(0, 0, 0, 0.8)",
      };
    } else {
      // material dark
      palette = {
        separator_color: "#000000",
        second_button_color: opacifyHEXColor(tgTheme.button_color, 10),
        text_confirm_color: "#61BD67",
        button_confirm_color: "#61BD67",
        button_main_disabled_color: "#3C3C3E",
        text_main_disabled_color: "#606060",
        button_destructive_color: opacifyHEXColor(
          tgTheme.destructive_text_color ?? destructiveColorFallback,
          10,
        ),
        highlight_default: "rgba(255, 255, 255, 0.05)",
        quick_menu_background: "#282829",
        quick_menu_foreground: "#FFFFFF",
        toast_background: "rgba(40, 40, 40, 0.96)",
        text_overlay: "#FFFFFF",
        toast_link: "#6CB7FF",
        tertiary_fill_background: "rgba(123, 123, 123, 0.24)",
        quaternary_fill_background: "rgba(122, 122, 122, 0.18)",
        separator_non_opaque_color: "#000000",
        accent_orange: "#E58943",
        segmented_control_active_background: "#636366",
        tooltip_background: "#3a3a3c",
      };
    }
  }

  Object.entries(palette).forEach(([key, value]) => {
    document.documentElement.style.setProperty(
      `--${key.replaceAll("_", "-")}`,
      value,
    );
  });

  return palette;
}
