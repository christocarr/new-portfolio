<script>
	export let href;
</script>

<div class="card">
	<a {href}><slot /></a>
</div>

<style>
	.card {
		border-radius: 20px;
		overflow: hidden;
		box-shadow: var(--shadow-elevation-medium);
	}

	a:link {
		text-decoration: none;
		color: #424242;
	}
</style>
