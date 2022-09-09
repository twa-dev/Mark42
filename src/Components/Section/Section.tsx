import { FC, ReactNode } from "react";
import { AppearanceProps, BaseComponentProps } from "../../types";
import { useTheme } from "../../hooks/useTheme";
import cx from "classnames";
import styles from "./Section.styles";

export interface SectionProps extends AppearanceProps, BaseComponentProps {
  header?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
}

export const Section: FC<SectionProps> = ({
  header,
  children,
  description,
  theme,
  className,
  style,
}) => {
  theme = useTheme(theme);

  return (
    <section className={cx(className, styles[theme])} style={style}>
      <div className={styles.container}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.children}>{children}</div>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </section>
  );
};
