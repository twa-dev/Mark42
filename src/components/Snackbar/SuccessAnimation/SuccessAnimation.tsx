import { CSSProperties } from "react";
import Lottie from "lottie-react";

import SuccessAnimationData from "./animation.json";

const SuccessAnimation = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div className={className} style={style}>
      <Lottie
        autoplay
        loop={false}
        alt="success-animation"
        animationData={SuccessAnimationData}
      />
    </div>
  );
};

export default SuccessAnimation;
