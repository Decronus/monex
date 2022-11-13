import * as S from "./styled-components/styled-search-result-wrap";

const SearchResultWrap = ({ currency, limit, city, name }) => {
  return (
    <S.SearchResultWrap>
      <S.SearchResultString>
        <S.SearchResultCurrency>{currency}</S.SearchResultCurrency>
        <S.SearchResultLimit>{limit}</S.SearchResultLimit>
        <S.SearchResultCityWrap>
          <S.SearchResultCityIcon>
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.36571 0 0 5.634 0 12.6C0 22.05 12 36 12 36C12 36 24 22.05 24 12.6C24 5.634 18.6343 0 12 0ZM12 17.1C9.63429 17.1 7.71429 15.084 7.71429 12.6C7.71429 10.116 9.63429 8.1 12 8.1C14.3657 8.1 16.2857 10.116 16.2857 12.6C16.2857 15.084 14.3657 17.1 12 17.1Z"
                fill="#39EE1B"
              />
            </svg>
          </S.SearchResultCityIcon>
          <S.SearchResultCity>{city}</S.SearchResultCity>
        </S.SearchResultCityWrap>
        <S.SearchResultName>{name}</S.SearchResultName>
        <S.SearchResultExchange>ОБМЕНЯТЬ</S.SearchResultExchange>
      </S.SearchResultString>
    </S.SearchResultWrap>
  );
};

export default SearchResultWrap;
