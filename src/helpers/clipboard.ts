export const copyURL = (
	url: string,
	element: HTMLInputElement
): Promise<void> => {
	if (window.navigator.clipboard !== undefined) {
		return window.navigator.clipboard.writeText(url);
	}
	return new Promise((res) => {
		element.select();
		window.document.execCommand('copy');
		window.getSelection()?.removeAllRanges();
		res();
	});
};
