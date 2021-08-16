<script>
	import { countries, fetchCountries } from '../stores/datastore';
	import CountryCard from '../components/countryCard.svelte';

	let searchTerm = '';
	let filteredCountries = [];

	$: {
		if (searchTerm) {
			filteredCountries = $countries.filter((country) =>
				country.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredCountries = [...$countries];
		}
	}
	fetchCountries();
</script>

<svelte:head>
	<title>Svelte Kit API Data</title>
</svelte:head>
<!-- <h1 classs="text-4xl text-center my-8 uppercase">Svelte Kit API Data</h1> -->

<input
	class="w-full rounded-md text-lg p-2 border-2 border-gray-200"
	type="text"
  bind:value={searchTerm}
	placeholder="Search countries"
/>

<div class="py-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
	{#each filteredCountries as country}
		<CountryCard {country} />
	{/each}
</div>
