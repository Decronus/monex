import { css } from "styled-components";

export const paddingsLeftRight = css`
  padding-left: 6rem;
  padding-right: 6rem;
`;

export const marginLeftRight = css`
  margin-left: 6rem;
  margin-right: 6rem;
  @media (max-width: 500px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
