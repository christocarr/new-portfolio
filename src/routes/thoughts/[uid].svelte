<script context="module">
	import createClient from '$lib/prismicClient.js';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);

		const { uid } = params;

		const post = await client.getByUID('thoughts', uid);

		if (post) {
			return {
				props: {
					post
				}
			};
		}

		return {
			status: 301,
			redirect: '/thoughts'
		};
	}
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	export let post;
</script>

<h3>{prismicH.asText(post.data.title)}</h3>
{@html prismicH.asDate(post.first_publication_date).toLocaleDateString()}
<img src={prismicH.asImageSrc(post.data.image)} alt={post.data.image.alt} />
{@html prismicH.asHTML(post.data.body)}

<a href="/thoughts">Back to blog posts</a>
