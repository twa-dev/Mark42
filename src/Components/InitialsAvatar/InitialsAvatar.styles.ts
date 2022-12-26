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
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export default { root, apple, material };
