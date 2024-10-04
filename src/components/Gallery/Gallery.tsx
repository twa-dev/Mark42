import {
  Children,
  CSSProperties,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import {
  PageControl,
  TPageControl,
} from "../Gallery/components/PageControl/PageControl";

import { useEffectEvent } from "hooks/useEffectEvent";
import { useDidMount } from "hooks/useDidMount";
import { useTimeout } from "hooks/useTimeout";

import styles from "./Gallery.module.scss";

type GalleryProps = {
  initialSlideIndex?: number;
  onChange?: (slideIndex: number) => void;
  onReady?: (slideIndex: number) => void;
  className?: string;
  renderPageControl?: (props: TPageControl) => ReactElement<TPageControl>;
  autoplay?: boolean;
  autoplayDuration?: number;
  freeze?: boolean;
  slideWidth?: CSSProperties["width"];
  slidesGap?: number;
  slidesInlinePadding?: number;
  children: ReactNode;
};

export const Gallery = ({
  children,
  onChange,
  initialSlideIndex = 0,
  className,
  renderPageControl,
  autoplay = false,
  autoplayDuration = 2000,
  slidesGap = 0,
  slidesInlinePadding = 0,
  slideWidth = "100%",
  freeze,
  onReady,
}: GalleryProps) => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [ready, setReady] = useState(initialSlideIndex === 0);
  const [setScrollHandler] = useTimeout();

  const slidesCount = Children.count(children);

  const slideTo = useCallback(
    (slideIndex: number, behavior: ScrollBehavior = "auto") => {
      if (
        slidesRef.current &&
        slideIndex >= 0 &&
        slideIndex < slidesCount &&
        slideIndex !== activeSlideIndex
      ) {
        slidesRef.current.scrollTo({
          left: slidesRef.current.offsetWidth * slideIndex,
          behavior,
        });
      }
    },
    [activeSlideIndex, slidesCount],
  );

  const nextSlide = useCallback(() => {
    if (activeSlideIndex === slidesCount - 1) {
      slideTo(0, "smooth");
      return;
    }

    slideTo(activeSlideIndex + 1, "smooth");
  }, [activeSlideIndex, slideTo, slidesCount]);

  const scrollHandler = () => {
    if (slidesRef.current) {
      const arrOfLefts = Array.from(slidesRef.current.children).map((item) =>
        Math.abs(item.getBoundingClientRect().left),
      );
      const activeSlideIndex = arrOfLefts.indexOf(Math.min(...arrOfLefts));
      onChange && onChange(activeSlideIndex);
      setActiveSlideIndex(activeSlideIndex);
    }
  };

  const debouncedScrollHandler = useEffectEvent(() =>
    setScrollHandler(scrollHandler, 50),
  );

  useDidMount(() => {
    slideTo(initialSlideIndex);
    requestAnimationFrame(() => setReady(true));
    onReady && onReady(initialSlideIndex);
  });

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (autoplay) {
      intervalRef.current = setInterval(nextSlide, autoplayDuration);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoplay, autoplayDuration, nextSlide]);

  return (
    <>
      <div
        className={classNames(
          styles.root,
          ready && styles.ready,
          freeze && styles.freeze,
          className,
        )}
      >
        <div
          className={styles.slides}
          style={{ gap: slidesGap }}
          onScroll={debouncedScrollHandler}
          ref={slidesRef}
        >
          {Children.map(children, (child, index) => {
            return (
              <div
                key={index}
                className={styles.slide}
                style={{
                  paddingInlineStart: slidesInlinePadding,
                  marginInlineStart: index > 0 ? -slidesInlinePadding : 0,
                  paddingInlineEnd: slidesInlinePadding,
                  marginInlineEnd:
                    index < Children.count(children) - 1
                      ? -slidesInlinePadding
                      : 0,
                  width: slideWidth,
                  flexBasis: slideWidth,
                  boxSizing:
                    Children.count(children) > 1 ? "content-box" : "border-box",
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      {renderPageControl &&
        !freeze &&
        renderPageControl({
          activeIndex: activeSlideIndex,
          count: slidesCount,
          type: autoplay ? "progress" : "regular",
          durationTime: autoplayDuration,
        })}
    </>
  );
};

Gallery.PageControl = PageControl;
