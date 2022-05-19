<script context="module">
	export async function load(context) {
		const res = await context.fetch('/thoughts.json');

		const { posts } = await res.json();

		if (res.ok) {
			return {
				props: {
					posts
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch posts')
		};
	}
</script>

<script>
	import Header from '$lib/header.svelte';
	import BuyMeACoffee from '$lib/buyMeACoffee.svelte';
	// export let posts;
</script>

<Header pageTitle="Thoughts" />
<div>
	<p>Coming soon!</p>
	<!-- <ul>
		{#each posts as post}
			<li>
				<a sveltekit:prefetch href={`/blog/${post.id}`}>{post.title}</a>
			</li>
		{/each}
	</ul> -->
	<BuyMeACoffee />
</div>
