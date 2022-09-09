import cx from "classnames";
import { AppearanceProps, BaseComponentProps } from "../../types";
import { FC, ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Cell.styles";

export interface CellProps extends AppearanceProps, BaseComponentProps {
  before?: ReactNode;
  after?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}

export const Cell: FC<CellProps> = ({
  style,
  className,
  children,
  after,
  before,
  description,
  theme,
}) => {
  theme = useTheme(theme);

  return (
    <div className={cx(className, styles.root, styles[theme])} style={style}>
      {before && <div className={styles.before}>{before}</div>}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.children}>{children}</div>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
        {after && <div className={styles.after}>{after}</div>}
      </div>
    </div>
  );
};
