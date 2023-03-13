import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { fetchCountries } from '$lib/server/api';

export const load: PageServerLoad = async ({setHeaders}) => {
  try {
    const countries = await fetchCountries();
    setHeaders({ 'cache-control': 'max-age=360' });
		return { countries };

  } catch (error) {
    throw fail(502);
  }
}
