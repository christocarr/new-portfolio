<script context="module">
	export async function load(context) {
		const res = await context.fetch('/blog.json');

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
	import PageTitle from '../../lib/pageTitle.svelte';
	import BuyMeACoffee from '$lib/buyMeACoffee.svelte';
	// export let posts;
</script>

<PageTitle title="Thoughts" />
<div>
	<p>Comming soon!</p>
	<!-- <ul>
		{#each posts as post}
			<li>
				<a sveltekit:prefetch href={`/blog/${post.id}`}>{post.title}</a>
			</li>
		{/each}
	</ul> -->
	<BuyMeACoffee />
</div>
