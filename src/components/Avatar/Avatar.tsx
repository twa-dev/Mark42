import { CSSProperties, forwardRef } from "react";
import classNames from "classnames";

import { Image } from "../Image/Image";

import styles from "./Avatar.module.scss";

interface AvatarProps {
  size?: number;
  src?: string;
  className?: string;
  style?: CSSProperties;
  shape?: "circle" | "rounded";
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = 40, className, style, src, shape = "circle" }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.root,
          shape === "circle" && styles.shapeCircle,
          shape === "rounded" && styles.shapeRounded,
          className,
        )}
        style={{
          width: size,
          height: size,
          ...style,
        }}
      >
        <Image src={src} className={styles.img} />
      </div>
    );
  },
);

export default Avatar;
