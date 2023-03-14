import { writable } from 'svelte/store';
import { startWith, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import type { apiCountryBrief, CountryBrief } from '$lib/models/country';
import type { User } from '$lib/models/user';

const COUNTRIES_BASE_PATH = 'https://restcountries.com/v2';
const GITHUB_BASE_PATH = 'https://api.github.com/users/';

export const countries = writable([]);
export const derivedDate = new Date().toLocaleDateString('en-GB');

// Fetch user data from Github REST API
export const fetchUser = async () => {
	const url = `${GITHUB_BASE_PATH} + 'AndrewJBateman'`;
	const res = await fetch(url);
	let userData: User;
	if (res.ok) {
		const data = await res.json();
		userData = data.map((x: any) => x.response);
		console.log('userData: ', userData);
		return userData;
	}
	throw new Error('Unable to fetch user data');
};

// export const user = ajax({
// 	url: `${GITHUB_BASE_PATH + 'AndrewJBateman'}`
// }).pipe(
// 	map((x) => x.response),
// 	startWith([])
// );

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
		return null;
	}
};
