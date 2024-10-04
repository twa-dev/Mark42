import { ReactNode } from "react";
import classnames from "classnames";

import styles from "./CellPart.module.scss";

export const CellPart = ({
  type,
  disabled,
  className,
  children,
}: {
  type:
    | "avatar"
    | "switch"
    | "checkbox"
    | "radio"
    | "icon"
    | "roundedIcon"
    | "squareIcon"
    | "tabs"
    | "segmentedControl"
    | "picker"
    | "smallButton";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={classnames(
        className,
        styles[type],
        disabled && styles.disabled,
      )}
    >
      {children}
    </div>
  );
};
