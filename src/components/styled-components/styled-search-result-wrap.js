import styled from "styled-components";

export const SearchResultWrap = styled.div`
  background: #212121;
  padding: 5.2rem 6rem;
  margin-left: 6rem;
  margin-right: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;
  display: grid;
  grid-template-columns: 2fr 7fr 1fr;
  align-items: center;
  font-size: 2.4rem;
  @media (max-width: 666px) {
    grid-template-columns: 3fr 6fr 1fr;
  }
`;

export const CurrencyAndLimitWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchResultCurrency = styled.p`
  font-size: 3.2rem;
  letter-spacing: 0.07em;
  color: #ffffff;
`;

export const SearchResultLimit = styled.p`
  color: #6f6f6f;
  font-size: 1.8rem;
`;

export const SearchResultCityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CityAndNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchResultCityIcon = styled.div`
  & svg {
    width: 2.4rem;
  }
`;

export const SearchResultCity = styled.p`
  font-size: 2.4rem;
  color: #ffffff;
`;

export const SearchResultName = styled.p`
  color: #6f6f6f;
  font-size: 1.8rem;
`;

export const SearchResultExchange = styled.p`
  font-size: 2rem;
  color: #39ee1b;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
