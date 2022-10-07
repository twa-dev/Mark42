import { globalStyles } from "./globalStyles";

document.body.classList.add(globalStyles);

export { InitialsAvatar } from "./Components/InitialsAvatar";
export { Switch } from "./Components/Switch";
export { Section } from "./Components/Section";
export { Page } from "./Components/Page";
export { Cell } from "./Components/Cell";

export {
  AppearanceProvider,
  AppearanceContext,
} from "./Components/AppearanceProvider";

export { useTheme } from "./hooks/useTheme";
export { useColorScheme } from "./hooks/useColorScheme";
