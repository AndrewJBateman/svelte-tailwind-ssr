<script lang="ts">
	import type { PageData } from './$types';
	import CountryDetailCard from '$lib/components/countryDetailCard.svelte';

	export let data: PageData;
	let country = data.country;
</script>

<svelte:head>
	<title>Country Details for {country.name}</title>
</svelte:head>

<div class="px-auto pt-2">
	<CountryDetailCard {country} />
</div>
