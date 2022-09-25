export async function get({ params }) {
	const id = params.id;
	const url = `https://restcountries.eu/rest/v2/alpha/${id}`;
	const res = await fetch(url);
	const country = await res.json();
	return {
		status: 200,
		body: country
	};
}
