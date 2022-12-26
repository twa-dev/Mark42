import { AppearanceProps, BaseComponentProps } from "../../types";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Avatar.styles";

export interface AvatarProps extends AppearanceProps, BaseComponentProps {
  size?: number;
  children?: ReactNode;
}

export const Avatar: FC<AvatarProps> = ({
  size,
  className,
  style,
  children,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        ...style,
      }}
      className={classNames(styles.root, className)}
    >
      {children}
    </div>
  );
};
