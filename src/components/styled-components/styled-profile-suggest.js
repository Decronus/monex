import styled from "styled-components";
import * as M from "./mixins";

export const Wrap = styled.div`
  background: #212121;
  padding: 2.5rem 6rem;
  ${M.marginLeftRight}
  display: grid;
  grid-template-columns: 2fr 7fr 2fr 0.5fr;
  align-items: center;
  font-size: 2.4rem;
  @media (max-width: 666px) {
    grid-template-columns: 3fr 5fr 2.5fr 1fr;
  }
  border-bottom: 1px #1b1b1b solid;
`;

export const CurrencyAndLimitWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Currency = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 0.07em;
  color: #ffffff;
`;

export const Limit = styled.p`
  color: #6f6f6f;
  font-size: 1.8rem;
`;

export const CityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CityAndNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const CityIcon = styled.div`
  & svg {
    width: 2.4rem;
  }
`;

export const City = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  color: #ffffff;
`;

export const Name = styled.p`
  color: #6f6f6f;
  font-size: 1.8rem;
`;

export const Status = styled.p`
  color: #6f6f6f;
  font-size: 1.8rem;
`;

export const Action = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #39ee1b;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

export const StopIcon = styled.div``;
