<script>
	import Logo from '$lib/logo.svelte';
	import '../global.css';
</script>

<nav>
	<Logo title="CC" />
	<ul>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/thoughts">Thoughts</a>
	</ul>
</nav>

<main>
	<slot />
</main>

<footer>
	<div class="footer-content"><p>Copyright 2020 - present Chris Carr Web Development</p></div>
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

	@media screen and (min-width: 768px) {
		main {
			width: 700px;
			margin: 0 auto;
		}

		.footer-content {
			width: calc(700px - 40px);
		}
	}
</style>
