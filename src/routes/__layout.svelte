<script>
	import Nav from '../components/nav.svelte';
</script>

<div class="max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
	@import url('../styles/global.css');
</style>
