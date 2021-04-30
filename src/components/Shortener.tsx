import styled from 'styled-components';
import useShortener from '../hooks/useShortener';
import Form from './Form';
import ShortenResult from './ShortenResult';

const StyledShortener = styled.div`
	margin-top: 5rem;
	.result-error {
		background-color: #15181c;
		margin: 4rem 0 0;
		padding: 2rem;
		text-align: center;
	}
`;

function Shortener() {
	const [resultURL, isLoading, error, shortenURL] = useShortener();

	return (
		<StyledShortener>
			<Form shortenURL={shortenURL} loading={isLoading} />
			{error && <h2 className="result-error">{error}</h2>}
			{!error && 'https://github.com/armcruz' && (
				<ShortenResult url={'https://github.com/armcruz'} />
			)}
		</StyledShortener>
	);
}

export default Shortener;
