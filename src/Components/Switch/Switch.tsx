import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react";
import cx from "classnames";
import { useTheme } from "../../hooks/useTheme";
import { AppearanceProps, BaseComponentProps } from "../../types";
import WebApp from "@twa-dev/sdk";
import styles from "./Switch.styles";

export interface SwitchProps
  extends BaseComponentProps,
    InputHTMLAttributes<HTMLInputElement>,
    AppearanceProps {}

export const Switch: FC<SwitchProps> = memo<SwitchProps>(
  ({ className, style, theme, onChange, ...restProps }) => {
    theme = useTheme(theme);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      WebApp.HapticFeedback.selectionChanged();
      onChange && onChange(e);
    };

    return (
      <div className={cx(className, styles.root, styles[theme])} style={style}>
        <label>
          <input type="checkbox" onChange={onChangeCallback} {...restProps} />
          <div className={styles.mark} />
        </label>
      </div>
    );
  }
);

Switch.displayName = "Switch";
