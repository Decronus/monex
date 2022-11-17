import styled from "styled-components";
import * as M from "./mixins";

export const LoginPopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3rem;
  width: 600px;
  ${M.paddingsLeftRight}
  ${M.marginLeftRight}
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #212121;
  font-size: 3.2rem;
  @media (max-width: 800px) {
    text-align: left;
  }
  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const HeadingAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  & p {
    font-size: 4rem;
    font-weight: bold;
  }
`;

export const LogoWrap = styled.div`
  cursor: pointer;
  & svg {
    width: 100px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 10rem;
  background: #1b1b1b;
  border: none;
  outline: none;
  font-size: 3rem;
  ${M.paddingsLeftRight}
`;

export const ButtonAndReg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    font-size: 3rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;
