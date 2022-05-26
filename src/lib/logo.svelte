<script>
	export let title;
</script>

<div>
	<a sveltekit:prefetch href="/">
		{title}
	</a>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background-color: #416b8b;
	}

	a {
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;
		padding: 15px;
	}

	a:link {
		color: #fcfaf4;
	}

	a:visited {
		color: #fcfaf4;
	}
</style>
