// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

const BACKEND_URL_PROD = process.env.BACKEND_URL_PROD ?? 'localhost:3000/email/send/';

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, fileURLToPath } from 'url';
import { resolve } from 'path';

/** Astro integration: inline small CSS files into <style> tags after build to eliminate render-blocking requests */
function inlineSmallCSS() {
	return {
		name: 'inline-small-css',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const distDir = fileURLToPath(dir);

				function walk(dirPath) {
					for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
						const full = resolve(dirPath, entry.name);
						if (entry.isDirectory()) walk(full);
						else if (entry.name.endsWith('.html')) inlineCSS(full, distDir);
					}
				}

				function inlineCSS(htmlPath, distRoot) {
					let html = readFileSync(htmlPath, 'utf8');
					let changed = false;
					html = html.replace(
						/<link rel="stylesheet" href="([^"]*\/_astro\/[^"]*\.css)">/g,
						(match, href) => {
							// Strip base path prefix to get relative path inside dist
							const rel = href.replace(/^\//, '');
							const cssPath = resolve(distRoot, rel);
							try {
								const css = readFileSync(cssPath, 'utf8');
								if (css.length < 25000) { changed = true; return `<style>${css}</style>`; }
							} catch { /* not found, keep link */ }
							return match;
						}
					);
					if (changed) writeFileSync(htmlPath, html, 'utf8');
				}

				walk(distDir);
			},
		},
	};
}

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
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	server: {
		port: process.env.NODE_ENV === 'production' ? (Number(process.env.PORT) || 80) : 4321,
		host: true,
	},
	vite: {
		define: {
			'globalThis.BASE_URL': JSON.stringify('/'),
			'globalThis.BACKEND_URL': JSON.stringify(BACKEND_URL_PROD),
		},
		plugins: [],
	},
	integrations: [tailwind(), inlineSmallCSS()],
});
