/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mainblue': '#4C77AB',
				'mainyellow': '#E0B95A',
			},
			fontFamily: {
			display: ['Imprima'],
		},
	},
	plugins: [],
}
}