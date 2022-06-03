<script context="module">
	export const load = async ({ url, fetch }) => {
		const currentRoute = url.pathname;
		//get website carbon badge data
		const response = await fetch(
			'https://api.websitecarbon.com/b?url=https://www.iamchriscarr.com'
		);
		return {
			props: {
				currentRoute,
				data: await response.json()
			}
		};
	};
</script>

<script>
	import { fade } from 'svelte/transition';
	import Logo from '$lib/logo.svelte';
	import Email from '$lib/assets/email.svg';
	import Twitter from '$lib/assets/twitter.svg';
	import Github from '$lib/assets/github.svg';
	import Instagram from '$lib/assets/instagram.svg';
	import '../global.css';
	export let currentRoute;
	export let data;
	const { c, p, url } = data;
</script>

<nav>
	<Logo title="CC" />
	<ul class="nav-list">
		<li>
			<a sveltekit:prefetch href="/about">About</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/portfolio">Portfolio</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/blog">Blog</a>
		</li>
	</ul>
</nav>

{#key currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>
	<div class="social-media">
		<a href="mailto:christocarr@outlook.com"><img src={Email} alt="email icon" /></a>
		<a href="https://twitter.com/ChrisofCarr"><img src={Twitter} alt="twitter icon" /></a>
		<a href="https://github.com/christocarr"><img src={Github} alt="github icon" /></a>
		<a href="https://www.instagram.com/christocarrgrapher/"
			><img src={Instagram} alt="instagram icon" /></a
		>
	</div>
	<div class="carbon-badge">
		<div class="inner">
			<p>{c}g of CO<sub>2</sub>/view</p>
			<a href="https://www.websitecarbon.com/">Website Carbon</a>
		</div>
		<p>Cleaner than {p}% of pages tested</p>
	</div>
</footer>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;
		margin-right: 20px;
	}

	main {
		padding: 0 20px;
		margin-bottom: 20px;
	}

	ul {
		padding: 0;
	}

	li {
		display: inline-block;
		list-style: none;
		margin-bottom: 0;
		padding: 5px;
	}

	ul li:last-of-type {
		padding-right: 0;
	}

	a {
		text-decoration: none;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		padding: 20px;
		border-top: rgb(223, 223, 223) 1px solid;
	}

	.social-media {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-bottom: 20px;
	}

	.social-media a {
		width: 30px;
		height: auto;
	}

	.carbon-badge {
		font-size: 12px;
		width: 260px;
		padding: 10px;
		text-align: center;
		background-color: white;
	}

	.carbon-badge p {
		font-weight: bold;
		color: #0e11a8;
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

	@media screen and (min-width: 768px) {
		main {
			width: 700px;
			margin: 0 auto 20px auto;
			padding: 0;
		}

		.footer-content {
			justify-content: space-between;
			width: 700px;
		}
	}

	@media screen and (min-width: 1024px) {
		nav {
			font-size: larger;
		}
		main {
			width: 800px;
		}

		.footer-content {
			width: 800px;
		}
	}
</style>
