<script context="module">
	import { user, derivedDate } from './../store/datastore';
	import UserCard from './../components/userCard.svelte';
</script>

<svelte:head>
	<title>Contact Page</title>
</svelte:head>

<main>
	<UserCard {user} {derivedDate} />
</main>
