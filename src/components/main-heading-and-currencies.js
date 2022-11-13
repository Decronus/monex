import * as S from "./styled-components/styled-main-heading-and-currencies";
import CurrencyGroup from "./currency-group";

const MainHeadingAndCurrencies = () => {
  return (
    <S.MainHeadingAndCurrencies>
      <S.MainHeading>Обмен валюты в&nbsp;Черногории</S.MainHeading>
      <S.CurrenciesWrap>
        <CurrencyGroup
          currencyValue="63,57 ₽"
          CurrencyDescription="Курс евро ЦБ РФ"
        />
        <CurrencyGroup
          currencyValue="0,40818 BYN"
          CurrencyDescription="Курс евро НБ РБ"
        />
      </S.CurrenciesWrap>
    </S.MainHeadingAndCurrencies>
  );
};

export default MainHeadingAndCurrencies;
