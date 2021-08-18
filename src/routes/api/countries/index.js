export async function get() {
	const url = 'https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code';
	const res = await fetch(url);
	const data = await res.json();
	const countries = data.map((data) => {
		return {
			name: data.name,
			id: data.alpha3Code.toLowerCase(),
			image: data.flag
		};
	});
	return {
		status: 200,
		body: countries
	};
}
