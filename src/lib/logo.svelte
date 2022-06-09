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

		font-size: 20px;
		width: 50px;
		height: 50px;
		background-color: var(--primary-color);
	}

	a {
		font-weight: 600;
		text-decoration: none;
		padding: 15px;
	}

	a:link,
	a:visited {
		color: var(--background-color);
	}

	@media screen and (min-width: 768px) {
		div {
			width: 70px;
			height: 70px;
			font-size: 30px;
		}
	}
</style>
