import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

import { ReactComponent as SpinnerAppleIcon } from "images/spinner_apple.svg";
import { ReactComponent as SpinnerIcon } from "images/spinner.svg";

import styles from "./Spinner.module.scss";

export const Spinner = (props: React.ComponentProps<typeof SpinnerIcon>) => {
  const { themeClassName, theme } = useTheme(styles);
  const Icon = theme === "apple" ? SpinnerAppleIcon : SpinnerIcon;
  return (
    <Icon
      {...props}
      className={classNames(themeClassName("spinner"), props.className)}
    />
  );
};
