import { ImgHTMLAttributes, useState } from "react";
import classNames from "classnames";

import styles from "./Image.module.scss";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const isInCache = ({ src, srcSet }: ImageProps): boolean => {
  if (!src && !srcSet) return false;

  const img = new window.Image();
  if (src) img.src = src;
  if (srcSet) img.srcset = srcSet;

  const { complete } = img;

  // immediately set src/srcset to empty strings to avoid actually loading the image
  img.src = "";
  img.srcset = "";

  return complete;
};

export const Image = ({ className, onLoad, ...restProps }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(() => isInCache(restProps));

  return (
    <img
      onLoad={(event) => {
        setIsLoaded(true);
        onLoad?.(event);
      }}
      className={classNames(styles.root, isLoaded && styles.loaded, className)}
      {...restProps}
    />
  );
};
