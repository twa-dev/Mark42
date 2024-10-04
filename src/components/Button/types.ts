import {
  AllHTMLAttributes,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

export type ButtonCommonProps = {
  appearance?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "overlay"
    | "transparent";
  shiny?: boolean;
  skeleton?: boolean;
  "data-testid"?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  disabled?: boolean;
  Component?: ElementType;
} & AllHTMLAttributes<HTMLElement>;
