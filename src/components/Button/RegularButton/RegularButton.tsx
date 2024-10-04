import { forwardRef, lazy, ReactNode, Suspense } from "react";
import classNames from "classnames";

import { ButtonCommonProps } from "../../Button/types";
import Tappable from "../../Tappable/Tappable";
import { Text } from "../../Text/Text";

import { useTheme } from "hooks/useTheme";

import buttonStyles from "../styles.module.scss";
import styles from "./RegularButton.module.scss";

const SpinnerAnimation = lazy(
  () => import("../../animations/SpinnerAnimation/SpinnerAnimation"),
);

export type RegularButtonProps = ButtonCommonProps & {
  stretched?: boolean;
  progress?: boolean;
  icon?: ReactNode;
};

export const RegularButton = forwardRef<Element, RegularButtonProps>(
  (
    {
      skeleton,
      children,
      stretched,
      progress,
      appearance = "primary",
      Component = "button",
      shiny,
      className,
      icon,
      style,
      ...restProps
    }: RegularButtonProps,
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
          stretched && styles.stretched,
          className,
        )}
        style={style}
        ref={ref}
        {...restProps}
      >
        <div className={themeClassName("container")}>
          {icon && (
            <span className={themeClassName("icon")}>
              {skeleton ? null : icon}
            </span>
          )}
          <Text
            apple={{ variant: "body", weight: "semibold" }}
            material={{ variant: "button1" }}
            skeleton={skeleton}
            className={themeClassName("text")}
          >
            {children}
          </Text>
          {progress && !skeleton && (
            <Suspense
              fallback={<div className={themeClassName("spinner")}></div>}
            >
              <SpinnerAnimation className={themeClassName("spinner")} />
            </Suspense>
          )}
        </div>
      </Tappable>
    );
  },
);
