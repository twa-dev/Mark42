import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './ButtonGroup.module.scss';

export const ButtonGroup = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div style={style} className={classNames(styles.root, className)}>
      {children}
    </div>
  );
};
