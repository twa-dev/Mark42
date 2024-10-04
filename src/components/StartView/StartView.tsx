import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../Text/Text";

import { useTheme } from "hooks/useTheme";

import styles from "./StartView.module.scss";

type StartViewProps = {
  title: ReactNode;
  text?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const StartView = ({
  title,
  text,
  description,
  media,
  className,
  style,
}: StartViewProps) => {
  const { themeClassName } = useTheme(styles);

  return (
    <div
      className={classNames(themeClassName("root"), className)}
      style={style}
    >
      {media && <div className={themeClassName("media")}>{media}</div>}
      <Text
        apple={{ variant: "title1" }}
        material={{ variant: "headline5" }}
        className={styles.title}
      >
        {title}
      </Text>
      {text && (
        <Text
          apple={{ variant: "body", weight: "regular" }}
          material={{ variant: "body", weight: "regular" }}
          className={styles.text}
        >
          {text}
        </Text>
      )}
      {description && (
        <Text
          apple={{ variant: "footnote", color: "subtitleText" }}
          material={{ variant: "caption1", color: "subtitleText" }}
          className={styles.description}
        >
          {description}
        </Text>
      )}
    </div>
  );
};

interface StartViewPlaceholderProps {
  text?: boolean;
  description?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const StartViewPlaceholder = ({
  text,
  description,
  className,
  style,
}: StartViewPlaceholderProps) => {
  const { themeClassName } = useTheme(styles);

  return (
    <div
      className={classNames(themeClassName("root"), className)}
      style={style}
    >
      <Text
        apple={{ variant: "title1" }}
        material={{ variant: "headline5" }}
        skeleton
        skeletonWidth="90%"
        className={styles.title}
      />
      {text && (
        <>
          <Text
            apple={{ variant: "body", weight: "regular" }}
            material={{ variant: "body", weight: "regular" }}
            skeleton
            skeletonWidth="70%"
            className={styles.text}
          />
          <Text
            apple={{ variant: "body", weight: "regular" }}
            material={{ variant: "body", weight: "regular" }}
            skeleton
            skeletonWidth="85%"
            className={styles.text}
          />
        </>
      )}
      {description && (
        <Text
          apple={{ variant: "footnote", color: "subtitleText" }}
          material={{ variant: "caption1", color: "subtitleText" }}
          skeleton
          skeletonWidth="65%"
          className={styles.description}
        />
      )}
    </div>
  );
};
