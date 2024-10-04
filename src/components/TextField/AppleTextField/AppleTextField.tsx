import { ChangeEvent, forwardRef } from "react";
import cn from "classnames";

import { AppleText } from "../../Text/AppleText/AppleText";

import { setRef } from "utils/setRef";

import { TextArea } from "../TextArea/TextArea";
import type { CommonTextFieldProps } from "../types";

import { ReactComponent as ClearAppleSVG } from "images/clear_apple.svg";
import { ReactComponent as SearchAppleSVG } from "images/search_apple.svg";

import styles from "./AppleTextField.module.scss";

const BackgroundColor = {
  tertiaryFill: "var(--tertiary-fill-background)",
  section: "var(--tg-theme-section-bg-color)",
} as const;

export type AppleDistinctTextFieldProps = {
  backgroundColor?: keyof typeof BackgroundColor;
  onClear?: () => void;
};

export type AppleTextFieldProps = AppleDistinctTextFieldProps &
  CommonTextFieldProps;

export const AppleTextField = forwardRef(
  (
    {
      type = "text",
      className,
      label,
      onClear,
      onChange = () => {},
      value,
      backgroundColor = "tertiaryFill",
      ...rest
    }: AppleTextFieldProps,
    ref: React.ForwardedRef<HTMLTextAreaElement | HTMLInputElement> | null,
  ) => {
    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      onChange(e.target.value);
    };

    return (
      <AppleText
        variant="body"
        weight="regular"
        className={cn(styles.root, className, {
          [styles.text]: type === "text" || type === "password",
          [styles.search]: type === "search",
          [styles.empty]: !value,
        })}
        style={
          {
            "--input-bg-color": BackgroundColor[backgroundColor],
          } as React.CSSProperties
        }
      >
        {rest.multiline ? (
          <TextArea
            {...rest}
            aria-label={label}
            onChange={handleChange}
            className={styles.input}
            value={value}
            placeholder={label}
            ref={(el) => {
              setRef(ref, el);
            }}
          />
        ) : (
          <input
            {...rest}
            aria-label={label}
            onChange={handleChange}
            type={type === "password" ? "password" : "text"}
            className={styles.input}
            placeholder={label}
            value={value}
            ref={(el) => {
              setRef(ref, el);
            }}
          />
        )}
        {type === "search" && (
          <SearchAppleSVG className={cn(styles.icon, styles.searchIcon)} />
        )}

        {onClear && (
          <button
            type="button"
            className={cn(styles.icon, styles.clearButtonIcon)}
            onClick={onClear}
          >
            <ClearAppleSVG />
          </button>
        )}
      </AppleText>
    );
  },
);
