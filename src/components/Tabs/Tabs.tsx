import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import Tappable from "../Tappable/Tappable";

import styles from "./Tabs.module.scss";

interface TabsProps {
  activeTabIndex: number;
  onChange: (index: number) => void;
  tabs: string[];
  disabled?: boolean;
  "data-testid"?: string;
  className?: string;
  selectedItemIndex?: number;
}

export const Tabs = ({
  activeTabIndex,
  onChange,
  tabs,
  disabled,
  "data-testid": dataTestId,
  className,
  selectedItemIndex,
}: TabsProps) => {
  const activeTabRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const [indicatorPosition, setIndicatorPosition] = useState<number>();
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorInited, setIndicatorInited] = useState(false);

  useLayoutEffect(() => {
    const activeTab = activeTabRef.current;
    const tabs = tabsRef.current;

    if (!activeTab || !tabs) {
      return;
    }

    const activeTabLeft = activeTab.getBoundingClientRect().left;
    const tabsLeft = tabs.getBoundingClientRect().left;

    setIndicatorWidth(activeTab.offsetWidth);
    setIndicatorPosition(activeTabLeft - tabsLeft);
  }, [activeTabIndex]);

  useEffect(() => {
    if (indicatorPosition !== undefined) {
      setIndicatorInited(true);
    }
  }, [indicatorPosition]);

  return (
    <div
      className={classNames(
        styles.tabs,
        disabled && styles.disabled,
        className,
      )}
      ref={tabsRef}
    >
      {tabs.map((tab, index) => (
        <Tappable
          Component={"button"}
          key={index}
          disabled={disabled}
          onClick={() => !disabled && onChange(index)}
          rootClassName={styles.tappable}
          className={styles.tappableContainer}
          data-testid={`${dataTestId}-item-${index}`}
          type="button"
        >
          <div
            className={classNames(
              styles.tab,
              activeTabIndex === index && styles.activeTab,
            )}
            ref={activeTabIndex === index ? activeTabRef : null}
          >
            {tab}
            {selectedItemIndex === index && (
              <span className={styles.dot}>&nbsp;•</span>
            )}
          </div>
        </Tappable>
      ))}
      <div
        className={classNames(
          styles.activeIndicator,
          indicatorInited && styles.activeIndicatorMounted,
        )}
        style={{
          transform: `translateX(${indicatorPosition}px)`,
          width: `${indicatorWidth}px`,
        }}
      ></div>
    </div>
  );
};
