<script context="module">
	import createClient from '$lib/prismicClient.js';

	export async function load({ fetch }) {
		const client = createClient(fetch);
		const thoughts = await client.getAllByType('thoughts');

		return {
			props: { thoughts }
		};
	}
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	import Header from '$lib/header.svelte';
	import BuyMeACoffee from '$lib/buyMeACoffee.svelte';
	export let thoughts;
</script>

<Header pageTitle="Thoughts" />

<p>Coming soon!</p>
{#each thoughts as post}
	<h3>{prismicH.asText(post.data.title)}</h3>
	<a href={`/thoughts/${post.uid}`}>Read more...</a>
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
