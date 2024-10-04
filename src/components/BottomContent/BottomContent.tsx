import {
  CSSProperties,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import styles from "./BottomContent.module.scss";

type Props = {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
  children: React.ReactNode;
};
export const BottomContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...restProps } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    const resizeObserver = new ResizeObserver(updateContentHeight);
    resizeObserver.observe(contentRef.current);
    updateContentHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div style={{ height: contentHeight }} className={styles.sentinel} />
      <div
        className={classNames(styles.root, className)}
        {...restProps}
        ref={(el) => {
          contentRef.current = el;
          if (!ref) return;

          if (typeof ref === "function") {
            ref(el);
          } else {
            ref.current = el;
          }
        }}
      >
        {children}
      </div>
    </>
  );
});
