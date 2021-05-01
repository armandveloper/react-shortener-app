import { useState } from 'react';
import { ShortenURLResponse } from '../interfaces/shorten-url.interface';

const useShortener = (): [
	string,
	boolean,
	string | null,
	(url: string) => Promise<void>
] => {
	const [shortenedURL, setShortenedURL] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const apiToken = process.env.REACT_APP_API_TOKEN;

	const shortenURL = async (url: string) => {
		setLoading(true);
		console.log(apiToken);
		const fetchURL = 'https://t.ly/api/v1/link/shorten';
		try {
			const resp = await fetch(fetchURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					long_url: url,
					api_token: apiToken,
				}),
			});

			if (resp.status !== 200) throw new Error(resp.statusText);
			const data: ShortenURLResponse = await resp.json();
			setShortenedURL(data.short_url);
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
