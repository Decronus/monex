import styled from "styled-components";

export const SearchResultWrap = styled.div`
  background: #212121;
  padding: 5.2rem 6rem;
  margin-left: 6rem;
  margin-right: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;
  //   display: flex;
  //   flex-direction: column;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 100px;
  justify-content: space-between;
  font-size: 2.4rem;
`;

export const SearchResultString = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchResultCurrency = styled.p`
  font-size: 3.2rem;
  letter-spacing: 0.07em;
  color: #ffffff;
`;

export const SearchResultLimit = styled.p`
  color: #6f6f6f;
`;

export const SearchResultCityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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
`;

export const SearchResultExchange = styled.p`
  font-size: 2rem;
  color: #39ee1b;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
