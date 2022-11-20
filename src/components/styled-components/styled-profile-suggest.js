import styled from "styled-components";
import * as M from "./mixins";

export const Wrap = styled.div`
  background: #212121;
  padding-top: 3.5rem;
  padding-bottom: 2.5rem;
  ${M.marginLeftRight}
  ${M.paddingsLeftRight}
  padding-right: 1rem;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr 0.5fr;
  align-items: center;
  font-size: 2.4rem;
  border-bottom: 1px #1b1b1b solid;
  @media (max-width: 666px) {
    grid-template-columns: 3fr 4fr 3fr 0.5fr;
  }
  @media (max-width: 500px) {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
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
  gap: 1rem;
`;

export const CityAndNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const CityIcon = styled.div`
  & svg {
    width: 2rem;
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
  max-width: 16rem;
  color: #6f6f6f;
  font-size: 1.8rem;
  margin-bottom: 0.7rem;
`;

export const ActionAndStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Action = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #39ee1b;
`;

export const StopIcon = styled.div`
  & svg {
    width: 3rem;
  }
`;

export const StartIcon = styled.div`
  & svg {
    width: 3rem;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover path {
    fill: #ffffff;
  }
`;

export const DeleteAndEdit = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  & svg {
    width: 3rem;
  }
  & svg:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    gap: 0rem;
  }
`;

export const Delete = styled.div`
  &:hover path {
    fill: #9c0303;
  }
`;

export const Edit = styled.div`
  &:hover path {
    fill: #d8c204;
  }
`;
