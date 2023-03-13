<script lang="ts" context="module">
	export function filterByName<T extends { name: string }>(countries: T[], name: string) {
		return countries.filter((country) => country.name.includes(name));
	}
</script>