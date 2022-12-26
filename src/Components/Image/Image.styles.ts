import { css } from "@linaria/core";

const root = css`
  opacity: 0;
  transition: opacity 0.25s ease;
`;

const loaded = css`
  opacity: 1;
`;

export default { root, loaded };
