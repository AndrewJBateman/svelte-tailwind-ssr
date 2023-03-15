import type { User } from '$lib/models/user';

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { userData } from '$lib/server/api';

let user: any = [];

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		userData.subscribe((x) => (user = x));
		setHeaders({ 'cache-control': 'max-age=360' });
		return {...user};
	} catch (err) {
		throw error(404, {
			message: 'User details not found'
		});
	}
};
