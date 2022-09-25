export async function get() {
	const baseUrl = 'https://api.github.com/users/';
	const userName = 'AndrewJBateman';
	const userSearchUrl = `${baseUrl + userName}`;
	const res = await fetch(userSearchUrl);
	const user = await res.json();
	return {
		status: 200,
		body: user
	};
}
