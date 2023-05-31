export async function load({ fetch }) {
	const response = await fetch('/api/shops');
	const shopList = await response.json();

	return { shopList };
}
