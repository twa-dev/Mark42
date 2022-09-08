import { css } from "@linaria/core";

const apple = css`
  font-family: "ui-rounded", sans-serif;
  font-weight: 700;
`;
const material = css`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const root = css`
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size);
  line-height: var(--font-size);
`;

export default { root, apple, material };
