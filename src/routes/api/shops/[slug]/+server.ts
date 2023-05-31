import { json } from '@sveltejs/kit';

export async function GET({ fetch, params }) {
  const response = await fetch(`/${params.slug}.json`);
  const data = await response.json();

  return json(data);
}
