<script lang="ts">
	import type { User } from '$lib/models/user';
	import { fade } from 'svelte/transition';
	export let user: User;
	export const currentDate = new Date().toLocaleDateString('en-GB');
</script>

<main>
	<div class="min-h-screen min-w-screen" transition:fade>
		<div class="flex justify-center w-full h-screen pt-8 mx-auto">
			<div class="max-w-xs">
				{#if user}
					<div class="shadow-xl rounded-lg bg-gray-100">
						<div class="px-2 pt-4 photo-wrapper">
							<img
								class="w-40 h-40 mx-auto rounded-full"
								src={user.avatar_url}
								alt="Github user profile"
								width="40"
								height="40"
							/>
						</div>
						<div class="p-2">
							<h3 class="pb-1 text-xl font-bold leading-8 text-center text-blue-900">
								<span class="text-xs italic text-gray-600">App by</span>
								<pre>{user.name}</pre>
							</h3>
							<div class="text-center table-text-left">
								<p class="px-2 pb-1 text-xs text-gray-600">
									{user.bio}
								</p>
							</div>
							<table class="mx-auto my-2 text-xs">
								<tbody>
									<tr>
										<td class="px-2">
											<span class="font-bold text-gray-900">Github Repos:</span>
										</td>
										<td class="px-2 text-xs text-gray-600">
											{user.public_repos}
										</td>
									</tr>
									<tr>
										<td class="px-2">
											<span class="font-bold text-gray-900">Location:</span>
										</td>
										<td class="px-2 text-xs text-gray-600">Spain, France</td>
									</tr>
									<tr>
										<td class="px-2">
											<span class="font-bold text-gray-900">Updated</span>
										</td>
										<td class="px-2 text-xs text-gray-600">
											{currentDate}
										</td>
									</tr>
								</tbody>
							</table>

							<div class="my-3 text-center">
								<a
									class="mr-5 text-xs italic font-medium text-indigo-600 hover:underline hover:text-indigo-800"
									href="https://github.com/AndrewJBateman"
									target="_blank"
									rel="noopener noreferrer">See my Github profile</a
								>
								<a
									class="text-xs italic font-medium text-indigo-600 hover:underline hover:text-indigo-800"
									href="https://andrewbateman.org/contact"
									target="_blank"
									rel="noopener noreferrer">Send me a message</a
								>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
