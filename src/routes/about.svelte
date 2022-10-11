<script context="module">
	export const load = async ({ fetch }) => {
		//get website carbon badge data
		const response = await fetch(
			'https://api.websitecarbon.com/b?url=https://www.iamchriscarr.com'
		);
		return {
			props: {
				data: await response.json()
			}
		};
	};
</script>

<script>
	import Header from '$lib/header.svelte';
	export let data;
	const { c, p, url } = data;
</script>

<svelte:head>
	<meta
		name="description"
		content="Find out who Chris Carr is and what keeps him out of trouble."
	/>
	<title>Chris Carr - About</title>
</svelte:head>

<section>
	<Header pageTitle="About" />
	<p>
		I'm an ambitious and determined Web Developer and I love creating great user interfaces and
		things for the web.
	</p>
	<p>
		I started my web development journey when I built my first website over ten years ago - a
		photography portfolio. So much has changed in the development world since then and to find out
		if I still enjoyed web development, I took part in Udacity's Google Developer Challenge
		Scholarship which I completed and then was given a chance to take part in the full Google
		Developer Nanodegree Scholarship, which I successfully completed.
	</p>
	<p>
		Since then, I have not looked back and continue honing my web dev skills. Generally, I enjoy
		programming and enjoy using and learning programming languages such as Java, Python and C#. But
		what really fuels the fire is web development and I love using tech such as Java, React, Svelte
		and especially the <a href="https://jamstack.org/">Jamstack</a>, to build modern websites and
		apps.
	</p>
	<p>
		During my past employment in the railway industry, I was involved in maintaining and upgrading
		the railway infrastructure for London Underground and Network Rail. Taking my passion for web
		development to the next level I have been striving towards a career change as a Front-end
		Developer and hope to share my passion and knowledge in a collaborative environment where the
		software we build will be used by millions of satisfied users.
	</p>
	<p>
		Currently, I am a part-time student at The Open University studying towards a BSc in Computing
		and IT.
	</p>
</section>

<div class="carbon-badge">
	<div class="inner">
		<p>{c}g of CO<sub>2</sub>/view</p>
		<a href="https://www.websitecarbon.com/">Website Carbon</a>
	</div>
	<p>Cleaner than {p}% of pages tested</p>
</div>

<style>
	.carbon-badge {
		font-size: 12px;
		width: 260px;
		padding: 7px;
		text-align: center;
		background-color: white;
		border: 1px solid var(--border-color);
	}

	.carbon-badge p {
		font-weight: bold;
		color: #0e11a8;
		margin-bottom: 0;
		padding-top: 5px;
	}

	.carbon-badge .inner {
		display: flex;
		width: 100%;
	}

	.carbon-badge .inner p,
	.carbon-badge .inner a {
		width: 50%;
		text-align: center;
		padding: 5px 0;
	}

	.carbon-badge .inner p {
		height: 100%;
		margin: 0;
		color: #0e11a8;
		border: 1px solid #00ffbc;
		border-right: none;
		border-radius: 5px 0 0 5px;
	}

	.carbon-badge .inner a {
		color: white;
		background-color: #0e11a8;
		border-radius: 0 5px 5px 0;
	}
</style>
