import styled from "styled-components";

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 3rem;
  padding-bottom: 10.7rem;
  font-size: 1.6rem;
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
