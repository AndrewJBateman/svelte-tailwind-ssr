<script>
	import { countries } from '../stores/datastore';
  console.log($countries[0]);
</script>

<svelte:head>
	<title>Svelte Kit API Data</title>
</svelte:head>
<h1>Svelte Kit API Data</h1>

{#each $countries as country}
<p>{country.name}</p>
{/each}
