/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mainblue': '#385A84',
				'mainyellow': '#8A7500',
				'starryyellow': '#E8E163',
				'maingreen': '#82A047'
			},
			fontFamily: {
			display: ['Imprima'],
		},
	}, 
	plugins: [
		require('@tailwindcss/forms')
	],
} 
}
//4c77ab