import styled from "styled-components";
import * as M from "./mixins";

export const SuggestPopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
`;

export const SuggestPopupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5rem;
  width: 768px;
  ${M.paddingsLeftRight}
  ${M.marginLeftRight}
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #1b1b1b;
  font-size: 3.2rem;
  @media (max-width: 800px) {
    text-align: left;
  }
  @media (max-width: 768px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    max-width: 320px;
  }
`;

export const NameAndRateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameAndCityGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & p {
    font-weight: bold;
  }
`;

export const IconAndCityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.4rem;
`;

export const RateAndLimitGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > p:first-child {
    font-weight: bold;
    color: #39ee1b;
  }
  & > p:last-child {
    font-size: 2.4rem;
    color: #6f6f6f;
  }
  gap: 0.5rem;
`;

export const SuggestDesctription = styled.p`
  font-size: 2.4rem;
`;
