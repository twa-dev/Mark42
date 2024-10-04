import { clamp } from 'lodash-es';

type Props = {
  progress?: number;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
};

export const ProgressCircle = (props: Props) => {
  const {
    size = 16,
    primaryColor = 'var(--tg-theme-accent-text-color)',
    secondaryColor = 'var(--tg-theme-secondary-bg-color)',
    className,
  } = props;
  const progress = clamp(props.progress ?? 0, 0, 1);

  const center = size / 2;
  const circleRadius = center * 0.75;
  const strokeWidth = size * 0.1;
  const circumference = 2 * Math.PI * circleRadius;
  const progressStrokeSize = ((100 - progress * 100) * circumference) / 100;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ rotate: '-90deg' }}
      className={className}
    >
      <circle
        r={circleRadius}
        cx={center}
        cy={center}
        fill="none"
        stroke={secondaryColor}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
      ></circle>
      <circle
        r={circleRadius}
        cx={center}
        cy={center}
        fill="none"
        stroke={primaryColor}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressStrokeSize}
      ></circle>
    </svg>
  );
};
