import { writable } from 'svelte/store';
import { startWith, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export const countries = writable([]);
export const derivedDate = new Date().toLocaleDateString("en-GB");
const countryDetails = {};

// Fetch user data from Github REST API
const baseUrl = 'https://api.github.com/users/';
const userSearchUrl = `${baseUrl + 'AndrewJBateman'}`;
const token = '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';
export const user = ajax({
	url: userSearchUrl,
	headers: {
		authorization: `token ${token}`
	}
}).pipe(
	map((x) => x.response),
	startWith([])
);

// Fetch JSON data - 3 fields only - for all countries from a REST API
export const fetchCountries = async () => {
	const url = 'https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code';
	const res = await fetch(url);
	const data = await res.json();
	const loadedData = data.map((data) => ({
		name: data.name,
		id: data.alpha3Code.toLowerCase(),
		image: data.flag
	}));
	countries.set(loadedData);
};

// Fetch JSON data on country with alpha3 code matching id from a REST API
export const fetchCountryById = async (id) => {
	if (countryDetails[id]) return countryDetails[id];

	try {
		const url = `https://restcountries.eu/rest/v2/alpha/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		countryDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};
