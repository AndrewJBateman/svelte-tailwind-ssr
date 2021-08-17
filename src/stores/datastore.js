import { writable } from 'svelte/store';

export const countries = writable([]);
const countryDetails = {};

export const fetchCountries = async () => {
	const url = 'https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code';
	const res = await fetch(url);
	const data = await res.json();
	const loadedData = data.map((data) => ({
		name: data.name,
    id: data.alpha3Code.toLowerCase(),
		image: data.flag,
	}));
	countries.set(loadedData);
};

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

}
