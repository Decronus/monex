import styled from "styled-components";
import * as M from "./mixins";

export const MainHeadingAndCurrencies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  ${M.marginLeftRight}
  margin-bottom: 7rem;
  @media (max-width: 750px) {
    margin-bottom: 2rem;
  }
`;

export const MainHeading = styled.h1`
  font-size: 6.4rem;
  @media (max-width: 750px) {
    line-height: 130%;
  }
  @media (max-width: 400px) {
    font-size: 5rem;
  }
`;
