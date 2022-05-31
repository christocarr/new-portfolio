<script>
	import * as prismicH from '@prismicio/helpers';
	export let post;
	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<div class="post-details">
	<p class="date">
		{prismicH.asDate(post.first_publication_date).toLocaleDateString('en-GB', dateOptions)}
	</p>
	<p class="seperator">&#9679;</p>
	<p class="reading-time">{prismicH.asText(post.data.reading_time)} min read</p>
</div>

<style>
	.post-details {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.post-details p {
		font-size: 14px;
		color: #6e6e6e;
		margin-bottom: 0;
	}

	.post-details .seperator {
		font-size: 12px;
		margin: 0 10px;
	}
</style>
