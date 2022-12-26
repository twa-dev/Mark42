import {
  FC,
  ImgHTMLAttributes,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";
import { BaseComponentProps } from "../../types";
import styles from "./Image.styles";
import classNames from "classnames";

function isAlreadyLoaded(src: string): boolean {
  const image = new window.Image();
  image.src = src;

  return image.complete;
}

export interface ImageProps
  extends BaseComponentProps,
    ImgHTMLAttributes<HTMLImageElement> {}

export const Image: FC<ImageProps> = ({
  className,
  onLoad,
  alt,
  ...restProps
}) => {
  const [isLoaded, setIsLoaded] = useState(
    isAlreadyLoaded(restProps.src || "")
  );

  const onLoadHandler = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      setIsLoaded(true);
      onLoad && onLoad(e);
    },
    [onLoad]
  );

  return (
    <img
      {...restProps}
      className={classNames(styles.root, isLoaded && styles.loaded, className)}
      onLoad={onLoadHandler}
      alt={alt}
    />
  );
};
