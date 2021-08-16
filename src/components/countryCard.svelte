<script>
	import { fade } from 'svelte/transition';
	export let country;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/about`}
	transition:fade
>
	<img class="h-20 w-30" src={country.image} alt={country.name} />
	<h2 class="">{country.name}</h2>
</a>
