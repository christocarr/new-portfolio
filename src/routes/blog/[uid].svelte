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

	const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<Header pageTitle={prismicH.asText(post.data.title)} />
{@html prismicH.asDate(post.first_publication_date).toLocaleDateString('en-GB', dateOptions)}
<div class="image-container">
	<img src={prismicH.asImageSrc(post.data.image)} alt={post.data.image.alt} />
</div>
{@html prismicH.asHTML(post.data.body)}

<a sveltekit:prefetch href="/blog">Back to blog posts</a>

<style>
	.image-container {
		margin: 20px 0 20px 0;
	}

	pre {
		color: white;
		background-color: black;
	}
</style>
