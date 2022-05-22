<script context="module">
	import createClient from '$lib/prismicClient.js';

	export async function load({ fetch }) {
		const client = createClient(fetch);
		const projects = await client.getAllByType('projects');

		return {
			props: { projects }
		};
	}
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	import Header from '$lib/header.svelte';
	import Card from '$lib/card.svelte';
	export let projects;
</script>

<Header pageTitle="Portfolio" />

<ul class="container">
	{#each projects as project}
		<li>
			<!-- <Card> -->
			<img src={prismicH.asImageSrc(project.data.image)} alt={project.data.image.alt} />
			<div class="inner">
				<header>
					<h3>{prismicH.asText(project.data.title)}</h3>
					<h4>{prismicH.asText(project.data.subtitle)}</h4>
					<div class="project-links">
						<a sveltekit:prefetch href={prismicH.asLink(project.data.github_link)}>Github link</a>
						<a sveltekit:prefetch href={prismicH.asLink(project.data.app_link)}>Web link</a>
					</div>
				</header>

				{@html prismicH.asHTML(project.data.description)}
			</div>
			<!-- </Card> -->
		</li>
	{/each}
</ul>

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
		flex-direction: column;
		color: #416b8b;
		margin-bottom: 10px;
	}

	@media screen and (min-width: 1024px) {
		.container {
			display: flex;
			justify-content: space-between;
		}

		li {
			width: calc(50% - 20px);
		}
	}
</style>
