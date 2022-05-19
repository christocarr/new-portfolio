<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error, status;

	$: console.log(error);
</script>

<h2>Error {status}</h2>

<p>{error.message}</p>
<p>Please use a link to one of my pages:</p>

<nav>
	<ul>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
	</ul>
</nav>
