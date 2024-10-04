import { ComponentProps } from "react";

type CommonProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
} & Omit<ComponentProps<"input">, "value" | "onChange" | "ref" | "placeholder">;

type MultilineTextFieldProps = {
  type?: "text";
  multiline: true;
};

type SingleLineTextFieldProps = {
  type?: "search" | "password" | "text";
  multiline?: false;
};

export type CommonTextFieldProps = CommonProps &
  (MultilineTextFieldProps | SingleLineTextFieldProps);
