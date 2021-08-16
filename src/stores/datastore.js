import { writable } from 'svelte/store';

export const countries = writable([]);

export const fetchCountries = async () => {
	const url = 'https://restcountries.eu/rest/v2/all';
	const res = await fetch(url);
	const data = await res.json();
	const loadedData = data.map((data) => ({
		name: data.name,
		image: data.flag,
		capital: data.capital
	}));
	countries.set(loadedData);
};
