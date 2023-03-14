<script>
	import Nav from './nav.svelte';
</script>

<div class="max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
	@import url('../styles/global.css');
</style>
