import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

import { ReactComponent as CheckboxAndroid } from "./checkbox_android.svg";
import { ReactComponent as CheckboxCheckedAndroid } from "./checkbox_checked_android.svg";
import { ReactComponent as CheckboxCheckedIos } from "./checkbox_checked_ios.svg";
import { ReactComponent as CheckboxIos } from "./checkbox_ios.svg";
import { ReactComponent as RadioAndroid } from "./radio_android.svg";
import { ReactComponent as RadioCheckedAndroid } from "./radio_checked_android.svg";
import { ReactComponent as RadioCheckedIos } from "./radio_checked_ios.svg";
import { ReactComponent as RadioIos } from "./radio_ios.svg";

import styles from "./Checkmark.module.scss";

const CheckmarkFallback = ({
  checked,
  mode = "radio",
}: {
  checked?: boolean;
  mode?: "radio" | "checkbox";
}) => {
  const { theme, themeClassName } = useTheme(styles);

  const className = classNames(
    themeClassName("root"),
    styles[mode],
    checked && styles.checked,
  );

  if (theme === "apple") {
    if (mode === "radio") {
      return checked ? (
        <RadioCheckedIos className={className} />
      ) : (
        <RadioIos className={className} />
      );
    } else {
      return checked ? (
        <CheckboxCheckedIos className={className} />
      ) : (
        <CheckboxIos className={className} />
      );
    }
  } else {
    if (mode === "radio") {
      return checked ? (
        <RadioCheckedAndroid className={className} />
      ) : (
        <RadioAndroid className={className} />
      );
    } else {
      return checked ? (
        <CheckboxCheckedAndroid className={className} />
      ) : (
        <CheckboxAndroid className={className} />
      );
    }
  }
};

export default CheckmarkFallback;
