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
	import { dataset_dev } from 'svelte/internal';
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
		<div class="image-credit">
			{@html prismicH.asText(post.data.photo_attribution)}
		</div>
	</div>

	{#each post.data.body1 as slice}
		{#if slice.slice_type === 'code_block'}
			<div class="slice">
				{@html prismicH.asHTML(slice.primary.code)}
			</div>
		{:else if slice.slice_type === 'text_block'}
			<div class="slice">
				{@html prismicH.asHTML(slice.primary.text)}
			</div>
		{:else if slice.slice_type == 'image'}
			<div class="slice">
				<img src={prismicH.asImageSrc(slice.primary.image1)} alt={slice.primary.image1.alt} />
			</div>
		{/if}
	{/each}
</article>

<a sveltekit:prefetch href="/blog">Back</a>

<BuyMeACoffee />

<style>
	.image-container {
		position: relative;
		margin: 20px 0 20px 0;
	}

	.image-container img {
		width: 100%;
		height: auto;
	}

	.image-container .image-credit {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 3px 7px;
		color: var(--background-color);
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 12px;
	}

	.slice {
		margin-bottom: 20px;
	}

	@media screen and (min-width: 768px) {
		.image-container .image-credit {
			font-size: 14px;
		}
	}
</style>
