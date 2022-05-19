<script>
	import Logo from '$lib/logo.svelte';
	import '../global.css';
</script>

<header>
	<Logo title="CC" />
	<nav>
		<ul>
			<a href="/about">About</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Thoughts</a>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="footer-content"><p>Copyright 2020 - present Chris Carr Web Development</p></div>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1em;
	}

	nav {
		margin-right: 1em;
	}

	main {
		padding: 0 20px;
	}

	ul {
		padding: 0;
	}

	a {
		text-decoration: none;
		padding: 5px;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		width: 100vw;
		height: 5em;
	}

	.footer-content {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 60%;
		height: 100%;
		border-top: rgb(223, 223, 223) 1px solid;
	}

	@media screen and (min-width: 768px) {
		main {
			width: 700px;
			margin: 0 auto;
		}
	}
</style>
