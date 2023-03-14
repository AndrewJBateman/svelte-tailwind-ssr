import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchUser } from '$lib/server/api';

export const load: PageServerLoad = async ({setHeaders}) => {
  try {
    const user = await fetchUser();
		console.log('user: ', user);
    setHeaders({ 'cache-control': 'max-age=360' });
		return { user };

	} catch (err) {
		throw error(404, {
			message: 'User details not found'
		})
	}
}