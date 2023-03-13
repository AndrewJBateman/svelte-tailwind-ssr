<script lang="ts">
	import CountryCard from '$components/countryCard.svelte';
	import { filterByName } from '$components/Filters.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredCountries = data.countries;

	$: lowerName = searchTerm?.toLowerCase();
	$: {
		if (lowerName) {
			filteredCountries = filterByName(data.countries, lowerName);
		} else {
			filteredCountries = data.countries;
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit API Data</title>
</svelte:head>

<input
	class="m-4 w-3/5 rounded-md text-lg p-2 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search countries"
/>

<div class="px-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
	{#each filteredCountries as country, index (index)}
		<CountryCard {country} />
	{/each}
</div>
