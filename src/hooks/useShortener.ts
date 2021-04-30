import { useState } from 'react';

export interface ShortenURLResponse {
	result_url: string;
}

const useShortener = (): [
	string,
	boolean,
	string | null,
	(url: string) => Promise<void>
] => {
	const [shortenedURL, setShortenedURL] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const shortenURL = async (url: string) => {
		setLoading(true);
		const fetchURL = 'https://api-ssl.bitly.com/v4/shorten';
		try {
			const resp = await fetch(fetchURL, {
				method: 'POST',
				body: JSON.stringify({ long_url: window.encodeURI(url) }),
			});
			console.log(resp);
			const data: ShortenURLResponse = await resp.json();
			console.log(data);
			// setShortenedURL(data.result_url);
		} catch (err) {
			console.log(err);
			setError(
				'An error occurred while shortening the URL. Please try again'
			);
		} finally {
			setLoading(false);
		}
	};

	return [shortenedURL, isLoading, error, shortenURL];
};

export default useShortener;
