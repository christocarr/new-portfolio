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
	import BlogPostDetails from '$lib/blogPostDetails.svelte';
	export let post;
</script>

<svelte:head>
	<meta name="description" content={prismicH.asText(post.data.excerpt)} />
	<title>Chris Carr - Portfolio</title>
</svelte:head>

<Header pageTitle={prismicH.asText(post.data.title)} />
<BlogPostDetails {post} />
<div class="image-container">
	<img src={prismicH.asImageSrc(post.data.image)} alt={post.data.image.alt} />
</div>
{@html prismicH.asHTML(post.data.body)}

<a sveltekit:prefetch href="/blog">Back</a>

<style>
	.image-container {
		margin: 20px 0 20px 0;
	}
</style>
