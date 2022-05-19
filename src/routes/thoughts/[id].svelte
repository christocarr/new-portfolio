<script context="module">
	export async function load({ params }) {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

		const post = await res.json();

		if (res.ok) {
			return {
				props: {
					post
				}
			};
		}

		return {
			status: 301,
			redirect: '/thoughts'
		};
	}
</script>

<script>
	export let post;
</script>

<div>
	<h2>{post.title}</h2>
	<p>{post.body}</p>

	<a href="/thoughts"> Back to posts</a>
</div>
