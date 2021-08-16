import { writable } from 'svelte/store';

export const countries = writable([]);

const fetchCountry = async () => {
	const url = 'https://restcountries.eu/rest/v2/all';
	const res = await fetch(url);
	const data = await res.json();
	const loadedData = data.map((data) => {
    return data;
  });
	countries.set(loadedData);
};
fetchCountry();
