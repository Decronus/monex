import * as S from "./styled-components/styled-currency-group";

const CurrencyGroup = ({ currencyValue, CurrencyDescription }) => {
  return (
    <S.CurrencyGroup>
      <S.CurrencyValue>{currencyValue}</S.CurrencyValue>
      <S.CurrencyDescription>{CurrencyDescription}</S.CurrencyDescription>
    </S.CurrencyGroup>
  );
};

export default CurrencyGroup;
