import { useEffect, useRef } from "react";
import classNames from "classnames";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { useDidUpdate } from "hooks/useDidUpdate";
import { useEffectEvent } from "hooks/useEffectEvent";
import { useTheme } from "hooks/useTheme";

import CheckboxAndroidAnimationData from "./checkbox_android.json";
import CheckboxIosAnimationData from "./checkbox_ios.json";
import CheckmarkFallback from "./CheckmarkFallback";
import RadioAndroidAnimationData from "./radio_android.json";
import RadioIosAnimationData from "./radio_ios.json";

import styles from "./Checkmark.module.scss";

interface CheckmarkLottieProps {
  checked?: boolean;
  mode?: "radio" | "checkbox";
}

const CheckmarkLottie = ({ checked, mode = "radio" }: CheckmarkLottieProps) => {
  const { theme, themeClassName } = useTheme(styles);
  const ref = useRef<LottieRefCurrentProps>(null);

  useDidUpdate(() => {
    if (checked) {
      ref.current?.goToAndPlay(3, true);
    } else {
      ref.current?.stop();
    }
  }, [checked]);

  const onMount = useEffectEvent(() => {
    if (checked) {
      ref.current?.goToAndStop(29, true);
    }
  });
  useEffect(onMount, [onMount]);

  let data;

  if (theme === "material") {
    data =
      mode === "radio"
        ? RadioAndroidAnimationData
        : CheckboxAndroidAnimationData;
  } else {
    data = mode === "radio" ? RadioIosAnimationData : CheckboxIosAnimationData;
  }

  if (!checked) {
    return <CheckmarkFallback checked={checked} mode={mode} />;
  }

  return (
    <Lottie
      autoplay={false}
      className={classNames(
        themeClassName("root"),
        styles[mode],
        checked && styles.checked,
      )}
      lottieRef={ref}
      loop={false}
      alt="radio"
      animationData={data}
    />
  );
};

export default CheckmarkLottie;
