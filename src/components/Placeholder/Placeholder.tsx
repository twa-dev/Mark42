import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../Text/Text";

import { useTheme } from "hooks/useTheme";

import styles from "./Placeholder.module.scss";

export type PlaceholderProps = {
  title: ReactNode;
  titleAppearance?: "subtitleText" | "text";
  text?: ReactNode;
  textAppearance?: "subtitleText" | "text";
  description?: ReactNode;
  bottom?: ReactNode;
  media?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Placeholder = ({
  title,
  titleAppearance = "text",
  text,
  textAppearance = "text",
  description,
  bottom,
  media,
  className,
  style,
}: PlaceholderProps) => {
  const { themeClassName } = useTheme(styles);

  return (
    <div
      className={classNames(themeClassName("root"), className)}
      style={style}
    >
      {media && <div className={themeClassName("media")}>{media}</div>}
      <Text
        Component="h1"
        apple={{
          variant: "title2",
          weight: "semibold",
          color: titleAppearance,
        }}
        material={{ variant: "headline6", color: titleAppearance }}
        className={styles.title}
      >
        {title}
      </Text>
      {text && (
        <Text
          Component="p"
          apple={{ variant: "body", weight: "regular", color: textAppearance }}
          material={{
            variant: "body",
            weight: "regular",
            color: textAppearance,
          }}
          className={themeClassName("text")}
        >
          {text}
        </Text>
      )}
      {description && (
        <Text
          Component="p"
          apple={{
            variant: "subheadline2",
            weight: "regular",
            color: "subtitleText",
          }}
          material={{
            variant: "subtitle2",
            weight: "regular",
            color: "subtitleText",
          }}
          className={styles.description}
        >
          {description}
        </Text>
      )}
      {bottom && (
        <Text
          Component="div"
          apple={{ variant: "body", weight: "regular" }}
          material={{ variant: "body", weight: "regular" }}
          className={styles.bottom}
        >
          {bottom}
        </Text>
      )}
    </div>
  );
};
