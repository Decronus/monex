import styled from "styled-components";
import * as M from "./mixins";

export const Heading = styled.h3`
  font-size: 4.5rem;
  ${M.paddingsLeftRight}
  margin-bottom: 5rem;
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  ${M.marginLeftRight};
  font-size: 3.2rem;
  font-weight: bold;
`;

export const InputElementRow = styled.div`
  display: flex;
  gap: 2.5rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InputElementWrap = styled.div`
  width: 100%;
  height: 10rem;
  background: #212121;
  ${M.paddingsLeftRight}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  background: #212121;
  outline: none;
  border: none;
  text-align: right;
  font-size: inherit;
  font-weight: inherit;
  color: #39ee1b;
`;

export const Select = styled.select`
  width: 100%;
  height: 4.5rem;
  background: #212121;
  outline: none;
  border: none;
  text-align: right;
  font-size: inherit;
  font-weight: inherit;
  appearance: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #212121;
  outline: none;
  border: none;
  font-size: inherit;
  //   font-weight: inherit;
  ${M.paddingsLeftRight}
  padding-top: 6rem;
  padding-bottom: 6rem;
  resize: none;
  }
`;

export const CreateSuggestPopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
`;

export const CreateSuggestPopupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  max-width: 768px;
  ${M.paddingsLeftRight}
  ${M.marginLeftRight}
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #1b1b1b;
  font-size: 3.2rem;
  & p {
    text-align: center;
    & span {
      color: #39ee1b;
    }
  }
  @media (max-width: 800px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    max-width: 320px;
  }
`;

export const PopupSpan = styled.span`
  color: #39ee1b;
`;

export const PopupButtonsWrap = styled.div`
  display: flex;
  gap: 2.5rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
