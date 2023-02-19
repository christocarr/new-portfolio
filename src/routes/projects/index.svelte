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

<svelte:head>
	<meta
		name="description"
		content="Here I house some of my web development projects. Each portfolio item has an image of the website, a description as to how and why I built the web app and a link to the Github repo and a link to the live website."
	/>
	<title>Chris Carr - Projects</title>
</svelte:head>

<section>
	<Header pageTitle="Projects" />
	<p>Projects I have worked on that demonstrate my web development skills and knowledge.</p>
	<p>All projects showcased are hosted somewhere on the internet and are Github repositories.</p>
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
							<a href={prismicH.asLink(project.data.github_link)}>Github link</a>
							<a href={prismicH.asLink(project.data.app_link)}>Web link</a>
						</div>
					</header>

					{@html prismicH.asHTML(project.data.description)}
				</div>
				<!-- </Card> -->
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		padding: 0;
		gap: 4%;
	}
	li {
		list-style: none;
		/* margin-bottom: 40px; */
		border: 1px solid var(--border-color);
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
		display: inline-block;
		margin-bottom: 10px;
	}

	.project-links a {
		display: block;
	}

	p:last-of-type {
		margin-bottom: 20px;
	}

	@media screen and (min-width: 1024px) {
		.container {
			display: inline-flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 4%;
		}

		li {
			width: 48%;
			margin-bottom: 0;
		}
	}
</style>
