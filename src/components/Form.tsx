import { FormEvent, useState } from 'react';
import styled from 'styled-components';

interface FormProps {
	shortenURL: (url: string) => Promise<void>;
	loading: boolean;
}

const FormStyled = styled.form`
	padding-bottom: 2.5rem;
	position: relative;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 2rem 0;
	.feedback {
		font-size: 1.4rem;
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

const Input = styled.input`
	grid-column: 1 / -1;
	background-color: #15181c;
	border: none;
	color: #fff;
	font-family: inherit;
	font-size: 1.6rem;
	height: 5rem;
	padding: 1rem;
	&:focus {
		outline: none;
	}
	@media (min-width: 37.5em) {
		grid-column: 1 / 2;
	}
`;

const Button = styled.button`
	background-color: #0f2b46;
	border: none;
	cursor: pointer;
	color: #fff;
	font-size: 1.6rem;
	font-weight: 500;
	font-family: inherit;
	display: inline-block;
	padding: 0.6rem 1rem;
	text-align: center;
	transition: 0.3s ease;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: #163e62;
	}
`;

function Form({ shortenURL, loading }: FormProps) {
	const [url, setURL] = useState('');
	const [error, setError] = useState('');

	const handleShorten = (e: FormEvent) => {
		e.preventDefault();
		if (loading) return;
		const isURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/.test(
			url
		);
		if (!isURL) {
			return setError('Enter a valid URL');
		}
		shortenURL(url.trim().toLowerCase());
		setURL('');
		setError('');
	};

	return (
		<FormStyled
			autoComplete="off"
			onSubmit={handleShorten}
			noValidate={true}
		>
			<Input
				type="url"
				name="url"
				aria-label="Enter the URL"
				placeholder="https://google.com"
				value={url}
				onChange={({ target }) => setURL(target.value)}
			/>
			<Button type="submit" className="btn" disabled={loading}>
				{loading ? 'Loading...' : 'Shorten'}
			</Button>
			{error && <span className="feedback">{error}</span>}
		</FormStyled>
	);
}

export default Form;
