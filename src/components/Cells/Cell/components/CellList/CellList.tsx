import { CSSProperties, forwardRef, ReactNode } from "react";
import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

import styles from "./CellList.module.scss";

/**
 * Use this component if you want to draw several Cells in a row and separate them by 1px line
 */

type CellListProps = {
  children: ReactNode;
  separator?: boolean;
  className?: string;
  mode?: "plain" | "card";
  overlap?: boolean;
  blockSeparator?: "top";
  style?: CSSProperties;
};

export const CellList = forwardRef<HTMLDivElement, CellListProps>(
  (
    {
      children,
      separator = true,
      blockSeparator,
      className,
      mode = "plain",
      overlap = false,
      style,
    },
    ref,
  ) => {
    const { themeClassName } = useTheme(styles);

    return (
      <div
        ref={ref}
        className={classNames(
          themeClassName("root"),
          separator && styles.separator,
          mode === "card" && themeClassName("card"),
          blockSeparator === "top" && styles.blockSeparatorTop,
          overlap && styles.overlap,
          className,
        )}
        style={style}
      >
        {children}
      </div>
    );
  },
);
