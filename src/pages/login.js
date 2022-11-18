import Button from "../components/button";
import * as S from "../components/styled-components/styled-login-popup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlerOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlerOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const [currentError, setCurrentError] = useState("");
  const switchError = (error) => {
    switch (error) {
      case "auth/user-not-found":
        setCurrentError("Аккаунт с таким именем не найден");
        break;
      case "auth/wrong-password":
        setCurrentError("Неправильный пароль");
        break;
      case "auth/invalid-email":
        setCurrentError("Неправильный формат email");
        break;
      default:
        setCurrentError("Неизвестная ошибка");
    }
  };

  const signInFunc = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user.emailVeified", user.emailVerified);
        if (!user.emailVerified) {
          signOut(auth)
            .then(() => {
              navigate("/verify-popup", { replace: true });
            })
            .catch((error) => {});
        } else if (user.emailVerified) {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        switchError(errorCode);
        console.log("error code", errorCode);
        // console.log(errorMessage);
      });
  };

  const handlerKeyUp = (event) => {
    if (event.code === "Enter") {
      signInFunc();
    }
  };
  return (
    <S.LoginPopupBackground>
      <S.LoginPopup>
        <S.HeadingAndLogo>
          <p>Вход в аккаунт</p>
          <Link to="/">
            <S.LogoWrap>
              <svg
                width="189"
                height="45"
                viewBox="0 0 189 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.4559 2.02441H5.39843C3.53501 2.02441 2.02441 3.53501 2.02441 5.39843V39.1386C2.02441 41.002 3.53501 42.5126 5.39843 42.5126H65.4559C67.3193 42.5126 68.8299 41.002 68.8299 39.1386V5.39843C68.8299 3.53501 67.3193 2.02441 65.4559 2.02441ZM5.39843 0C2.41696 0 0 2.41696 0 5.39843V39.1386C0 42.12 2.41696 44.537 5.39843 44.537H65.4559C68.4374 44.537 70.8543 42.12 70.8543 39.1386V5.39843C70.8543 2.41696 68.4374 0 65.4559 0H5.39843ZM60.732 26.9921H49.9351C48.8171 26.9921 47.9107 27.8985 47.9107 29.0165V33.7401C47.9107 34.8582 48.8171 35.7646 49.9351 35.7646H60.732C61.85 35.7646 62.7564 34.8582 62.7564 33.7401V29.0165C62.7564 27.8985 61.85 26.9921 60.732 26.9921ZM49.9351 24.9677C47.699 24.9677 45.8863 26.7804 45.8863 29.0165V33.7401C45.8863 35.9762 47.699 37.789 49.9351 37.789H60.732C62.9681 37.789 64.7808 35.9762 64.7808 33.7401V29.0165C64.7808 26.7804 62.9681 24.9677 60.732 24.9677H49.9351ZM7.76001 8.77243C7.20098 8.77243 6.7478 9.22561 6.7478 9.78464C6.7478 10.3437 7.20098 10.7968 7.76001 10.7968H63.0939C63.6529 10.7968 64.1061 10.3437 64.1061 9.78464C64.1061 9.22561 63.6529 8.77243 63.0939 8.77243H7.76001ZM6.41093 28.3417C6.41093 27.7827 6.86411 27.3295 7.42313 27.3295H31.716C32.2751 27.3295 32.7283 27.7827 32.7283 28.3417C32.7283 28.9007 32.2751 29.3539 31.716 29.3539H7.42313C6.86411 29.3539 6.41093 28.9007 6.41093 28.3417ZM7.42313 33.4028C6.86411 33.4028 6.41093 33.8559 6.41093 34.415C6.41093 34.974 6.86411 35.4272 7.42313 35.4272H24.2932C24.8522 35.4272 25.3054 34.974 25.3054 34.415C25.3054 33.8559 24.8522 33.4028 24.2932 33.4028H7.42313ZM12.1465 13.8335C12.7055 13.8335 13.1587 14.2866 13.1587 14.8457L13.1587 16.8701C13.1587 17.4291 12.7055 17.8823 12.1465 17.8823C11.5875 17.8823 11.1343 17.4291 11.1343 16.8701V14.8457C11.1343 14.2866 11.5875 13.8335 12.1465 13.8335ZM17.8821 14.8457C17.8821 14.2866 17.429 13.8335 16.8699 13.8335C16.3109 13.8335 15.8577 14.2866 15.8577 14.8457V16.8701C15.8577 17.4291 16.3109 17.8823 16.8699 17.8823C17.429 17.8823 17.8821 17.4291 17.8821 16.8701V14.8457ZM21.5941 13.8335C22.1531 13.8335 22.6063 14.2866 22.6063 14.8457V16.8701C22.6063 17.4291 22.1531 17.8823 21.5941 17.8823C21.0351 17.8823 20.5819 17.4291 20.5819 16.8701V14.8457C20.5819 14.2866 21.0351 13.8335 21.5941 13.8335ZM32.053 14.8457C32.053 14.2866 31.5999 13.8335 31.0408 13.8335C30.4818 13.8335 30.0286 14.2866 30.0286 14.8457V16.8701C30.0286 17.4291 30.4818 17.8823 31.0408 17.8823C31.5999 17.8823 32.053 17.4291 32.053 16.8701V14.8457ZM35.7641 13.8335C36.3231 13.8335 36.7763 14.2866 36.7763 14.8457V16.8701C36.7763 17.4291 36.3231 17.8823 35.7641 17.8823C35.205 17.8823 34.7519 17.4291 34.7519 16.8701V14.8457C34.7519 14.2866 35.205 13.8335 35.7641 13.8335ZM41.5004 14.8457C41.5004 14.2866 41.0473 13.8335 40.4882 13.8335C39.9292 13.8335 39.476 14.2866 39.476 14.8457V16.8701C39.476 17.4291 39.9292 17.8823 40.4882 17.8823C41.0473 17.8823 41.5004 17.4291 41.5004 16.8701V14.8457ZM49.9364 13.8335C50.4954 13.8335 50.9486 14.2866 50.9486 14.8457V16.8701C50.9486 17.4291 50.4954 17.8823 49.9364 17.8823C49.3773 17.8823 48.9242 17.4291 48.9242 16.8701V14.8457C48.9242 14.2866 49.3773 13.8335 49.9364 13.8335ZM55.6719 14.8457C55.6719 14.2866 55.2188 13.8335 54.6597 13.8335C54.1007 13.8335 53.6475 14.2866 53.6475 14.8457V16.8701C53.6475 17.4291 54.1007 17.8823 54.6597 17.8823C55.2188 17.8823 55.6719 17.4291 55.6719 16.8701V14.8457ZM59.3839 13.8335C59.9429 13.8335 60.3961 14.2866 60.3961 14.8457V16.8701C60.3961 17.4291 59.9429 17.8823 59.3839 17.8823C58.8249 17.8823 58.3717 17.4291 58.3717 16.8701V14.8457C58.3717 14.2866 58.8249 13.8335 59.3839 13.8335ZM97.1659 30.7724H92.329V14.7067H99.4765L105.026 24.7046L110.597 14.7067H117.486V30.7724H112.519V19.6517L106.192 30.7724H103.493L97.1659 19.6517V30.7724ZM119.306 22.3725C119.306 19.5005 120.45 14.426 130.621 14.426H131.55C141.655 14.426 142.843 19.5005 142.843 22.3725V23.0203C142.843 25.8491 141.677 31.0532 131.55 31.0532H130.621C120.45 31.0532 119.306 25.8491 119.306 23.0203V22.3725ZM131.074 27.1447C136.473 27.1447 137.574 24.683 137.574 22.826V22.5236C137.574 20.6882 136.516 18.3129 131.074 18.3129C125.546 18.3129 124.575 20.6882 124.575 22.5236V22.7828C124.575 24.6182 125.633 27.1447 131.074 27.1447ZM144.647 30.7724V14.7067H150.262L160.519 24.8126V14.7067H165.485V30.7724H160.519L149.614 20.1267V30.7724H144.647ZM177.58 25.7843L172.7 30.7724H166.502L174.492 22.6532L166.675 14.7067H173.412L177.947 19.4141L182.482 14.7067H188.657L180.948 22.5452L188.83 30.7724H182.503L177.58 25.7843Z"
                  fill="url(#paint0_linear_72_207)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_72_207"
                    x1="94.4151"
                    y1="0"
                    x2="94.4151"
                    y2="44.537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#39EE1B" />
                    <stop offset="1" stopColor="#203E1C" />
                  </linearGradient>
                </defs>
              </svg>
            </S.LogoWrap>
          </Link>
        </S.HeadingAndLogo>
        <S.InputsWrap>
          <S.Input
            type="text"
            placeholder="Email"
            onChange={handlerOnChangeEmail}
            onKeyUp={handlerKeyUp}
          />
          <S.Input
            type="password"
            placeholder="Пароль"
            onChange={handlerOnChangePassword}
            onKeyUp={handlerKeyUp}
          />
          <p>{currentError}</p>
        </S.InputsWrap>
        <S.ButtonAndReg>
          <Button
            text="Войти"
            primary={true}
            padding="2.5rem 6rem 2rem 6rem"
            fontSize="3rem"
            handleClick={signInFunc}
          />
          <Link to="/reg">
            <p>Зарегистрироваться</p>
          </Link>
        </S.ButtonAndReg>
        <Link to="/reset-password">
          <S.ForgotPass>Забыли пароль?</S.ForgotPass>
        </Link>
      </S.LoginPopup>
    </S.LoginPopupBackground>
  );
};

export default Login;
