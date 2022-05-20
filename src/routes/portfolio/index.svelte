<script context="module">
	export async function load(context) {
		const res = await context.fetch('/portfolio.json');

		const { portfolio } = await res.json();

		if (res.ok) {
			return {
				props: {
					portfolio
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch portfolio')
		};
	}
</script>

<script>
	import Header from '$lib/header.svelte';
	import Card from '$lib/card.svelte';
	export let portfolio;
</script>

<Header pageTitle="Portfolio" />
<div>
	<ul>
		{#each portfolio as item}
			<li>
				<Card href={`/portfolio/${item.id}`}>
					<img src={item.image} alt={item.alt} />
					<div class="inner">
						<h3>{item.title}</h3>
						<h4>{item.subtitle}</h4>
						{@html item.body}
						<div class="project-links">
							<a href={item.ghLink}>Github Link</a>
							<a href={item.liveLink}>Live Link</a>
						</div>
					</div>
				</Card>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 0;
	}
	li {
		list-style: none;
		margin-bottom: 40px;
	}

	.inner {
		padding: 20px;
		/* line-height: 1.7em; */
	}

	h3 {
		font-size: 25px;
		margin-bottom: 5px;
	}
	h4 {
		font-size: 20px;
		margin-bottom: 10px;
	}
	.project-links {
		display: flex;
		justify-content: space-between;
	}
</style>
