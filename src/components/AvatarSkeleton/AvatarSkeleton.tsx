import classNames from 'classnames';

import styles from './AvatarSkeleton.module.scss';

interface AvatarProps {
  size?: number;
  className?: string;
  shape?: 'circle' | 'rounded';
}

export const AvatarSkeleton = ({
  size = 40,
  className,
  shape = 'circle',
}: AvatarProps) => {
  return (
    <div
      className={classNames(
        styles.root,
        shape === 'circle' && styles.shapeCircle,
        shape === 'rounded' && styles.shapeRounded,
        className,
      )}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
