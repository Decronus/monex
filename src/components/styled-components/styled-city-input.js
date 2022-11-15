import styled from "styled-components";

export const CityInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
  }
  width: 100%;
`;

export const CityInput = styled.select`
  width: 100%;
  height: 10rem;
  background: none;
  border: none;
  //   appearance: none;
  outline: none;
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: bold;
  background: #212121;
`;

export const DownArrowSvg = styled.div`
  position: absolute;
  top: 30%;
  right: 0rem;
  pointer-events: none;
  & svg {
    width: 2.2rem;
  }
`;
