import * as S from "./styled-components/styled-main-heading-and-currencies";
import CurrencyGroup from "./currency-group";

const MainHeadingAndCurrencies = () => {
  return (
    <S.MainHeadingAndCurrencies>
      <S.MainHeading>Купить евро в&nbsp;Черногории</S.MainHeading>
      <CurrencyGroup
        currencyValue="63,57&nbsp;₽"
        CurrencyDescription="Курс евро ЦБ РФ"
      />
    </S.MainHeadingAndCurrencies>
  );
};

export default MainHeadingAndCurrencies;
