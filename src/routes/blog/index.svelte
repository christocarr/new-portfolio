<script context="module">
	import createClient from '$lib/prismicClient.js';

	export async function load({ fetch }) {
		const client = createClient(fetch);
		const blogPosts = await client.getAllByType('blog_post');

		return {
			props: { blogPosts }
		};
	}
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	import Header from '$lib/header.svelte';
	import BuyMeACoffee from '$lib/buyMeACoffee.svelte';
	export let blogPosts;
</script>

<Header pageTitle="Blog" />

{#each blogPosts as post}
	<div>
		<h3>{prismicH.asText(post.data.title)}</h3>
		<a sveltekit:prefetch class="blog-post-link" href={`/blog/${post.uid}`}>Read more...</a>
	</div>
{/each}
<BuyMeACoffee />

<!-- {#await prismicQuery}
<p>Loading...</p>
{:then prismicResponse}
<h3>{prismicH.asText(prismicResponse.data.title)}</h3>
{@html prismicH.asHTML(prismicResponse.data.thoughts_post_content)}
{:catch error}
<pre>{error.message}</pre>
{/await} -->
<style>
	div {
		margin-bottom: 20px;
	}

	h3 {
		font-size: 25px;
	}
</style>
