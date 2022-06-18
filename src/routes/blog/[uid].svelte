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
	import BuyMeACoffee from '$lib/buyMeACoffee.svelte';
	export let post;
</script>

<svelte:head>
	<meta name="description" content={prismicH.asText(post.data.excerpt)} />
	<title>Chris Carr - {prismicH.asText(post.data.title)}</title>
</svelte:head>

<article>
	<Header pageTitle={prismicH.asText(post.data.title)} />
	<BlogPostDetails {post} />
	<div class="image-container">
		<img
			src={prismicH.asImageSrc(post.data.image)}
			alt={post.data.image.alt}
			width="8"
			height="5"
		/>
	</div>

	{#each post.data.body1 as slice}
		{#if slice.slice_type === 'code_block'}
			{@html prismicH.asHTML(slice.primary.code)}
		{:else if slice.slice_type === 'text_block'}
			{@html prismicH.asHTML(slice.primary.text)}
		{/if}
	{/each}
</article>

<a sveltekit:prefetch href="/blog">Back</a>

<BuyMeACoffee />

<style>
	.image-container {
		margin: 20px 0 20px 0;
	}

	.image-container img {
		width: 100%;
		height: auto;
	}
</style>
