<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
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
	<div class="footer-content">
		<a href="mailto:christocarr@outlook.com"><img src={Email} alt="email icon" /></a>
		<a href="https://twitter.com/ChrisofCarr"><img src={Twitter} alt="twitter icon" /></a>
		<a href="https://github.com/christocarr"><img src={Github} alt="github icon" /></a>
		<a href="https://www.instagram.com/christocarrgrapher/"
			><img src={Instagram} alt="instagram icon" /></a
		>
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
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 90px;
		border-top: rgb(223, 223, 223) 1px solid;
	}

	.footer-content {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.footer-content a {
		width: 30px;
		height: auto;
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
