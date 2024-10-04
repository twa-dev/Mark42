import { ChangeEvent, forwardRef } from "react";
import cn from "classnames";

import { MaterialText } from "../../Text/MaterialText/MaterialText";

import { setRef } from "utils/setRef";

import { TextArea } from "../TextArea/TextArea";
import type { CommonTextFieldProps } from "../types";

import { ReactComponent as MagnifySVG } from "images/magnify.svg";

import styles from "./MaterialTextField.module.scss";

type MaterialAdditionalTextFieldProps = {
  error?: boolean;
};
type MaterialVariantTextFieldProps =
  | {
      variant?: "outlined";
      hint?: never;
    }
  | {
      variant: "lined";
      hint?: string;
    };

export type MaterialDistinctTextFieldProps = MaterialAdditionalTextFieldProps &
  MaterialVariantTextFieldProps;

export type MaterialTextFieldProps = MaterialDistinctTextFieldProps &
  CommonTextFieldProps;

export const MaterialTextField = forwardRef(
  (
    {
      variant = "outlined",
      label,
      hint,
      className,
      error = false,
      type,
      onChange = () => {},
      value,
      ...rest
    }: MaterialTextFieldProps,
    ref: React.ForwardedRef<HTMLTextAreaElement | HTMLInputElement> | null,
  ) => {
    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      onChange(e.target.value);
    };
    return (
      <MaterialText
        variant="body"
        Component="label"
        color="text"
        weight="regular"
        className={cn(styles.root, className, {
          [styles.outlined]: variant === "outlined",
          [styles.lined]: variant === "lined",
          [styles.error]: error,
          [styles.empty]: !value,
          [styles.search]: type === "search",
        })}
      >
        {rest.multiline ? (
          <TextArea
            {...rest}
            aria-label={label}
            onChange={handleChange}
            className={styles.input}
            value={value}
            ref={(el) => {
              setRef(ref, el);
            }}
          />
        ) : (
          <input
            {...rest}
            aria-label={label}
            type={type === "password" ? "password" : "text"}
            onChange={handleChange}
            className={styles.input}
            value={value}
            ref={(el) => {
              setRef(ref, el);
            }}
          />
        )}
        {type === "search" && <MagnifySVG className={styles.searchIcon} />}
        {label && <div className={styles.label}>{label}</div>}
        {variant === "lined" && hint && (
          <div className={styles.hint}>{hint}</div>
        )}
      </MaterialText>
    );
  },
);
