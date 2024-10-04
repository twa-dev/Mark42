import { createElement, InputHTMLAttributes } from "react";
import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

import styles from "./Switch.module.scss";
import WebApp from "@twa-dev/sdk";

export function Switch<C extends keyof JSX.IntrinsicElements>({
  className,
  style,
  onChange,
  Component,
  ...props
}: {
  Component?: C;
} & InputHTMLAttributes<HTMLInputElement>) {
  const { themeClassName } = useTheme(styles);

  return createElement(
    Component || "label",
    {
      style,
      className: classNames(className, themeClassName("root")),
    },
    <>
      <input
        type="checkbox"
        {...props}
        onChange={(e) => {
          WebApp.HapticFeedback.selectionChanged();
          onChange && onChange(e);
        }}
      />
      <span className={themeClassName("presentation")} />
    </>,
  );
}
