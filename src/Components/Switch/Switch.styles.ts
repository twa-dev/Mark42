import { css } from "@linaria/core";

const apple = css``;
const material = css``;

const root = css`
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  input {
    display: none;
  }
`;

const mark = css`
  position: relative;

  &::after {
    display: block;
    position: absolute;
    content: "";
    border-radius: 50%;
  }

  .${apple} & {
    width: 51px;
    height: 31px;
    border-radius: 25.5px;
    background: var(--mk42-main-button-disabled-color);
    transition: background-color 0.2s ease;

    &::after {
      width: 27px;
      height: 27px;
      top: 2px;
      left: 2px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      background: var(--tg-theme-bg-color);
      transition: transform 0.2s ease;
    }
  }

  .${apple} input:checked ~ & {
    background: var(--mk42-button-confirm-color);

    &::after {
      transform: translateX(20px);
    }
  }

  .${material} & {
    width: 32px;
    height: 14px;
    border-radius: 7px;
    background: var(--mk42-separator-color);
    transition: background-color 0.2s ease;

    &::after {
      width: 16px;
      height: 16px;
      top: -1px;
      left: 0;
      box-shadow: 0 0 0 2px var(--mk42-separator-color);
      background: var(--tg-theme-bg-color);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  }

  .${material} input:checked ~ & {
    background: var(--tg-theme-button-color);

    &::after {
      box-shadow: 0 0 0 2px var(--tg-theme-button-color);
      transform: translateX(16px);
    }
  }
`;

export default { apple, material, root, mark };
