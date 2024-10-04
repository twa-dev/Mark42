import {
  createElement,
  CSSProperties,
  ElementType,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import classNames from "classnames";

import Tappable from "../../Tappable/Tappable";

import { useTheme } from "hooks/useTheme";

import { highlightAnimation } from "utils/animations";

import { CellBanner } from "./components/CellBanner/CellBanner";
import { CellList } from "./components/CellList/CellList";
import { CellPart } from "./components/CellPart/CellPart";
import { CellText } from "./components/CellText/CellText";

import { ReactComponent as ChevronSVG } from "images/chevron.svg";

import styles from "./Cell.module.scss";

export type CellRef = {
  highlight: () => Promise<unknown>;
};

export type CellProps = {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
  /**
   * Cell.Part is preferred
   */
  start?: ReactNode;
  /**
   * CellText is preferred
   */
  children?: ReactNode;
  /**
   * Cell.Part or Cell.Text are preferred
   */
  end?: ReactNode;
  tappable?: boolean;
  /**
   * Use this prop to force separator visibility.
   * Otherwise, wrap Cells by Cell.List, that places separators automatically
   */
  separator?: boolean;
  chevron?: boolean;
  Component?: ElementType;
  onClick?: MouseEventHandler;
};

const CellComponent = forwardRef<CellRef, CellProps>(
  (
    {
      className,
      start,
      children,
      end,
      tappable,
      Component = "div",
      separator,
      chevron,
      ...restProps
    }: CellProps,
    ref,
  ) => {
    const { themeClassName } = useTheme(styles);
    const rootRef = useRef<Element>(null);

    const childrenComponent = (
      <>
        {start && <div className={themeClassName("start")}>{start}</div>}
        <div
          className={classNames(
            themeClassName("container"),
            !chevron && !end && themeClassName("onlyChildren"),
          )}
        >
          {children}
          {end && <div className={themeClassName("end")}>{end}</div>}
          {chevron && <ChevronSVG className={themeClassName("chevron")} />}
        </div>
      </>
    );

    useImperativeHandle(ref, () => {
      return {
        highlight: async () => {
          return await rootRef.current?.animate(highlightAnimation, {
            delay: 800,
            duration: 800,
            easing: "linear",
            fill: "backwards",
          }).finished;
        },
      };
    }, []);

    if (tappable) {
      return (
        <>
          {createElement(
            Tappable,
            {
              Component,
              rootClassName: classNames(styles.tappable, className),
              className: classNames(
                themeClassName("root"),
                separator && styles.separator,
              ),
              ref: rootRef,
              ...restProps,
            },
            childrenComponent,
          )}
        </>
      );
    } else {
      return (
        <Component
          className={classNames(
            themeClassName("root"),
            separator && styles.separator,
            className,
          )}
          ref={rootRef}
          {...restProps}
        >
          {childrenComponent}
        </Component>
      );
    }
  },
);

export const Cell = Object.assign(CellComponent, {
  Text: CellText,
  Banner: CellBanner,
  Part: CellPart,
  List: CellList,
});
