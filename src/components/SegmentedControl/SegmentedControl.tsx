import { useEffect, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";

import { useTheme } from "hooks/useTheme";

import styles from "./SegmentedControl.module.scss";

interface Props {
  items: Array<string>;
  onChange: (index: number) => void;
  activeItemIndex: number;
  disabled?: boolean;
  "data-testid"?: string;
  className?: string;
  selectedItemIndex?: number;
  width?: string;
  itemClassName?: string;
  languageCode?: string;
}

const ROOT_PADDING = 2;

export const SegmentedControl = ({
  items,
  onChange,
  activeItemIndex,
  disabled = false,
  "data-testid": dataTestId,
  className,
  selectedItemIndex,
  width = "100%",
  itemClassName,
  languageCode = "en",
}: Props) => {
  const { themeClassName } = useTheme(styles);
  const [canAnimate, setCanAnimate] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [rootWidth, setRootWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const selectedBackgroundTranslateX =
    (languageCode === "fa" ? -1 : 1) * itemWidth * activeItemIndex;
  const isActiveIndexValid = activeItemIndex >= 0;

  useLayoutEffect(() => {
    if (ref.current) {
      // We use rounded width to prevent selected item background from having subpixel width
      const roundedWidth = Math.round(ref.current.offsetWidth);

      setRootWidth(roundedWidth);
      setItemWidth((roundedWidth - 2 * ROOT_PADDING) / items.length);

      ref.current.style.width = `${roundedWidth}px`;
    }
  }, [ref, items]);

  useEffect(() => {
    if (!isActiveIndexValid) {
      return;
    }
    const timeoutId = setTimeout(() => {
      // We need to wait for the first render to finish before we can start the transition
      // Otherwise we will see the transition on the first render if selectedItemIndex is not 0
      setCanAnimate(true);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isActiveIndexValid]);

  return (
    <div
      className={cn(
        themeClassName("root"),
        disabled && styles.disabled,
        className,
      )}
      ref={ref}
      style={{
        width: rootWidth || width,
      }}
    >
      {canAnimate && (
        <div
          className={themeClassName("selectedItemBackground")}
          style={{
            transform: `translateX(${selectedBackgroundTranslateX}px)`,
            width: itemWidth,
          }}
        />
      )}
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            themeClassName("item"),
            { [themeClassName("selectedItem")]: activeItemIndex === index },
            itemClassName,
          )}
          onClick={() => onChange(index)}
          data-testid={`${dataTestId}-item-${index}`}
        >
          <div className={themeClassName("itemContent")}>
            {item}
            {selectedItemIndex === index && (
              <span className={styles.dot}>&nbsp;•</span>
            )}
          </div>
          {/* Used to prevent component from jumping when font weight changes */}
          <div className={themeClassName("invisibleItemContent")}>{item}</div>
        </div>
      ))}
    </div>
  );
};
