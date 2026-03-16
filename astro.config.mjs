// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProduction = process.env.NODE_ENV === 'production';
const BACKEND_URL_PROD = isProduction ? process.env.BACKEND_URL_PROD : 'localhost:3000/email/send/';

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
	base: isProduction ? "/portfolio-site/" : "/",
	vite: {
		define: {
			'globalThis.BASE_URL': JSON.stringify(
				isProduction ? '/portfolio-site/' : '/'
			),
			'globalThis.BACKEND_URL': JSON.stringify(BACKEND_URL_PROD),
		},
	},
	integrations: [tailwind()],
});
