import { css } from "@linaria/core";

const apple = css`
  padding-inline: 16px;
`;

const material = css``;

const header = css`
  .${apple} & {
    color: var(--tg-theme-hint-color);
    text-transform: uppercase;
    font-size: 13px;
    line-height: 18px;
    font-family: -apple-system, sans-serif;
    padding: 30px 16px 4px;
  }

  .${material} & {
    color: var(--tg-theme-link-color);
    padding: 20px 16px 4px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
  }
`;

const container = css`
  .${material} & {
    background: var(--tg-theme-bg-color);
  }
`;

const children = css`
  .${apple} & {
    background: var(--tg-theme-bg-color);
    border-radius: 10px;
  }
`;

const description = css`
  .${apple} & {
    color: var(--tg-theme-hint-color);
    font-family: -apple-system, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    padding: 6px 16px;
  }

  .${material} & {
    color: var(--tg-theme-hint-color);
    padding: 10px 16px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export default { apple, material, header, container, children, description };
