import { forwardRef, ReactNode } from "react";
import classNames from "classnames";

import { ButtonCommonProps } from "../../Button/types";
import Tappable from "../../Tappable/Tappable";
import { Text } from "../../Text/Text";

import { useTheme } from "hooks/useTheme";

import buttonStyles from "../styles.module.scss";
import styles from "./MultilineButton.module.scss";

type MultilineButtonProps = ButtonCommonProps & {
  icon?: ReactNode;
};

export const MultilineButton = forwardRef<Element, MultilineButtonProps>(
  (
    {
      skeleton,
      children,
      appearance = "primary",
      Component = "button",
      shiny,
      className,
      icon,
      style,
      ...restProps
    }: MultilineButtonProps,
    ref,
  ) => {
    const { theme, themeClassName: buttonThemeClassName } =
      useTheme(buttonStyles);
    const { themeClassName } = useTheme(styles);
    return (
      <Tappable
        mode={theme === "apple" ? "opacity" : "overlay"}
        Component={Component}
        rootClassName={classNames(
          buttonThemeClassName("root"),
          buttonThemeClassName(appearance),
          shiny && buttonStyles.shiny,
          skeleton && buttonStyles.skeleton,
          themeClassName("root"),
          className,
        )}
        style={style}
        ref={ref}
        {...restProps}
      >
        <div className={themeClassName("container")}>
          <span className={styles.icon}>{skeleton ? null : icon}</span>
          <Text
            apple={{ variant: "caption2", weight: "medium" }}
            material={{ variant: "caption2", weight: "medium" }}
            skeleton={skeleton}
          >
            {children}
          </Text>
        </div>
      </Tappable>
    );
  },
);
