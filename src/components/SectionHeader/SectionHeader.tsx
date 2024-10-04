import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import { Text } from "../Text/Text";

import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  className?: string;
  action?: ReactNode;
  skeleton?: boolean;
  skeletonWidth?: CSSProperties["width"];
  children: ReactNode;
}

const SectionHeader = ({
  children,
  className,
  action,
  skeleton,
  skeletonWidth,
}: SectionHeaderProps) => {
  if (typeof children !== "string") {
    return (
      <div className={classNames(styles.root, className)}>
        {children}
        {action && <span className={styles.action}>{action}</span>}
      </div>
    );
  }

  return (
    <Text
      apple={{ variant: "footnote", caps: true, color: "sectionHeaderText" }}
      material={{ variant: "button1", color: "sectionHeaderText" }}
      className={classNames(styles.root, className)}
      skeleton={skeleton}
      skeletonWidth={skeletonWidth}
    >
      {children}
      {action && <span className={styles.action}>{action}</span>}
    </Text>
  );
};

export default SectionHeader;
