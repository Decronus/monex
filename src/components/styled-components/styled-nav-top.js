import styled from "styled-components";
import * as M from "./mixins";

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${M.marginLeftRight}
  padding-top: 3rem;
  margin-bottom: 6rem;
  font-size: 1.6rem;
  font-weight: bold;
  @media (max-width: 750px) {
    margin-bottom: 2rem;
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
  @media (max-width: 700px) {
    display: none;
  }
`;

export const MenuItem = styled.p`
  &:hover {
    border-bottom: 2px white solid;
    transform: translate(0, 1px);
  }
`;

export const MenuItemPopup = styled.p`
  font-size: 2.5rem;
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
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4rem;
  min-width: 200px;
  background: #212121;
  ${M.paddingsLeftRight}
  padding-top: 6rem;
  padding-bottom: 6rem;
  ${M.marginLeftRight}
`;

export const BurgerPopupClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 6rem;
  top: 6rem;
  & svg {
    width: 4rem;
  }
`;
