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

<p>Coming soon!</p>
{#each blogPosts as post}
	<h3>{prismicH.asText(post.data.title)}</h3>
	<a href={`/blog/${post.uid}`}>Read more...</a>
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
