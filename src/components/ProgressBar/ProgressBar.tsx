import cn from "classnames";
import { clamp } from "lodash-es";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value: number;
  className?: string;
  skeleton?: boolean;
}

export const ProgressBar = ({
  value,
  className,
  skeleton,
}: ProgressBarProps) => {
  const progress = clamp(value ?? 0, 0, 100);

  return (
    <div className={cn(styles.container, className)}>
      {Boolean(progress) && (
        <div
          className={cn(
            styles.progress,
            skeleton && styles.skeleton,
            progress && styles.minProgressPrettyValue,
          )}
          style={{ width: `${progress}%` }}
        ></div>
      )}
      <div className={styles.placeholder}></div>
    </div>
  );
};
