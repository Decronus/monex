import * as S from "./styled-components/styled-fading-popup";

const FadingPopup = ({ text }) => {
  return (
    <S.Wrap>
      <S.Text>{text}</S.Text>
    </S.Wrap>
  );
};

export default FadingPopup;
