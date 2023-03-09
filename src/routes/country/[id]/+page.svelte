<script context="module">
	import { fetchCountryById } from '../../../store/datastore';
	import CountryDetailCard from '../../../components/countryDetailCard.svelte';

	export async function load(ctx) {
		let id = ctx.params.id;
		console.log('id is: ', id);
		const country = await fetchCountryById(id);
		return { props: { country } };
	}
</script>

<script>
	export let country;
</script>

<svelte:head>
	<!-- <title>Country Details for {country.name}</title> -->
</svelte:head>

<div class="px-auto pt-2">
	<CountryDetailCard {country} />
</div>
