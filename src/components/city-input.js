import * as S from "./styled-components/styled-city-input";

const CityInputWrap = ({ handleChangeCity }) => {
  return (
    <S.CityInputWrap>
      <S.CityInput onChange={(event) => handleChangeCity(event)}>
        <option value="Города">Все города</option>
        <option value="Бар">Бар</option>
        <option value="Будва">Будва</option>
        <option value="Котор">Котор</option>
        <option value="Подгорица">Подгорица</option>
        <option value="Тиват">Тиват</option>
        <option value="Херцег-Нови">Херцег-Нови</option>
      </S.CityInput>
    </S.CityInputWrap>
  );
};

export default CityInputWrap;
