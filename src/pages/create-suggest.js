import NavTop from "../components/nav-top";
import * as S from "../components/styled-components/styled-create-suggest";
import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";
import { getDatabase, ref, set, get, child, update } from "firebase/database";
import { getUserID } from "../firebase";
import { getUserEmail } from "../firebase";
import { Link } from "react-router-dom";
// import { UserIsLoginContext } from "../App";
import { filterInputValue } from "../components/functions";
import SecondaryHeading from "../components/secondary-heading";
import MAX_ADVERTS_AMOUNT from "../CONSTS/MAX_ADVERTS_AMOUNT";
import { useNavigate } from "react-router-dom";

const CreateSuggest = () => {
  //   const isLogin = useContext(UserIsLoginContext);
  const navigate = useNavigate();

  const [popupVisibility, setPopupVisibility] = useState(false);
  const openCreateSuggestPopup = () => {
    setPopupVisibility(true);
  };

  const closeCreateSuggestPopup = () => {
    setPopupVisibility(false);
  };

  const [rate, setRate] = useState("");
  const handlerRateOnChange = (event) => {
    setRate(filterInputValue(event));
    event.target.value = filterInputValue(event);
  };

  const [limit, setLimit] = useState("");
  const handlerLimitOnChange = (event) => {
    const digitsValue = event.target.value.replace(/[^\d]/g, "");
    setLimit(digitsValue);
    event.target.value = digitsValue;
  };

  const [city, setCity] = useState("");
  const handlerCityOnChange = (event) => {
    setCity(event.target.value);
  };

  const [name, setName] = useState("");
  const handlerNameOnChange = (event) => {
    setName(event.target.value);
  };

  const [description, setDescription] = useState("");
  const handlerDescriptionOnChange = (event) => {
    setDescription(event.target.value);
  };

  const [PremiumPopupVisibility, setPremiumPopupVisibility] = useState(false);

  const addSuggest = (rate, limit, city, name, description) => {
    const database = getDatabase();
    const dbRef = ref(getDatabase());

    //Получаем последний id объявы и в рамках ответа обновляем базу
    get(child(dbRef, "lastAdvertID"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const lastID = snapshot.val() + 1;
          const userID = getUserID();
          const userEmail = getUserEmail();

          get(child(dbRef, "users"))
            .then((snapshot) => {
              if (snapshot.exists()) {
                const users = snapshot.val();

                //Если пользователь впервые создает объяву,
                //добавляем инфу в объект users
                if (!users[userID]) {
                  set(ref(database, "users/" + userID), {
                    advertsAmount: MAX_ADVERTS_AMOUNT,
                    premium: false,
                    userEmail,
                  });
                  //Добавляем в базу объявы
                  set(ref(database, "adverts/" + lastID), {
                    id: lastID,
                    userID,
                    userEmail,
                    rate,
                    limit,
                    city,
                    name,
                    description,
                    minutes: Math.floor(Date.now() / 1000 / 60),
                  });

                  //Обновляем счетчик объяв
                  const updates = {};
                  updates["lastAdvertID"] = lastID;
                  update(dbRef, updates);
                  localStorage.setItem("fadingPopupVisibility", "true");
                  navigate("/profile", { replace: true });

                  //Если пользователь есть в объекте users,
                  //то есть создает объяву не впервые,
                } else if (users[userID]) {
                  const advertsAmount = users[userID].advertsAmount;
                  const premium = users[userID].premium;

                  //Позволяем создать объяву, если есть премиум,
                  //или не превышено число возможных объяв
                  if (advertsAmount < MAX_ADVERTS_AMOUNT || premium) {
                    //Добавляем в базу объявы
                    set(ref(database, "adverts/" + lastID), {
                      id: lastID,
                      userID,
                      userEmail,
                      rate,
                      limit,
                      city,
                      name,
                      description,
                      minutes: Math.floor(Date.now() / 1000 / 60),
                    });

                    //Обновляем счётчики
                    const updates = {};
                    updates["lastAdvertID"] = lastID;
                    updates["users/" + userID + "/advertsAmount"] =
                      advertsAmount + 1;
                    update(dbRef, updates);
                    localStorage.setItem("fadingPopupVisibility", "true");
                    navigate("/profile", { replace: true });
                  } else {
                    closeCreateSuggestPopup();
                    setPremiumPopupVisibility(true);
                  }
                }
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });

          closeCreateSuggestPopup();
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
      <SecondaryHeading heading="Создание предложения о&nbsp;продаже евро" />
      <S.InputsWrap>
        <S.InputElementRow>
          <S.InputElementWrap>
            <span>Курс</span>
            <S.InputGroup>
              <Input
                borderBottom={true}
                handlerOnChange={handlerRateOnChange}
                value={rate}
              />
              <span>₽</span>
            </S.InputGroup>
          </S.InputElementWrap>
          <S.InputElementWrap>
            <span>От</span>
            <S.InputGroup>
              <Input
                borderBottom={true}
                handlerOnChange={handlerLimitOnChange}
                value={limit}
              />
              <span>€</span>
            </S.InputGroup>
          </S.InputElementWrap>
        </S.InputElementRow>
        <S.InputElementRow>
          <S.InputElementWrap>
            <S.Select
              style={{ textAlign: "left", cursor: "pointer" }}
              onChange={handlerCityOnChange}
            >
              <option value="Город">Город</option>
              <option value="Бар">Бар</option>
              <option value="Будва">Будва</option>
              <option value="Котор">Котор</option>
              <option value="Подгорица">Подгорица</option>
              <option value="Тиват">Тиват</option>
              <option value="Херцег-Нови">Херцег-Нови</option>
            </S.Select>
          </S.InputElementWrap>
          <S.InputElementWrap>
            <span>Имя</span>
            <S.InputGroup>
              <Input
                borderBottom={true}
                handlerOnChange={handlerNameOnChange}
              />
            </S.InputGroup>
          </S.InputElementWrap>
        </S.InputElementRow>
        <S.TextArea
          placeholder="Детальное описание условий обмена и контакты для связи (номер телефона, соцсети)"
          rows="6"
          onChange={handlerDescriptionOnChange}
        />
        <div
          onClick={
            rate && limit && city && name && description
              ? openCreateSuggestPopup
              : undefined
          }
        >
          <Button
            text="Создать предложение"
            primary={true}
            padding="3.5rem 6rem 3rem 6rem"
            opacity={rate && limit && city && name && description ? "1" : "0.2"}
            cursor={
              rate && limit && city && name && description
                ? "pointer"
                : "not-allowed"
            }
          />
        </div>
      </S.InputsWrap>
      <S.CreateSuggestPopupBackground
        style={{
          opacity: popupVisibility ? "1" : "0",
          visibility: popupVisibility ? "visible" : "hidden",
        }}
      >
        <S.CreateSuggestPopupWrap>
          <p>
            Вы&nbsp;хотите продать евро по&nbsp;курсу{" "}
            <S.PopupSpan>{rate}&nbsp;€/₽</S.PopupSpan> в&nbsp;количестве
            от&nbsp;
            <S.PopupSpan>{limit}&nbsp;€</S.PopupSpan> в&nbsp;городе{" "}
            <S.PopupSpan>{city}</S.PopupSpan>?
          </p>
          <S.PopupButtonsWrap>
            <Button
              text="Исправить"
              primary={false}
              padding="2.5rem 6rem 2rem 6rem"
              handleClick={closeCreateSuggestPopup}
            />
            <Button
              text="Всё верно"
              primary={true}
              padding="2.5rem 6rem 2rem 6rem"
              handleClick={() =>
                addSuggest(rate, limit, city, name, description)
              }
            />
          </S.PopupButtonsWrap>
        </S.CreateSuggestPopupWrap>
      </S.CreateSuggestPopupBackground>

      {/* Нужен премиум попап */}
      <S.CreateSuggestPopupBackground
        style={{
          opacity: PremiumPopupVisibility ? "1" : "0",
          visibility: PremiumPopupVisibility ? "visible" : "hidden",
        }}
      >
        <S.CreateSuggestPopupWrap>
          <p>
            Нужен <span>ПРЕМИУМ-АККАУНТ</span>, чтобы создать новое объявление.
            На&nbsp;данный момент максимальное количество объявлений
            для&nbsp;вашего аккаунта: <span>{MAX_ADVERTS_AMOUNT}</span>
          </p>
          <S.PopupButtonsWrap>
            <Link to="/">
              <Button
                text="На главную"
                primary={true}
                padding="2.5rem 6rem 2rem 6rem"
                handleClick={() => setPremiumPopupVisibility(false)}
              />
            </Link>
          </S.PopupButtonsWrap>
        </S.CreateSuggestPopupWrap>
      </S.CreateSuggestPopupBackground>

      {/* Нужна регистрация */}
      {/* <S.CreateSuggestPopupBackground
        style={{
          opacity: isLogin ? "0" : "1",
          visibility: isLogin ? "hidden" : "visible",
        }}
      >
        <S.CreateSuggestPopupWrap>
          <p>
            Войдите в аккаунт, чтобы создать предложение о&nbsp;продаже евро
          </p>
          <S.PopupButtonsWrap>
            <Button
              text="Назад"
              primary={false}
              padding="2.5rem 6rem 2rem 6rem"
              handleClick={() => window.history.back()}
            />
            <Link to="/profile">
              <Button
                text="ОК"
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

export default CreateSuggest;
