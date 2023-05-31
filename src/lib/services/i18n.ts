import sv from './sv-SE';

export function t(key: string): string {
	return sv[key] ? sv[key] : key;
}
