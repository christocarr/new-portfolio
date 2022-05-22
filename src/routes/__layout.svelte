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
	import '../global.css';

	export let currentRoute;

	function getYear() {
		const date = new Date();
		return date.getFullYear();
	}

	$: year = getYear();
</script>

<nav>
	<Logo title="CC" />
	<ul>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/portfolio">Portfolio</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
	</ul>
</nav>

{#key currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>
	<div class="footer-content"><p>Copyright {year} <span>Chris Carr</span> Web Development</p></div>
</footer>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1em;
		margin-right: 1em;
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
	}

	a:link {
		text-decoration: none;
		padding: 5px;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 90px;
	}

	.footer-content {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: calc(100% - 40px);
		height: 100%;
		border-top: rgb(223, 223, 223) 1px solid;
	}

	span {
		font-weight: bolder;
		color: #416b8b;
	}

	@media screen and (min-width: 768px) {
		main {
			width: 700px;
			margin: 0 auto 20px auto;
		}

		.footer-content {
			width: calc(700px - 40px);
		}
	}

	@media screen and (min-width: 1024px) {
		main {
			width: 920px;
		}
	}
</style>
