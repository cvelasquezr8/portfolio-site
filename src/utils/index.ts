export function getPathPage(): string {
	return (globalThis as any).BASE_URL || '/';
}

export function getCurrentLang(): string {
	return window.location.pathname.startsWith('/en') ? 'en' : 'es';
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}
