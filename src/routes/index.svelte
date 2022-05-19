<script>
	const subtitles = ['Web Developer', 'Stargazer', 'Traveller'];
</script>

<header>
	<div class="intro">
		<h1>Hi, I'm <span>Chris Carr</span></h1>
		<p>{subtitles[0]}</p>
	</div>
</header>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.intro span {
		font-size: 34px;
		font-weight: bolder;
		color: #416b8b;
	}

	p {
		font-size: large;
	}
</style>
