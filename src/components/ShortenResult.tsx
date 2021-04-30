import { useRef } from 'react';
import styled from 'styled-components';
import { Copy, Share } from 'react-feather';
import { copyURL } from '../helpers/clipboard';
import { shareURL } from '../helpers/share';

interface ShortenResultProps {
	url: string;
}

const StyledShortenResult = styled.div`
	background-color: #15181c;
	margin-top: 4rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	@media (min-width: 37.5em) {
		padding: 2rem;
	}
`;
const ShortenURL = styled.a`
	flex: 1;
	color: #42a5f5;
	font-size: 1.6rem;
	margin: 0;
	text-decoration: none;
`;

const BtnIcon = styled.button`
	flex: 0 0 5rem;
	background: none;

	border: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
	position: relative;
	svg {
		transition: stroke 0.3s ease;
	}
	&:hover svg {
		stroke: #42a5f5;
	}
`;

const Feedback = styled.span`
	background-color: #0f2b46;
	border-radius: 0.3rem;
	color: #fff;
	font-size: 1.4rem;
	padding: 0.4rem 1rem;
	opacity: 0;
	transform: translateX(-12.5%) translateY(1rem);
	position: absolute;
	bottom: calc(100% + 1rem);
	left: 0;
	z-index: 100;
	transition: opacity 0.3s ease, transform 0.3s ease;
	&.show {
		opacity: 1;
		transform: translateX(-12.5%) translateY(0);
	}
`;

function ShortenResult({ url }: ShortenResultProps) {
	const feedbackRef = useRef<HTMLSpanElement>(null!);

	const hideFeedback = () => {
		feedbackRef.current.classList.remove('show');
	};

	const showFeedback = () => {
		feedbackRef.current.classList.add('show');
		setTimeout(hideFeedback, 2000);
	};

	return (
		<StyledShortenResult>
			<ShortenURL href={url} target="_blank" rel="noopener noreferrer">
				{url}
			</ShortenURL>
			<BtnIcon
				onClick={() => copyURL(url).then(showFeedback)}
				title="Copy URL"
			>
				<Feedback ref={feedbackRef}>Copied!</Feedback>
				<Copy size={30} color="#fff" />
			</BtnIcon>
			{window.navigator.share !== undefined && (
				<BtnIcon onClick={() => shareURL(url)} title="Share URL">
					<Share size={30} color="#fff" />
				</BtnIcon>
			)}
		</StyledShortenResult>
	);
}

export default ShortenResult;
