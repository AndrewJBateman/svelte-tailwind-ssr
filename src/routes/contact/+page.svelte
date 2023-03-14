<script lang="ts">
	import UserCard from '$lib/components/userCard.svelte';
	import type { User } from '$lib/models/user';

	export let data: User;
	let user = data;
	let derivedDate = "2023";

</script>

<svelte:head>
	<title>Contact Page</title>
</svelte:head>

<main>
	<UserCard {user} {derivedDate}/>
</main>
