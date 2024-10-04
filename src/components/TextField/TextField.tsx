import { forwardRef } from "react";

import { useTheme } from "hooks/useTheme";

import {
  AppleDistinctTextFieldProps,
  AppleTextField,
} from "./AppleTextField/AppleTextField";
import {
  MaterialDistinctTextFieldProps,
  MaterialTextField,
} from "./MaterialTextField/MaterialTextField";
import type { CommonTextFieldProps } from "./types";

type TextFieldProps = {
  apple?: AppleDistinctTextFieldProps;
  material?: MaterialDistinctTextFieldProps;
} & CommonTextFieldProps;

export const TextField = forwardRef(
  (
    { apple, material, ...restProps }: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement> | null,
  ) => {
    const theme = useTheme();

    if (theme === "apple") {
      return <AppleTextField {...apple} {...restProps} ref={ref} />;
    }
    return <MaterialTextField {...material} {...restProps} ref={ref} />;
  },
);
