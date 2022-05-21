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
<div>
	<ul>
		{#each projects as project}
			<li>
				<Card>
					<img src={prismicH.asImageSrc(project.data.image)} alt={project.data.image.alt} />
					<div class="inner">
						<h3>{prismicH.asText(project.data.title)}</h3>
						<h4>{prismicH.asText(project.data.subtitle)}</h4>
						{@html prismicH.asHTML(project.data.description)}
						<div class="project-links">
							<a href={prismicH.asLink(project.data.github_link)}
								>{prismicH.asText(project.data.title)} Github repo</a
							>
							<a href={prismicH.asLink(project.data.app_link)}
								>{prismicH.asText(project.data.title)} live</a
							>
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
