import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageServerLoad = async ({ params, fetch }) => {
	// TODO: errror handling doesn't work at the moment…

	try {
		const response = await fetch(`/api/shops/${params.slug}`);
		return await response.json();
	} catch (e) {
		console.log('nothing to see');
		throw error(404);
	}
};
