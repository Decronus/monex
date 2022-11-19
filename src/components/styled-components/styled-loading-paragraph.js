import styled, { keyframes } from "styled-components";

const loading = keyframes`
  50% {
	opacity: 1;
  } 
  100% {
	opacity: 0.2;
  }
`;

const StyledLoadingParagraph = styled.p`
  font-size: 2.4rem;
  color: #6f6f6f;
  margin-left: 12rem;
  margin-right: 12rem;
  margin-top: 4rem;
  animation: ${loading} 1s ease-in-out infinite;
`;

export default StyledLoadingParagraph;
