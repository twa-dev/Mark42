import { ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../../../../../../Text/Text";

import styles from "./Badge.module.scss";

export const Badge = ({
  children,
  appearance = "accent",
}: {
  children: ReactNode;
  appearance?: "accent" | "quaternary";
}) => {
  return (
    <Text
      className={classNames(styles.root, styles[appearance])}
      apple={{
        variant: "caption2",
        weight: "medium",
      }}
      material={{
        variant: "caption2",
        weight: "medium",
      }}
    >
      {children}
    </Text>
  );
};
