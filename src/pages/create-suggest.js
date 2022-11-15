import NavTop from "../components/nav-top";
import * as S from "../components/styled-components/styled-create-suggest";
import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";

const CreateSuggest = () => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const openCreateSuggestPopup = () => {
    setPopupVisibility(true);
  };

  const closeCreateSuggestPopup = () => {
    setPopupVisibility(false);
  };

  const [rate, setRate] = useState("asfdasdf");
  const handlerRateOnChange = (event) => {
    const digitsValue = event.target.value.replace(/[^\d]/g, "");
    setRate(digitsValue);
    event.target.value = digitsValue;
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

  return (
    <>
      <NavTop />
      <S.Heading>Создание предложения о&nbsp;продаже евро</S.Heading>
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
          <S.InputElementWrap style={{ paddingLeft: "5.5rem" }}>
            <S.Select
              style={{ textAlign: "left" }}
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
            <S.PopupSpan>{rate}</S.PopupSpan> в&nbsp;количестве от&nbsp;
            <S.PopupSpan>{limit}</S.PopupSpan> € в&nbsp;городе{" "}
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
              handleClick={closeCreateSuggestPopup}
            />
          </S.PopupButtonsWrap>
        </S.CreateSuggestPopupWrap>
      </S.CreateSuggestPopupBackground>
    </>
  );
};

export default CreateSuggest;
