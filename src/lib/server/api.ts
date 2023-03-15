import { writable } from 'svelte/store';
import type { apiCountryBrief, CountryBrief } from '$lib/models/country';
import type { User } from '$lib/models/user';

const COUNTRIES_BASE_PATH = 'https://restcountries.com/v2';
const GITHUB_BASE_PATH = 'https://api.github.com/users';
const username = 'AndrewJBateman';
export const countries = writable([]);
export const userData = writable([]);
export const derivedDate = new Date().toLocaleDateString('en-GB');

// Fetch user Github data
export const fetchUserData = async () => {
	try {
		const apiData = await fetch(`${GITHUB_BASE_PATH}/${username}`)
			.then(response => response.json());
			userData.set(apiData);
	} catch (error) {
		throw new Error('Unable to fetch user data');
	}
};

// Fetch JSON data - 3 fields only - for all countries from a REST API
export const fetchCountries = async () => {
	const url = `${COUNTRIES_BASE_PATH}/all?fields=name,flag,alpha3Code`;
	const res = await fetch(url);
	let countryBriefData: CountryBrief = { id: '', name: '', image: '' };
	if (res.ok) {
		const data = await res.json();
		countryBriefData = data.map((data: apiCountryBrief) => ({
			id: data.alpha3Code.toLowerCase(),
			name: data.name,
			image: data.flag
		}));
		return countryBriefData;
	}
	throw new Error('Unable to fetch a list of countries');
};

// Fetch JSON data on country with alpha3 code matching id from a REST API
export const fetchCountryById = async (id: string) => {
	try {
		const url = `${COUNTRIES_BASE_PATH}/alpha/${id}`;
		const res = await fetch(url);
		if (res.ok) {
			const countryDetails = await res.json();
			return countryDetails;
		}
	} catch (err: any) {
		throw new Error('Unable to fetch country details', err);
	}
};
