import { css } from "@linaria/core";

export const globalStyles = css`
  & {
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  &[data-theme="apple"][data-color-scheme="light"] {
    --mk42-separator-color: #c8c7cb;
    --mk42-main-button-disabled-color: #e8e8e9;
    --mk42-button-confirm-color: #34c759;
    --mk42-quaternary-fill-background: rgba(116, 116, 128, 0.08);
  }

  &[data-theme="apple"][data-color-scheme="dark"] {
    --mk42-separator-color: #3d3d3f;
    --mk42-main-button-disabled-color: #2f2f2f;
    --mk42-button-confirm-color: #30d158;
    --mk42-quaternary-fill-background: rgba(116, 116, 128, 0.12);
  }

  &[data-theme="material"][data-color-scheme="light"] {
    --mk42-separator-color: #d9d9d9;
    --mk42-main-button-disabled-color: #e9e8e8;
    --mk42-button-confirm-color: #31b545;
    --mk42-quaternary-fill-background: rgba(122, 122, 122, 0.18);
  }

  &[data-theme="material"][data-color-scheme="dark"] {
    --mk42-separator-color: #000000;
    --mk42-main-button-disabled-color: #3c3c3e;
    --mk42-button-confirm-color: #31b545;
    --mk42-quaternary-fill-background: rgba(122, 122, 122, 0.08);
  }
`;
