import NavTop from "../components/nav-top";
import ProfileSuggest from "../components/profile-suggest";
import SecondaryHeading from "../components/secondary-heading";
import ThirdHeading from "../components/third-heading";
import { useState, useEffect } from "react";
import { getDatabase, get, child, ref } from "firebase/database";
import { getUserEmail } from "../firebase";
import NothingFoundParagraph from "../components/nothing-found-paragraph";
import LoadingParagraph from "../components/loading-paragraph";
import ADVERTS_LIFETIME from "../CONSTS//ADVERTS_LIFETIME";
import { dbRef } from "../firebase";
import { update } from "firebase/database";
import FadingPopup from "../components/fading-popup";

const Profile = () => {
  const [fadingPopupVisibility, setFadingPopupVisibility] = useState(false);

  const [advertsResult, setAdvertsResult] = useState(null);
  advertsResult?.forEach((el) => {});
  useEffect(() => {
    // setFadingPopupVisibility(false);
    if (localStorage.getItem("fadingPopupVisibility") === "true") {
      setFadingPopupVisibility(true);
    }
    localStorage.setItem("fadingPopupVisibility", "false");
    setTimeout(() => {
      setFadingPopupVisibility(false);
    }, 3000);
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
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const expTimeHoursMinutes = (elementMinutes) => {
    const valueMinutes =
      elementMinutes + ADVERTS_LIFETIME - Math.floor(Date.now() / 1000 / 60);
    if (valueMinutes <= 0) return "Время размещения вышло";

    let hours = Math.floor(valueMinutes / 60);
    const minutes = valueMinutes - hours * 60;
    const hoursString = String(hours);

    let hoursText = "";
    if (hours === 0) {
      hoursText = "";
    } else if (
      hoursString.slice(hoursString.length - 2) >= "11" &&
      hoursString.slice(hoursString.length - 2) <= "19"
    ) {
      hoursText = "часов";
    } else if (hoursString.slice(hoursString.length - 1) === "1") {
      hoursText = "час";
    } else if (
      hoursString.slice(hoursString.length - 1) >= "2" &&
      hoursString.slice(hoursString.length - 1) <= "4"
    ) {
      hoursText = "часа";
    } else if (
      (hoursString.slice(hoursString.length - 1) >= "5" &&
        hoursString.slice(hoursString.length - 1) <= "9") ||
      hoursString.slice(hoursString.length - 1) === "0"
    ) {
      hoursText = "часов";
    }
    if (hours === 0) {
      hours = "";
    }

    return `${hours} ${hoursText} ${minutes} мин.`;
  };

  const updateAdvertMinutes = (event) => {
    const id = event.target.id;
    const updates = {};
    updates["adverts/" + id + "/minutes"] = Math.floor(Date.now() / 1000 / 60);
    update(dbRef, updates);
    window.location.reload();
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
                  expTime={expTimeHoursMinutes(el.minutes)}
                  minutes={el.minutes}
                  handleUpldateAdvertMinutes={updateAdvertMinutes}
                />
              );
            })
        ) : (
          <NothingFoundParagraph text="Вы еще не создали ни одного предложения о продаже." />
        )
      ) : (
        <LoadingParagraph text="Загрузка..." />
      )}
      {fadingPopupVisibility && (
        <FadingPopup text="Предложение о продаже успешно создано" />
      )}

      {/* Нужна регистрация */}
      {/* <S.CreateSuggestPopupBackground
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
      </S.CreateSuggestPopupBackground> */}
    </>
  );
};

export default Profile;
