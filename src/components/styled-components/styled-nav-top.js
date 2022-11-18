import styled from "styled-components";
import * as M from "./mixins";

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${M.marginLeftRight}
  margin-top: 3rem;
  margin-bottom: 6rem;
  font-size: 1.6rem;
  font-weight: bold;
  @media (max-width: 750px) {
    margin-bottom: 2rem;
    margin-top: 0;
  }
  @media (max-width: 750px) {
    margin-bottom: 0;
  }
`;

export const LogoWrap = styled.div`
  & svg {
    width: 30rem;
  }
`;

export const MenuListAndButton = styled.div`
  display: flex;
  gap: 5.2rem;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  text-transform: uppercase;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const MenuItem = styled.p`
  &:hover {
    opacity: 0.8;
  }
`;

export const MenuItemLoginWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  position: relative;
  &:hover > div {
    display: flex;
  }
  &:hover svg {
    transform: rotate(180deg) translate(0, 1px);
  }
`;

export const MenuItemLoginArrow = styled.div`
  & svg {
    width: 1.3rem;
    height: 1.2rem;
    transition: all 0.1s ease-in-out;
  }
`;

export const MenuItemLogin = styled.p`
  text-transform: uppercase;
  color: #39ee1b;
  cursor: pointer;
  z-index: 3;
`;

export const LoginDropdown = styled.div`
  width: 28rem;
  position: absolute;
  //   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  background: #1b1b1b;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  top: 1.5rem;
  left: -2rem;
  z-index: 2;
  display: none;
  cursor: pointer;
  & p {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuItemPopup = styled.p`
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
  & svg {
    width: 6rem;
  }
`;

export const BurgerPopupWrap = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  display: none;
  align-items: flex-start;
  flex-direction: column;
  gap: 4rem;
  min-width: 200px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  background: #212121;
  ${M.paddingsLeftRight}
  padding-top: 6rem;
  padding-bottom: 3rem;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const BurgerPopupClose = styled.div`
  cursor: pointer;
  & svg {
    width: 4rem;
  }
`;
