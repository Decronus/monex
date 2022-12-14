import styled from "styled-components";

export const CurrencyGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: #212121;
  padding: 2rem 3rem;
`;

export const CurrencyValue = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.6rem;
  letter-spacing: 0.07em;
  color: #39ee1b;
`;

export const CurrencyDescription = styled.p`
  font-size: 1.4rem;
  color: #6f6f6f;
`;
