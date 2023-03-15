import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { userData, fetchUserData } from '$lib/server/api';

let user: any = [];

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		await fetchUserData();
		userData.subscribe((data) => ({...user} = data));
		setHeaders({ 'cache-control': 'max-age=360' });
		return user;
	} catch (err) {
		throw error(404, {
			message: 'User details not found'
		});
	}
};
