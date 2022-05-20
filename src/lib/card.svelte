<script>
	export let href;
</script>

<div class="card">
	<!-- <a {href}><slot /></a> -->
	<slot />
</div>

<style>
	.card {
		border-radius: 10px;
		overflow: hidden;
		background-color: white;
		box-shadow: var(--shadow-elevation-medium);
	}

	a:link {
		text-decoration: none;
		color: #424242;
	}
</style>
