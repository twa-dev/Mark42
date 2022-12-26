import { FC, memo } from "react";
import styles from "./ImageAvatar.styles";
import { Avatar, AvatarProps } from "../Avatar";
import { Image } from "../Image";

export interface ImageAvatarProps extends AvatarProps {
  src?: string;
  alt?: string;
}

export const ImageAvatar: FC<ImageAvatarProps> = memo<ImageAvatarProps>(
  ({ src, alt, size = 40, ...restProps }) => {
    return (
      <Avatar size={size} {...restProps}>
        <Image src={src} alt={alt} className={styles.img} />
      </Avatar>
    );
  }
);

ImageAvatar.defaultProps = {
  size: 40,
};

ImageAvatar.displayName = "ImageAvatar";
