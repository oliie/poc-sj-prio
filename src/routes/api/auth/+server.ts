import { json } from '@sveltejs/kit';

export async function POST() {
	return json({
		firstname: 'Señor',
		lastname: 'Shopalot',
		email: 'senior.shopalot@coolcat.com',
		token: btoa(crypto.randomUUID()),
		points: 6278
	});
}
