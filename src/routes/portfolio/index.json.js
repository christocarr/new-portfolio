import SIBIImage from '$lib/assets/image.jpg';
import UnsplashImage from '$lib/assets/unsplash.jpg';

export async function get() {
	const portfolio = [
		{
			id: 'unsplash-app',
			title: 'Unsplash App',
			subtitle: 'Stock Photography Viewer',
			body: `<p>The app allows users to view photos, search for photos, explore random photos, and save photos from the Unsplash stock photography website.</p>
			<p>Unsplash App consumes various endpoints from the <a href="https://unsplash.com/developers">Unsplash</a> stock photography API. The Unsplash website is a popular resource for web developers and is used by photography enthusiasts to showcase their photography.</p>
			<p>While creating Unsplash App I solidified and improved my knowledge of React, Redux, React Router, and styled-components.</p>`,
			image: UnsplashImage,
			alt: 'Unsplash App',
			ghLink: `https://github.com/christocarr/unsplash-app`,
			liveLink: `https://instagram-clone-sandy.vercel.app/`
		},
		{
			id: 'sibi-activity-search',
			title: 'SIBI Activity Search',
			subtitle: 'Volunteering Project',
			body: `<p>A responsive React web app that pulls in spreadsheet data and allows the user to search for activities within an area of the patient's postcode. Please use a Brent postcode when testing the app e.g. HA9 7LE</p>
			<p>CVS Brent, an organization that provides community support, has a spreadsheet with over 1600 records they were using in their Social Isolation in Brent Initiative (SIBI). The initiative allows health care professionals help people that are isolated due to health problems, find social activities they might be interested in. Searching for a particular activity on a spreadsheet that contains 1600 entries is a tiresome process.</p>`,
			image: SIBIImage,
			alt: 'SIBI Activity Search',
			ghLink: `https://github.com/christocarr/sibi-activity-search-v3`,
			liveLink: `https://activity-search.netlify.app/`
		}
	];

	return {
		status: 200,
		body: { portfolio }
	};
}
