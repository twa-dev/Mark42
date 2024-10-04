import {
  cloneElement,
  forwardRef,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import {
  autoUpdate,
  flip,
  FloatingOverlay,
  FloatingPortal,
  offset,
  Padding,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";

import Tappable from "../Tappable/Tappable";

import { useTheme } from "hooks/useTheme";

import { animate } from "utils/spring";

import styles from "./DropdownList.module.scss";
import WebApp from "@twa-dev/sdk";

interface Props {
  children: ReactNode;
  options: { before: ReactNode; after?: ReactNode; onClick: () => void }[];
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerRef?: MutableRefObject<Element | null>;
  floatingShiftPadding?: Padding;
  floatingOffset?: number;
  itemMinWidth?: number;
}

const DropdownList = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      options,
      open: outerOpen,
      onOpenChange: onOpenOuterChange,
      placement = "bottom",
      triggerRef,
      floatingShiftPadding = 0,
      floatingOffset = 12,
      itemMinWidth = 250,
    },
    ref,
  ) => {
    const { themeClassName } = useTheme(styles);
    const floatingRef = useRef<HTMLElement | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const [innerOpen, setInnerOpen] = useState(false);

    const open = outerOpen || innerOpen;

    const handleOpenChange = (open: boolean) => {
      if (onOpenOuterChange) {
        onOpenOuterChange(open);
      } else {
        setInnerOpen(open);
      }

      setIsAnimating(true);

      animate({
        duration: 1000,
        draw: ({ progress, isDone }) => {
          if (isDone) {
            setIsAnimating(false);
          }

          if (floatingRef && floatingRef.current) {
            floatingRef.current.style.opacity = open
              ? String(progress)
              : String(1 - progress);
            floatingRef.current.style.transform = open
              ? `scale(${0.3 + 0.7 * progress})`
              : `scale(${0.3 + 0.7 * (1 - progress)})`;
          }
        },
      });
    };

    const { x, y, refs, strategy, context } = useFloating({
      open,
      onOpenChange: handleOpenChange,
      middleware: [
        offset(floatingOffset),
        flip({
          crossAxis: false, // should be disabled if used with shift, see https://floating-ui.com/docs/flip#combining-with-shift
        }),
        {
          name: "custom",
          fn(args) {
            if (
              args.rects.reference.y + args.rects.floating.height >
                WebApp.viewportStableHeight &&
              args.placement === "bottom"
            ) {
              return {
                reset: {
                  placement: "top",
                },
              };
            }
            return {};
          },
        },
        shift({ padding: floatingShiftPadding }),
      ],
      placement,
      whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context, {
        enabled: !onOpenOuterChange,
      }),
      useDismiss(context, {
        enabled: !onOpenOuterChange,
      }),
    ]);

    return (
      <>
        {cloneElement(children as ReactElement, {
          ...getReferenceProps({
            ref: (node) => {
              refs.setReference(node);

              if (triggerRef) {
                triggerRef.current = node;
              }
            },
          }),
        })}
        <FloatingPortal>
          {(open || (!open && isAnimating)) && (
            <FloatingOverlay
              lockScroll
              style={{
                zIndex: 1000,
              }}
            >
              <div
                {...getFloatingProps({
                  ref: (node) => {
                    refs.setFloating(node);
                    floatingRef.current = node;

                    if (typeof ref === "function") {
                      ref(node);
                    } else if (ref) {
                      ref.current = node;
                    }
                  },
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    minWidth: itemMinWidth,
                  },
                })}
                className={themeClassName("popover")}
              >
                {options.map(({ onClick, before, after }, index) => (
                  <Tappable
                    key={index}
                    Component="button"
                    onClick={() => {
                      onClick();
                      handleOpenChange(false);
                    }}
                    rootClassName={themeClassName("optionContainer")}
                    className={themeClassName("option")}
                  >
                    <div>{before}</div>
                    <div>{after}</div>
                  </Tappable>
                ))}
              </div>
            </FloatingOverlay>
          )}
        </FloatingPortal>
      </>
    );
  },
);

export default DropdownList;
