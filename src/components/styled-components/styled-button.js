import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ primary }) =>
    primary ? "linear-gradient(180deg, #39EE1B 0%, #3B9685 100%)" : "none"};
  border: ${({ primary }) => (primary ? "none" : "1px solid #FFFFFF;")};
  color: #ffffff;
  //   width: ${({ width }) => width};
  //   height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  text-transform: uppercase;
  font-size: inherit;
`;

export default StyledButton;
