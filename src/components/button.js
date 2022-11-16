import StyledButton from "./styled-components/styled-button.js";

const Button = ({
  text,
  primary,
  padding,
  uppercase,
  opacity,
  cursor,
  handleClick,
  fontSize,
}) => {
  return (
    <StyledButton
      style={{
        padding: padding,
        textTransform: uppercase,
      }}
      primary={primary}
      background={primary}
      opacity={opacity}
      cursor={cursor}
      onClick={handleClick}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
