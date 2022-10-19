<script>
	import { fade } from 'svelte/transition';
	const subTitles = ['Web Developer', 'Stargazer', 'Frontend Developer', 'Lifelong Learner'];
	let index = 1;
	$: subTitle = subTitles[0];
	function getSubtitle() {
		subTitle = subTitles[index];
		index++;

		if (index === subTitles.length) {
			index = 0;
		}
	}

	setInterval(getSubtitle, 1500);
</script>

<svelte:head>
	<meta
		name="description"
		content="Welcome to the website of Chris Carr which showcases a portfolio of web development projects and a collection blog posts."
	/>
	<link href="./favicon.ico" type="image/x-icon" rel="icon" />
	<title>Chris Carr - Web Developer</title>
</svelte:head>

<div>
	<header>
		<h1>Chris Carr</h1>
		{#key subTitle}
			<p in:fade={{ duration: 150, delay: 150 }}>{subTitle}</p>
		{/key}
	</header>
</div>

<style>
	div {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 62px;
		font-weight: bolder;
		color: var(--primary-color);
	}

	p {
		font-size: x-large;
		text-align: right;
	}
</style>
