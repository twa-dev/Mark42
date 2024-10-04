import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../Text/Text";

import { useTheme } from "hooks/useTheme";

import styles from "./TextList.module.scss";

export const TextList = ({
  items,
  bulletColor = "var(--tg-theme-subtitle-text-color)",
  className,
  style,
}: {
  items: ReactNode[];
  bulletColor?: string;
  className?: string;
  style?: CSSProperties;
}) => {
  const { themeClassName } = useTheme(styles);
  const resultStyle = Object.assign({}, style, {
    "--text-list-bullet-color": bulletColor,
  });

  return (
    <ul
      className={classNames(themeClassName("featuresList"), className)}
      style={resultStyle}
    >
      {items.map((item, index) => (
        <li key={index} className={themeClassName("feature")}>
          <div className={themeClassName("featureMarker")} />
          <Text
            apple={{ variant: "subheadline1", weight: "regular" }}
            material={{ variant: "subtitle1" }}
            Component="div"
          >
            {item}
          </Text>
        </li>
      ))}
    </ul>
  );
};
