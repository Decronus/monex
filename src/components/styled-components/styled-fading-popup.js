import styled, { keyframes } from "styled-components";

const move = keyframes`
	0% {
		opacity: 0;
		visibility: visible;
		bottom: 0;
	}
	20% {
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		bottom: 80px;
		visibility: hidden;
	}
`;

export const Wrap = styled.div`
  position: fixed;
  max-width: 320px;
  padding: 3rem;
  font-size: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  background: #212121;
  bottom: -500px;
  right: 0;
  opacity: 0;
  visibility: hidden;
  animation: ${move} 3s ease-out 1;
`;

export const Text = styled.p`
  font-size: 2rem;
`;
