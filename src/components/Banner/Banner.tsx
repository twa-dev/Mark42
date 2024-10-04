import {
  lazy,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  Suspense,
} from "react";
import classNames from "classnames";

import { TextColorsType } from "types/text";

import { Text } from "../Text/Text";

import { useTheme } from "hooks/useTheme";

import { ReactComponent as CheckmarkFillSVG } from "images/checkmark_fill.svg";
import { ReactComponent as InfoCircleFillSVG } from "images/info_circle_fill.svg";
import { ReactComponent as TonSVG } from "images/ton_white.svg";
import { ReactComponent as WarningTriangleSVG } from "images/warning_triangle.svg";
import { ReactComponent as WarningSVG } from "images/warning.svg";

import styles from "./Banner.module.scss";

const SuccessAnimation = lazy(
  () => import("../Snackbar/SuccessAnimation/SuccessAnimation"),
);

const CopyAnimation = lazy(
  () => import("../Snackbar/CopyAnimation/CopyAnimation"),
);

export const BANNER_ICONS = {
  warning: <WarningSVG />,
  ton: <TonSVG />,
  checkmark: <CheckmarkFillSVG />,
  warningTriangle: <WarningTriangleSVG />,
  animatedSuccess: (
    <Suspense fallback={<div className={styles.animatedSuccess} />}>
      <SuccessAnimation className={styles.animatedSuccess} />
    </Suspense>
  ),
  infoCircleFill: <InfoCircleFillSVG />,
  animatedCopy: (
    <Suspense fallback={<div className={styles.animatedCopy} />}>
      <CopyAnimation className={styles.animatedCopy} />
    </Suspense>
  ),
} as const;

type AppearanceType = "toast" | "default" | "hint" | "warning";

const textColor: { [key in AppearanceType]: TextColorsType } = {
  default: "text",
  toast: "overlay",
  hint: "subtitleText",
  warning: "black",
};

const actionColor: { [key in AppearanceType]: TextColorsType } = {
  default: "accentText",
  toast: "toast",
  hint: "accentText",
  warning: "black",
};

export interface BannerProps {
  text?: ReactNode;
  title?: ReactNode;
  action?: ReactNode;
  actionPosition?: "bottom" | "end";
  icon?: keyof typeof BANNER_ICONS | ReactElement;
  iconAppearance?: "overlay" | "orange" | "subtitle" | "black";
  appearance?: AppearanceType;
  className?: string;
  onClick?: MouseEventHandler;
}

export const Banner = ({
  text,
  title,
  action,
  actionPosition = "end",
  icon,
  iconAppearance = "overlay",
  className,
  appearance = "default",
  ...props
}: BannerProps) => {
  const { themeClassName } = useTheme(styles);

  return (
    <div
      className={classNames(
        themeClassName("root"),
        styles[appearance],
        className,
      )}
      {...props}
    >
      {icon && (
        <div
          className={classNames(
            themeClassName("before"),
            styles[iconAppearance],
          )}
        >
          {typeof icon === "string" ? BANNER_ICONS[icon] : icon}
        </div>
      )}
      <div className={styles.main}>
        {title && (
          <Text
            apple={{
              variant: "subheadline2",
              weight: "semibold",
              color: textColor[appearance],
            }}
            material={{
              variant: "subtitle2",
              weight: "medium",
              color: textColor[appearance],
            }}
            className={themeClassName("title")}
          >
            {title}
          </Text>
        )}
        {text && (
          <Text
            apple={{
              variant: "subheadline2",
              weight: "regular",
              color: textColor[appearance],
            }}
            material={{
              variant: "subtitle2",
              weight: "regular",
              color: textColor[appearance],
            }}
            className={themeClassName("text")}
          >
            {text}
          </Text>
        )}
        {action && actionPosition === "bottom" && (
          <Text
            apple={{
              variant: "subheadline2",
              weight: "regular",
              color: actionColor[appearance],
            }}
            material={{
              variant: "subtitle2",
              weight: "medium",
              color: actionColor[appearance],
            }}
            className={classNames(themeClassName("action"), styles.bottom)}
          >
            {action}
          </Text>
        )}
      </div>
      {action && actionPosition === "end" && (
        <Text
          apple={{
            variant: "body",
            weight: "regular",
            color: actionColor[appearance],
          }}
          material={{
            variant: "subtitle2",
            weight: "medium",
            color: actionColor[appearance],
          }}
          className={classNames(themeClassName("action"), styles.end)}
        >
          {action}
        </Text>
      )}
    </div>
  );
};
