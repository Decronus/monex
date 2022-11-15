import * as S from "./styled-components/styled-currency-group";

const CurrencyGroup = ({ currencyValue, CurrencyDescription }) => {
  const request = new XMLHttpRequest();
  request.open("GET", "httt://www.cbr-xml-daily.ru/daily_json.js");
  //   request.responseType = "json";
  request.send();
  request.onload = () => {
    const data = JSON.parse(request.responseText);
    console.log(data.EUR.Value);
  };
  return (
    <S.CurrencyGroup>
      <S.CurrencyValue></S.CurrencyValue>
      <S.CurrencyDescription>{CurrencyDescription}</S.CurrencyDescription>
    </S.CurrencyGroup>
  );
};

export default CurrencyGroup;
