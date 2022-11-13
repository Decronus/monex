import styled from "styled-components";

export const CityInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
  }
`;

export const CityInput = styled.select`
  width: 539px;
  height: 12rem;
  background: none;
  border: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  font-size: 2.4rem;
  @media (max-width: 1240px) {
    width: 340px;
  }
  @media (max-width: 1000px) {
    width: 240px;
  }
  @media (max-width: 820px) {
    width: 200px;
  }
`;

export const DownArrowSvg = styled.div`
  position: absolute;
  top: 30%px;
  right: 0;
  pointer-events: none;
  & svg {
    width: 2.2rem;
  }
`;
