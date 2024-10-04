import { forwardRef } from "react";
import classNames from "classnames";

import { ButtonCommonProps } from "../../Button/types";
import Tappable from "../../Tappable/Tappable";
import { Text } from "../../Text/Text";

import { useTheme } from "hooks/useTheme";

import buttonStyles from "../styles.module.scss";
import styles from "./SmallButton.module.scss";

type SmallButtonProps = ButtonCommonProps & {
  apple?: { rounded: boolean };
};

export const SmallButton = forwardRef<Element, SmallButtonProps>(
  (
    {
      skeleton,
      children,
      appearance = "primary",
      Component = "button",
      shiny,
      className,
      apple,
      style,
      ...restProps
    }: SmallButtonProps,
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
          apple?.rounded && styles.rounded,
          className,
        )}
        style={style}
        ref={ref}
        {...restProps}
      >
        <Text
          apple={
            apple?.rounded
              ? { variant: "subheadline1", rounded: true, weight: "semibold" }
              : { variant: "subheadline2", weight: "semibold" }
          }
          material={{ variant: "subtitle2", weight: "medium" }}
          skeleton={skeleton}
        >
          {children}
        </Text>
      </Tappable>
    );
  },
);
