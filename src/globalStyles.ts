import { css } from "@linaria/core";

export const globalStyles = css`
  & {
    -webkit-font-smoothing: antialiased;
  }

  &[data-theme="apple"][data-color-scheme="light"] {
    --mk42-separator-color: #c8c7cb;
    --mk42-main-button-disabled-color: #e8e8e9;
    --mk42-button-confirm-color: #34c759;
  }

  &[data-theme="apple"][data-color-scheme="dark"] {
    --mk42-separator-color: #3d3d3f;
    --mk42-main-button-disabled-color: #2f2f2f;
    --mk42-button-confirm-color: #30d158;
  }

  &[data-theme="material"][data-color-scheme="light"] {
    --mk42-separator-color: #d9d9d9;
    --mk42-main-button-disabled-color: #e9e8e8;
    --mk42-button-confirm-color: #31b545;
  }

  &[data-theme="material"][data-color-scheme="dark"] {
    --mk42-separator-color: #000000;
    --mk42-main-button-disabled-color: #3c3c3e;
    --mk42-button-confirm-color: #31b545;
  }
`;
