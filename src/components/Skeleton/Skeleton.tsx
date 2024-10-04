import { forwardRef, ReactNode, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  skeleton: ReactNode;
  skeletonShown?: boolean;
  className?: string;
  skeletonClassName?: string;
  children: ReactNode;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { className, skeletonClassName, children, skeletonShown, skeleton },
    ref,
  ) => {
    const skeletonRef = useRef<HTMLDivElement>(null);

    return (
      <div className={classNames(styles.root, className)} ref={ref}>
        <CSSTransition
          in={skeletonShown}
          timeout={600}
          classNames={{
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
          nodeRef={skeletonRef}
          unmountOnExit
        >
          <div
            ref={skeletonRef}
            className={classNames(styles.skeleton, skeletonClassName)}
          >
            {skeleton}
          </div>
        </CSSTransition>

        {!skeletonShown && <div className={styles.content}>{children}</div>}
      </div>
    );
  },
);

export default Skeleton;
