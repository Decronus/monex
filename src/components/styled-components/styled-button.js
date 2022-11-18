import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ primary }) =>
    primary ? "linear-gradient(180deg, #39EE1B 0%, #203E1C 100%);" : "none"};
  border: ${({ primary }) => (primary ? "none" : "1px solid #FFFFFF;")};
  color: #ffffff;
  //   width: ${({ width }) => width};
  //   height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  text-transform: ${({ uppercase }) => uppercase};
  opacity: ${({ opacity }) => opacity};
  cursor: ${({ cursor }) => cursor};
  font-size: inherit;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  //   &:hover {
  //     background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  //       linear-gradient(180deg, #39ee1b 0%, #203e1c 100%);
  //   }
`;

export default StyledButton;
