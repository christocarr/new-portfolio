<script>
	const subtitles = ['Web Developer', 'Stargazer', 'Traveller'];
</script>

<header>
	<div class="intro">
		<h1>Hi! I'm <span>Chris Carr</span></h1>
		<p>{subtitles[0]}</p>
	</div>
</header>

<style>
	header {
		height: 100%;
		font-size: 25px;
		text-align: center;
	}
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.intro span {
		font-size: 1.2em;
		font-weight: bolder;
		color: #416b8b;
	}
</style>
