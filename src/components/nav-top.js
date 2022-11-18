import * as S from "./styled-components/styled-nav-top";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserIsLoginContext } from "../App";
import { signOutFunc } from "../firebase";

const NavTop = () => {
  const isLogin = useContext(UserIsLoginContext);
  const currentUserEmail = isLogin?.email;

  const [burgerPopupVisibility, setBurgerPopupVisibility] = useState();
  const openBurgerPopup = () => {
    setBurgerPopupVisibility(true);
  };
  const closeBurgerPopup = () => {
    setBurgerPopupVisibility(false);
  };

  return (
    <S.NavTop>
      <Link to="/">
        <S.LogoWrap>
          <svg
            width="280"
            height="66"
            viewBox="0 0 280 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M97 3H8C5.23858 3 3 5.23858 3 8V58C3 60.7614 5.23858 63 8 63H97C99.7614 63 102 60.7614 102 58V8C102 5.23858 99.7614 3 97 3ZM8 0C3.58172 0 0 3.58172 0 8V58C0 62.4183 3.58172 66 8 66H97C101.418 66 105 62.4183 105 58V8C105 3.58172 101.418 0 97 0H8ZM90 40H74C72.3431 40 71 41.3431 71 43V50C71 51.6569 72.3431 53 74 53H90C91.6569 53 93 51.6569 93 50V43C93 41.3431 91.6569 40 90 40ZM74 37C70.6863 37 68 39.6863 68 43V50C68 53.3137 70.6863 56 74 56H90C93.3137 56 96 53.3137 96 50V43C96 39.6863 93.3137 37 90 37H74ZM11.5 13C10.6716 13 10 13.6716 10 14.5C10 15.3284 10.6716 16 11.5 16H93.5C94.3284 16 95 15.3284 95 14.5C95 13.6716 94.3284 13 93.5 13H11.5ZM9.5 42C9.5 41.1716 10.1716 40.5 11 40.5H47C47.8284 40.5 48.5 41.1716 48.5 42C48.5 42.8284 47.8284 43.5 47 43.5H11C10.1716 43.5 9.5 42.8284 9.5 42ZM11 49.5C10.1716 49.5 9.5 50.1716 9.5 51C9.5 51.8284 10.1716 52.5 11 52.5H36C36.8284 52.5 37.5 51.8284 37.5 51C37.5 50.1716 36.8284 49.5 36 49.5H11ZM18 20.5C18.8284 20.5 19.5 21.1716 19.5 22V25C19.5 25.8284 18.8284 26.5 18 26.5C17.1716 26.5 16.5 25.8284 16.5 25V22C16.5 21.1716 17.1716 20.5 18 20.5ZM26.5 22C26.5 21.1716 25.8284 20.5 25 20.5C24.1716 20.5 23.5 21.1716 23.5 22V25C23.5 25.8284 24.1716 26.5 25 26.5C25.8284 26.5 26.5 25.8284 26.5 25V22ZM32 20.5C32.8284 20.5 33.5 21.1716 33.5 22V25C33.5 25.8284 32.8284 26.5 32 26.5C31.1716 26.5 30.5 25.8284 30.5 25V22C30.5 21.1716 31.1716 20.5 32 20.5ZM47.5 22C47.5 21.1716 46.8284 20.5 46 20.5C45.1716 20.5 44.5 21.1716 44.5 22V25C44.5 25.8284 45.1716 26.5 46 26.5C46.8284 26.5 47.5 25.8284 47.5 25V22ZM53 20.5C53.8284 20.5 54.5 21.1716 54.5 22V25C54.5 25.8284 53.8284 26.5 53 26.5C52.1716 26.5 51.5 25.8284 51.5 25V22C51.5 21.1716 52.1716 20.5 53 20.5ZM61.5 22C61.5 21.1716 60.8284 20.5 60 20.5C59.1716 20.5 58.5 21.1716 58.5 22V25C58.5 25.8284 59.1716 26.5 60 26.5C60.8284 26.5 61.5 25.8284 61.5 25V22ZM74 20.5C74.8284 20.5 75.5 21.1716 75.5 22V25C75.5 25.8284 74.8284 26.5 74 26.5C73.1716 26.5 72.5 25.8284 72.5 25V22C72.5 21.1716 73.1716 20.5 74 20.5ZM82.5 22C82.5 21.1716 81.8284 20.5 81 20.5C80.1716 20.5 79.5 21.1716 79.5 22V25C79.5 25.8284 80.1716 26.5 81 26.5C81.8284 26.5 82.5 25.8284 82.5 25V22ZM88 20.5C88.8284 20.5 89.5 21.1716 89.5 22V25C89.5 25.8284 88.8284 26.5 88 26.5C87.1716 26.5 86.5 25.8284 86.5 25V22C86.5 21.1716 87.1716 20.5 88 20.5ZM143.992 46H136.824V22.192H147.416L155.64 37.008L163.896 22.192H174.104V46H166.744V29.52L157.368 46H153.368L143.992 29.52V46ZM176.801 33.552C176.801 29.296 178.497 21.776 193.57 21.776H194.945C209.922 21.776 211.682 29.296 211.682 33.552V34.512C211.682 38.704 209.954 46.416 194.945 46.416H193.57C178.497 46.416 176.801 38.704 176.801 34.512V33.552ZM194.242 40.624C202.242 40.624 203.874 36.976 203.874 34.224V33.776C203.874 31.056 202.305 27.536 194.242 27.536C186.049 27.536 184.609 31.056 184.609 33.776V34.16C184.609 36.88 186.178 40.624 194.242 40.624ZM214.355 46V22.192H222.675L237.875 37.168V22.192H245.235V46H237.875L221.715 30.224V46H214.355ZM263.159 38.608L255.926 46H246.742L258.582 33.968L246.999 22.192H256.983L263.703 29.168L270.422 22.192H279.574L268.151 33.808L279.831 46H270.454L263.159 38.608Z"
              fill="url(#paint0_linear_12_1083)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_12_1083"
                x1="139.915"
                y1="0"
                x2="139.915"
                y2="66"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#39EE1B" />
                <stop offset="1" stopColor="#203E1C" />
              </linearGradient>
            </defs>
          </svg>
        </S.LogoWrap>
      </Link>
      <S.MenuListAndButton>
        <S.MenuList>
          <Link to="/">
            <S.MenuItem>КУПИТЬ ЕВРО</S.MenuItem>
          </Link>
          <Link to="/create-suggest">
            <S.MenuItem>ПРОДАТЬ ЕВРО</S.MenuItem>
          </Link>

          {isLogin ? (
            <S.MenuItemLoginWrap>
              <S.MenuItemLogin style={{ color: "#39EE1B" }}>
                {currentUserEmail}
              </S.MenuItemLogin>
              <S.MenuItemLoginArrow>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z"
                    fill="#39EE1B"
                  />
                </svg>
              </S.MenuItemLoginArrow>
              <S.LoginDropdown>
                <p>ПРОФИЛЬ</p>
                <Link to="/">
                  <p onClick={signOutFunc}>ВЫЙТИ</p>
                </Link>
              </S.LoginDropdown>
            </S.MenuItemLoginWrap>
          ) : (
            <Link to="/login">
              <S.MenuItem>ВОЙТИ</S.MenuItem>
            </Link>
          )}
        </S.MenuList>

        <S.Burger onClick={openBurgerPopup}>
          <svg
            width="30"
            height="21"
            viewBox="0 0 30 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H30V2.8H0V0ZM0 8.8H30V11.6H0V8.8ZM30 17.6H0V20.4H30V17.6Z"
              fill="white"
            />
          </svg>
        </S.Burger>
      </S.MenuListAndButton>

      <S.BurgerPopupWrap
        style={{
          right: burgerPopupVisibility ? "0" : "-100%",
        }}
      >
        <S.BurgerPopupClose onClick={closeBurgerPopup}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 10.2201L2.38318 0.603455L0.40332 2.58335L10.02 12.2L0.40332 21.8167L2.38318 23.7966L11.9999 14.1799L21.6166 23.7966L23.5964 21.8167L13.9797 12.2L23.5964 2.58335L21.6166 0.603455L11.9999 10.2201Z"
              fill="white"
            />
          </svg>
        </S.BurgerPopupClose>
        <S.MenuItemPopup>О СЕРВИСЕ</S.MenuItemPopup>
        <S.MenuItemPopup>ПРОФИЛЬ</S.MenuItemPopup>
        <Link to="/">
          <S.MenuItemPopup>КУПИТЬ ЕВРО</S.MenuItemPopup>
        </Link>
        <Link to="/create-suggest">
          <S.MenuItemPopup>ПРОДАТЬ ЕВРО</S.MenuItemPopup>
        </Link>
      </S.BurgerPopupWrap>
    </S.NavTop>
  );
};

export default NavTop;
