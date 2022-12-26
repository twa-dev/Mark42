import { css } from "@linaria/core";
import avatarStyles from "../Avatar/Avatar.styles";

const apple = css`
  padding-inline-start: 16px;
  font-family: "-apple-system", sans-serif;
`;

const material = css`
  padding-inline-start: 16px;
  font-family: "Roboto", sans-serif;
`;

const before = css`
  flex-shrink: 0;

  .${avatarStyles.root} {
    margin: 10px 0;
    margin-inline-end: 10px;
  }
`;

const container = css`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-grow: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--mk42-separator-color);

    @media (min-resolution: 2dppx) {
      transform: scaleY(0.5);
    }

    @media (min-resolution: 3dppx) {
      transform: scaleY(0.33);
    }
  }

  .${apple} & {
    padding-inline-end: 16px;
  }

  .${material} & {
    padding-inline-end: 16px;
  }
`;

const content = css`
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
`;

const after = css`
  flex-shrink: 0;
`;

const children = css`
  font-size: 16px;
  line-height: 20px;
  color: var(--tg-theme-text-color);

  .${apple} & {
    padding-top: 10px;

    &:only-child {
      padding: 12px 0;
    }
  }

  .${material} & {
    padding-top: 13px;

    &:only-child {
      padding: 15px 0;
    }
  }
`;

const description = css`
  margin-top: 2px;
  color: var(--tg-theme-hint-color);

  .${apple} & {
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 10px;
  }

  .${material} & {
    font-size: 15px;
    line-height: 18px;
    padding-bottom: 11px;
  }
`;

const root = css`
  display: flex;
  align-items: stretch;

  &:last-child .${container}::after {
    display: none;
  }
`;

export default {
  apple,
  material,
  root,
  before,
  after,
  content,
  container,
  children,
  description,
};
