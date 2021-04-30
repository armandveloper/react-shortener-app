import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Wrapper from './components/Wrapper';
import Shortener from './components/Shortener';

const Title = styled.h1`
	font-size: 3.6rem;
	margin-top: 5rem;
	margin-bottom: 1rem;
	text-align: center;
	@media (min-width: 56.25em) {
		font-size: 5rem;
	}
`;

const Description = styled.p`
	font-size: 2rem;
	font-weight: 500;
	text-align: center;
	@media (min-width: 56.25em) {
		font-size: 2.4rem;
	}
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Title>URL Shortener</Title>
				<Description>Enter the URL to be shortened</Description>
				<Shortener />
			</Wrapper>
		</>
	);
}

export default App;
