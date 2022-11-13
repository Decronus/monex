import * as S from "./styled-components/styled-city-input";

const CityInput = () => {
  return (
    <S.CityInputWrap>
      <S.CityInput>
        <option value="city" style={{ color: "#6F6F6F" }}>
          Город
        </option>
        <option value="Bar">Бар</option>
        <option value="Budva">Будва</option>
        <option value="Kotor">Котор</option>
        <option value="Podgorica">Подгорица</option>
        <option value="Tivat">Тиват</option>
        <option value="HN">Херцег-Нови</option>
      </S.CityInput>
      <S.DownArrowSvg>
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.585 0L11 8.39667L19.415 0L22 2.585L11 13.585L0 2.585L2.585 0Z"
            fill="#6F6F6F"
          />
        </svg>
      </S.DownArrowSvg>
    </S.CityInputWrap>
  );
};

export default CityInput;
