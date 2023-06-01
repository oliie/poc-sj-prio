import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const response = await fetch(`/api/shops/${params.slug}`);

  if (!response.ok) throw error(404, { message: 'Sidan kunde inte hittas' });

  return await response.json();
};
