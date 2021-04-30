export const copyURL = (url: string): Promise<void> => {
	return window.navigator.clipboard.writeText(url);
};
