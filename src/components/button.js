import StyledButton from "./styled-components/styled-button.js";

const Button = ({
  text,
  primary,
  padding,
  uppercase,
  opacity,
  cursor,
  handleClick,
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
    >
      {text}
    </StyledButton>
  );
};

export default Button;
