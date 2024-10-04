import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import { Cell } from "../../Cells";
import { CellProps } from "../../Cells/Cell/Cell";

import styles from "./ButtonCell.module.scss";

type CellButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: "destructiveText" | "accentText";
} & Omit<CellProps, "tappable">;

const ButtonCell = ({
  children,
  mode = "accentText",
  className,
  ...restProps
}: CellButtonProps) => {
  return (
    <Cell
      tappable
      className={classNames(className, styles[mode])}
      {...restProps}
    >
      <Cell.Text title={children} titleAppearance={mode} />
    </Cell>
  );
};

export default ButtonCell;
