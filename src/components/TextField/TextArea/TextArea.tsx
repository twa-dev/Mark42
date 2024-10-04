import { ChangeEvent, forwardRef, useEffect, useRef } from "react";
import cn from "classnames";

import { setRef } from "utils/setRef";

import styles from "./TextArea.module.scss";

type TextAreaProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = forwardRef(
  (
    { value, className, ...rest }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement> | null,
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
      }
    }, [value]);

    return (
      <textarea
        {...rest}
        className={cn(styles.textarea, className)}
        ref={(el) => {
          textAreaRef.current = el;
          setRef(ref, el);
        }}
        value={value}
        rows={1}
      />
    );
  },
);
