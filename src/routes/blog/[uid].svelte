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

<svelte:head>
	<meta name="description" content={prismicH.asText(post.data.excerpt)} />
	<title>Chris Carr - Portfolio</title>
</svelte:head>

<Header pageTitle={prismicH.asText(post.data.title)} />

<div class="image-container">
	<img src={prismicH.asImageSrc(post.data.image)} alt={post.data.image.alt} />
</div>
<div class="post-details">
	<p>
		{@html prismicH.asDate(post.first_publication_date).toLocaleDateString('en-GB', dateOptions)}
	</p>
	<p>{prismicH.asText(post.data.reading_time)} minutes reading time</p>
</div>
{@html prismicH.asHTML(post.data.body)}

<a sveltekit:prefetch href="/blog">Back to blog posts</a>

<style>
	h2 {
		margin-bottom: 0;
	}

	.post-details {
		display: flex;
		justify-content: space-between;
	}
	.post-details p {
		font-size: 14px;
		color: #6e6e6e;
	}
	.image-container {
		margin: 20px 0 20px 0;
	}
</style>
