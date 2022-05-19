export async function get() {
	const posts = [
		{
			id: 1,
			title: 'post title',
			body: 'body text'
		},

		{
			id: 2,
			title: 'qui est esse',
			body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto. quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
		},

		{
			id: 3,
			title: 'nesciunt quas odio',
			body: 'ut aspernatur corporis harum nihil quis provident sequimollitia nobis aliquid molestia eperspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'
		}
	];

	return {
		status: 200,
		body: { posts }
	};
}
