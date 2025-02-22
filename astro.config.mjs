// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		}
	},
	output: 'static',
	base: import.meta.env.PROD ? "/portfolio-site/" : "/",
	vite: {
		define: {
			'globalThis.BASE_URL': JSON.stringify(
				import.meta.env.PROD ? '/portfolio-site/' : '/'
			),
			'globalThis.BACKEND_URL': JSON.stringify(
				import.meta.env.PROD ? 'https://email-service-production-e23d.up.railway.app/email/send/' : 'http://localhost:3000/email/send/'
			),
		},
	},
	integrations: [tailwind()],
});
