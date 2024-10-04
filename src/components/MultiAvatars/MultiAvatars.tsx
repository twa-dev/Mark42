import { CSSProperties, ReactNode } from "react";

import styles from "./MultiAvatars.module.scss";

interface MultiAvatarsProps {
  avatars: NonNullable<ReactNode>[] | NonNullable<ReactNode>;
  overlapWidth: string;
}

export const MultiAvatars = ({ avatars, overlapWidth }: MultiAvatarsProps) => {
  return (
    <div
      className={styles.root}
      style={{ "--overlap-width": overlapWidth } as CSSProperties}
    >
      {avatars}
    </div>
  );
};
