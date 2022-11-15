import * as S from "./styled-components/styled-currency-group";
import { useEffect, useState } from "react";

const CurrencyGroup = ({ currencyDescription }) => {
  const [currencyValue, setCurrencyValue] = useState("");

  useEffect(() => {
    getCurrencyValue();
  }, []);

  const getCurrencyValue = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js");
    request.send();
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      setCurrencyValue(data.Valute.EUR.Value.toFixed(2));
      return data.Valute.EUR.Value;
    };
  };

  return (
    <S.CurrencyGroup>
      <S.CurrencyValue>{currencyValue}₽</S.CurrencyValue>
      <S.CurrencyDescription>{currencyDescription}</S.CurrencyDescription>
    </S.CurrencyGroup>
  );
};

export default CurrencyGroup;
