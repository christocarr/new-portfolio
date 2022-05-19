import SIBIImage from '$lib/assets/image.jpg';
import UnsplashImage from '$lib/assets/unsplash.jpg';

export async function get() {
	const portfolio = [
		{
			id: 1,
			title: 'SIBI Activity Search',
			body: 'body text',
			image: SIBIImage,
			alt: 'SIBI Activity Search'
		},

		{
			id: 2,
			title: 'Unsplash App',
			body: 'body text',
			image: UnsplashImage,
			alt: 'Unsplash App'
		}
	];

	return {
		status: 200,
		body: { portfolio }
	};
}
