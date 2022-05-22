<script context="module">
	import createClient from '$lib/prismicClient.js';

	export async function load({ fetch, params }) {
		const client = createClient(fetch);

		const { uid } = params;

		const post = await client.getByUID('blog_post', uid);

		if (post) {
			return {
				props: {
					post
				}
			};
		}

		return {
			status: 301,
			redirect: '/blog'
		};
	}
</script>

<script>
	import Header from '$lib/header.svelte';
	import * as prismicH from '@prismicio/helpers';
	export let post;
</script>

<Header pageTitle={prismicH.asText(post.data.title)} />
<!-- <h3>{prismicH.asText(post.data.title)}</h3> -->
{@html prismicH.asDate(post.first_publication_date).toLocaleDateString()}
<img src={prismicH.asImageSrc(post.data.image)} alt={post.data.image.alt} />
{@html prismicH.asHTML(post.data.body)}

<a sveltekit:prefetch href="/blog">Back to blog posts</a>
