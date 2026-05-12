/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	semi: true,
	trailingComma: 'all',
	printWidth: 100,
	bracketSpacing: true,
	arrowParens: 'always',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
		{
			files: ['*.json', '*.yml', '*.yaml'],
			options: { useTabs: false, tabWidth: 2 },
		},
	],
};
