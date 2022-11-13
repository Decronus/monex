import StyledButton from "./styled-components/styled-button.js";

const Button = ({ text, primary, padding }) => {
  return (
    <StyledButton
      style={{
        background: primary,
        border: primary,
        padding: padding,
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
