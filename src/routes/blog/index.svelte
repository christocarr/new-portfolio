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
	import BlogPostDetails from '$lib/blogPostDetails.svelte';
	export let blogPosts;
</script>

<svelte:head>
	<meta
		name="description"
		content="Welcome to my blog. Some thoughts and musings about web development, productivity and life as a web developer."
	/>
	<title>Chris Carr - Blog</title>
</svelte:head>

<section>
	<Header pageTitle="Blog" />

	{#if blogPosts.length === 0}
		<p>Content coming soon...</p>
	{/if}

	{#each blogPosts as post}
		<div>
			<h3>{prismicH.asText(post.data.title)}</h3>
			<BlogPostDetails {post} />
			<p>{prismicH.asText(post.data.excerpt)}</p>
			<a sveltekit:prefetch class="blog-post-link" href={`/blog/${post.uid}`}>Read more</a>
		</div>
	{/each}
</section>

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
