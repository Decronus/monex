import NavTop from "../components/nav-top";
import ProfileSuggest from "../components/profile-suggest";
import SecondaryHeading from "../components/secondary-heading";
import ThirdHeading from "../components/third-heading";
import { useState, useEffect, useContext } from "react";
import { getDatabase, get, child, ref } from "firebase/database";
import { getUserEmail } from "../firebase";
import NothingFoundParagraph from "../components/nothing-found-paragraph";
import LoadingParagraph from "../components/loading-paragraph";
import * as S from "../components/styled-components/styled-create-suggest";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { UserIsLoginContext } from "../App";

const Profile = () => {
  const isLogin = useContext(UserIsLoginContext);

  const [advertsResult, setAdvertsResult] = useState(null);

  useEffect(() => {
    getAdverts();
  }, []);

  const getAdverts = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "adverts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const result = Object.values(snapshot.val());
          const sortedResult = result.sort((x, y) => x.id - y.id);
          setAdvertsResult(sortedResult);
          console.log(sortedResult);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <NavTop />
      <SecondaryHeading heading="Профиль" />
      <ThirdHeading heading="Мои предложения" />

      {advertsResult ? (
        advertsResult?.filter((el) => el.userEmail === getUserEmail()).length >
        0 ? (
          advertsResult
            ?.filter((el) => el.userEmail === getUserEmail())
            .map((el, key) => {
              return (
                <ProfileSuggest
                  key={key}
                  rate={el.rate}
                  limit={el.limit}
                  city={el.city}
                  id={el.id}
                />
              );
            })
        ) : (
          <NothingFoundParagraph text="Вы еще не создали ни одного предложения о продаже." />
        )
      ) : (
        <LoadingParagraph text="Загрузка..." />
      )}

      {/* Нужна регистрация */}
      <S.CreateSuggestPopupBackground
        style={{
          opacity: isLogin ? "0" : "1",
          visibility: isLogin ? "hidden" : "visible",
        }}
      >
        <S.CreateSuggestPopupWrap>
          <p>Войдите в аккаунт, чтобы посмотреть профиль.</p>
          <S.PopupButtonsWrap>
            <Button
              text="Назад"
              primary={false}
              padding="2.5rem 6rem 2rem 6rem"
              handleClick={() => window.history.back()}
            />
            <Link to="/login">
              <Button
                text="Войти"
                primary={true}
                padding="2.5rem 6rem 2rem 6rem"
                handleClick={() =>
                  localStorage.setItem("toCreateSuggest", "true")
                }
              />
            </Link>
          </S.PopupButtonsWrap>
        </S.CreateSuggestPopupWrap>
      </S.CreateSuggestPopupBackground>
    </>
  );
};

export default Profile;
