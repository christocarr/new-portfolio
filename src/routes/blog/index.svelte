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
	console.log(blogPosts);
	const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<meta
		name="description"
		content="Welcome to my blog. Some thoughts and musings about web development, productivety and life as a web developer."
	/>
	<title>Chris Carr - Blog</title>
</svelte:head>

<Header pageTitle="Blog" />

{#if blogPosts.length === 0}
	<p>Content comming soon...</p>
{/if}

{#each blogPosts as post}
	<div>
		<h3>{prismicH.asText(post.data.title)}</h3>
		<p>{prismicH.asDate(post.first_publication_date).toLocaleDateString('en-GB', dateOptions)}</p>
		<p>{prismicH.asText(post.data.excerpt)}</p>
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
