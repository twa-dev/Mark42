import classNames from "classnames";

import { Cell } from "../../Cells";
import { CellProps } from "../../Cells/Cell/Cell";

import { useTheme } from "hooks/useTheme";

import styles from "./CellCard.module.scss";

export const CellCard = ({ className, children, ...restProps }: CellProps) => {
  const { themeClassName } = useTheme(styles);

  return (
    <Cell
      className={classNames(themeClassName("root"), className)}
      {...restProps}
    >
      {children}
    </Cell>
  );
};
