import { json } from '@sveltejs/kit';

export async function GET({ fetch }) {
	const response = await fetch('/shops.json');
	const data = await response.json();

	return json(data);
}
