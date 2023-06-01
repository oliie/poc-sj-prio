import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const response = await fetch('/api/shops');

  if (!response.ok) throw error(404, { message: 'Sidan kunde inte hittas' });

  return { shopList: await response.json() };
}
