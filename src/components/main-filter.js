import CityInput from "./city-input";
import * as S from "./styled-components/styled-main-filter";

const MainFilter = () => {
  return (
    <S.MainFilter>
      <svg
        width="7"
        height="40"
        viewBox="0 0 7 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 7.62939e-06H1V0L0 2.21398e-08L3.40949e-06 7.62939e-06V1.00001V39.0003V39.5068V40.0003H7V39.0003H1L1 1.00001L7 1.00001V7.62939e-06Z"
          fill="#6F6F6F"
        />
      </svg>

      <S.GiveCurrency>
        <p style={{ color: "#6F6F6F", fontSize: "2.4rem" }}>Отдаю</p>
        <p>₽</p>
        <p>BYN</p>
      </S.GiveCurrency>
      <svg
        width="1"
        height="40"
        viewBox="0 0 1 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="78"
          x2="0.499997"
          y2="2.18557e-08"
          stroke="#6F6F6F"
        />
      </svg>
      <S.GetCurrency>
        <p style={{ color: "#6F6F6F", fontSize: "2.4rem" }}>Получаю</p>
        <p>€</p>
      </S.GetCurrency>
      <svg
        width="1"
        height="40"
        viewBox="0 0 1 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="78"
          x2="0.499997"
          y2="2.18557e-08"
          stroke="#6F6F6F"
        />
      </svg>
      <CityInput />
      <svg
        width="7"
        height="40"
        viewBox="0 0 7 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.99999 0.999996L6 39.0003L-6.95398e-06 39.0003L-6.86656e-06 40.0003L6 40.0003L6 40.0003L7 40.0003L6.99999 0.493511L6.99999 -3.8147e-06L-7.02563e-06 -3.20274e-06L-6.93821e-06 0.999997L5.99999 0.999996Z"
          fill="#6F6F6F"
        />
      </svg>
    </S.MainFilter>
  );
};

export default MainFilter;
