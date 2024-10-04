import { ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../../../../Text/Text";

import { useTheme } from "hooks/useTheme";

import styles from "./CellBanner.module.scss";

export const CellBanner = ({
  title,
  text,
  className,
}: {
  title: ReactNode;
  text: ReactNode;
  className?: string;
}): JSX.Element => {
  const { themeClassName } = useTheme(styles);

  return (
    <div className={classNames(themeClassName("root"), className)}>
      <Text
        apple={{ variant: "body", weight: "semibold" }}
        material={{ variant: "body", weight: "medium" }}
      >
        {title}
      </Text>
      <Text
        apple={{ variant: "callout", weight: "regular" }}
        material={{ variant: "body", weight: "regular" }}
      >
        {text}
      </Text>
    </div>
  );
};
