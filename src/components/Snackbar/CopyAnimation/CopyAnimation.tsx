import { CSSProperties } from "react";
import Lottie from "lottie-react";

import CopyAnimationData from "./animation.json";

const CopyAnimation = ({
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
        alt="copy-animation"
        animationData={CopyAnimationData}
      />
    </div>
  );
};

export default CopyAnimation;
