import { CSSProperties } from 'react';
import Lottie from 'lottie-react';

import SpinnerAnimationData from './animation.json';

const SpinnerAnimation = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div className={className} style={style}>
      <Lottie
        loop
        autoplay
        alt="action-button-spinner"
        animationData={SpinnerAnimationData}
      />
    </div>
  );
};

export default SpinnerAnimation;
