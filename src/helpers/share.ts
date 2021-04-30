export const shareURL = async (url: string) => {
	try {
		await window.navigator.share({ url });
	} catch (err) {
		console.log('Error:', err.name);
	}
};
