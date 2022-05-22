import * as prismic from '@prismicio/client';

//portfolio was already taken at Prismic
const repoName = 'portfoolio';

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
	{
		type: 'blog_post',
		path: '/:uid'
	}
];

const createClient = (fetch) => {
	const clientOptions = {
		fetch,
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	return client;
};

export default createClient;
