import { forwardRef, Fragment, ReactNode } from "react";
import classNames from "classnames";

import SectionDescription from "../SectionDescription/SectionDescription";

import { useTheme } from "hooks/useTheme";

import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./Section.module.scss";

interface SectionProps {
  className?: string;
  separator?: boolean;
  apple?: {
    fill: "secondary" | "primary" | "quaternary";
  };
  material?: {
    descriptionLayout: "inner" | "outer";
  };
  title?: ReactNode;
  titleCondensed?: boolean;
  action?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  skeleton?: boolean;
  "data-testid"?: string;
  id?: string;
}

type Props<P = React.AllHTMLAttributes<HTMLElement>> = SectionProps & {
  Component?: React.ComponentType<P> | keyof JSX.IntrinsicElements;
};

const Section = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      Component,
      className,
      separator,
      apple = { fill: "primary" },
      material = { descriptionLayout: "inner" },
      title,
      titleCondensed = false,
      description,
      "data-testid": testId,
      skeleton,
      action,
      id,
    },
    ref,
  ) => {
    const { themeClassName, theme } = useTheme(styles);

    const fill = theme === "apple" ? apple.fill : undefined;
    const descriptionLayout =
      theme === "material" ? material.descriptionLayout : undefined;

    return (
      <section
        className={classNames(
          themeClassName("root"),
          descriptionLayout && styles[descriptionLayout],
          className,
        )}
        ref={ref}
        data-testid={testId}
        id={id}
      >
        <div className={themeClassName("content")}>
          {title && (
            <SectionHeader
              className={classNames(
                themeClassName("title"),
                titleCondensed && themeClassName("condensed"),
              )}
              action={action}
            >
              {title}
            </SectionHeader>
          )}
          <div
            className={classNames(
              themeClassName("container"),
              fill && styles[fill],
              skeleton && styles.skeleton,
            )}
          >
            {children}
          </div>
          {description && (
            <SectionDescription className={themeClassName("description")}>
              {description}
            </SectionDescription>
          )}
        </div>
        {separator && <hr className={themeClassName("separator")} />}
      </section>
    );
  },
);

export const MaterialOnlySection = ({
  children,
  ...props
}: Parameters<typeof Section>[0]) => {
  const theme = useTheme();
  if (theme === "material") {
    return <Section {...props}>{children}</Section>;
  }
  return <>{children}</>;
};

export default Section;
