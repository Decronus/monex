import styled from "styled-components";
import * as M from "./mixins";

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${M.paddingsLeftRight}
  padding-top: 3rem;
  padding-bottom: 6rem;
  font-size: 1.6rem;
  font-weight: bold;
  @media (max-width: 750px) {
    padding-bottom: 7rem;
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
`;

export const MenuItem = styled.p`
  &:hover {
    border-bottom: 2px white solid;
    transform: translate(0, 1px);
  }
`;
