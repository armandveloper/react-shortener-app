import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Screen = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Loader = styled.div`
	border-radius: 50%;
	border-top: 0.3rem solid #fff;
	height: 5rem;
	width: 5rem;
	animation: ${spin} 1s linear infinite;
`;

function LoadingScreen() {
	return (
		<Screen>
			<Loader />
		</Screen>
	);
}

export default LoadingScreen;
