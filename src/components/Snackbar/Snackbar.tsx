import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import { Banner, BannerProps } from "../Banner/Banner";

import { useDidMount } from "hooks/useDidMount";
import { useTheme } from "hooks/useTheme";

import styles from "./Snackbar.module.scss";
import WebApp from "@twa-dev/sdk";

export type SnackRefCurrentProps = {
  shake: () => void;
};

type SnackbarRef = MutableRefObject<SnackRefCurrentProps | null>;

export interface SnackbarProps {
  showDuration?: number;
  onShow?: VoidFunction;
  onHide?: VoidFunction;
  snackbarRef?: SnackbarRef;
  text?: ReactNode;
  title?: ReactNode;
  action?: ReactNode;
  actionPosition?: "bottom" | "end";
  shakeOnShow?: boolean;
  icon?: BannerProps["icon"];
}

const Snackbar = ({
  text,
  title,
  snackbarRef,
  showDuration = 3000,
  onShow,
  onHide,
  action,
  actionPosition = "end",
  shakeOnShow,
  icon,
}: SnackbarProps) => {
  const { themeClassName } = useTheme(styles);

  const [shown, setShown] = useState(true);
  const [hiding, setHiding] = useState(false);
  const [doShake, setDoShake] = useState(false);
  const hideTimeoutRef = useRef<number>();
  const requestAnimationFrameRef = useRef<number>();
  const hidingTimeoutRef = useRef<number>();

  const shake = () => {
    setDoShake(false);
    requestAnimationFrame(() => {
      setDoShake(true);
    });
    WebApp.HapticFeedback.notificationOccurred("error");
  };

  useDidMount(() => {
    typeof onShow === "function" && onShow();
    if (shakeOnShow) {
      shake();
    }
  });

  useEffect(() => {
    clearTimeout(hideTimeoutRef.current);

    if (showDuration || doShake) {
      hideTimeoutRef.current = window.setTimeout(() => {
        setShown(false);

        requestAnimationFrameRef.current = requestAnimationFrame(() => {
          setHiding(true);

          hidingTimeoutRef.current = window.setTimeout(() => {
            setShown(false);
            setHiding(false);
            typeof onHide === "function" && onHide();
          }, 300);
        });
      }, showDuration);
    }

    return () => {
      clearTimeout(hideTimeoutRef.current);
      clearTimeout(hidingTimeoutRef.current);

      if (requestAnimationFrameRef.current) {
        cancelAnimationFrame(requestAnimationFrameRef.current);
      }
    };
  }, [showDuration, onHide, doShake]);

  useEffect(() => {
    if (snackbarRef) {
      snackbarRef.current = {
        shake,
      };
    }
    return () => {
      if (snackbarRef) {
        snackbarRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, [snackbarRef]);

  if (shown || hiding) {
    return (
      <div
        className={classNames(
          themeClassName("root"),
          shown && styles.shown,
          hiding && styles.hiding,
        )}
      >
        <div
          className={classNames(doShake && styles.shake)}
          onAnimationEnd={() => setDoShake(false)}
        >
          <Banner
            text={text}
            title={title}
            action={action}
            actionPosition={actionPosition}
            appearance="toast"
            icon={icon}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Snackbar;
