<script>
	import { fade } from 'svelte/transition';
	export let country;
</script>

<div
	class="list-none p-6 mx-auto bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col items-center max-w-sm"
>
	<img class="h-30 w-45" src={country.flag} alt={country.name} />
	<h1 class="text-2xl pt-2">{country.name}</h1>

	<table class="my-2 text-xs">
		<tbody>
			<tr>
				<td class="px-2 font-semibold text-gray-500">
					<span class="font-bold text-gray-900">Capital:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.capital} </td>
			</tr>
			<tr>
				<td class="px-2">
					<span class="font-bold text-gray-900">Sub-Region, Region:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.subregion}, {country.subregion}</td>
			</tr>
			<tr>
				<td class="px-2">
					<span class="font-bold text-gray-900">Main Language:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.languages[0].nativeName}</td>
			</tr>
      <tr>
				<td class="px-2">
					<span class="font-bold text-gray-900">Main Currency:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.currencies[0].name} ({country.currencies[0].symbol})</td>
			</tr>
      <tr>
				<td class="px-2">
					<span class="font-bold text-gray-900">Population:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.population} </td>
			</tr>
      <tr>
				<td class="px-2">
					<span class="font-bold text-gray-900">Main Time Zone:</span>
				</td>
				<td class="px-2 text-xs text-gray-600"> {country.timezones[0]} </td>
			</tr>
		</tbody>
	</table>

	<div class="py-2 px-4">
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>alpha2: {country.alpha2Code}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>alpha3: {country.alpha3Code}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>Web: {country.topLevelDomain}</span
		>
    <span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>Lat/Lng: {country.latlng}</span
		>
	</div>

  <!--button to change photo-->
  <div class="text-center">
    <button
      class="px-2 py-2 text-white bg-blue-900 rounded-lg w-full/2 focus:outline-none"
      href={`/index`}
      transition:fade
    >
      Back to List
    </button>
  </div>
</div>
