import { json } from '@sveltejs/kit';

export async function POST() {
	return json({
		firstname: 'Señor',
		lastname: 'Shopalot',
		token: btoa(crypto.randomUUID()),
		points: 6278
	});
}
