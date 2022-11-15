import * as S from "./styled-components/styled-create-suggest";
import { useState } from "react";

const Input = ({ borderBottom, type, handlerOnChange, handlerOnInput }) => {
  const [focus, setFocus] = useState(false);
  const handlerOnFocus = () => {
    setFocus(true);
  };

  const handlerOnBlur = (event) => {
    if (!event.target.value) {
      setFocus(false);
    }
  };
  return (
    <S.Input
      onFocus={handlerOnFocus}
      onBlur={handlerOnBlur}
      style={{ borderBottom: focus ? "none" : "1px #3a3a3a solid" }}
      onChange={(event) => handlerOnChange(event)}
    />
  );
};

export default Input;
