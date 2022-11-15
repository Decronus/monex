import styled from "styled-components";
import * as M from "./mixins";

export const MainHeadingAndCurrencies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  ${M.paddingsLeftRight}
  margin-bottom: 7rem;
`;

export const MainHeading = styled.h1`
  font-size: 6.4rem;
`;
