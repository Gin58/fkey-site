const keyframes = require('./tailwind/keyframes/index.js')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary': '#89ced1',
			'black': '#222222'
		},
		extend: {
			keyframes: {
				...keyframes,
			}
		},
		animation: {
			menubarFirst: 'menubarFirst 0.75s forwards',
			menubarLast: 'menubarLast 0.75s forwards',
			activeMenubarFirst: 'activeMenubarFirst 0.75s forwards',
			activeMenubarLast: 'activeMenubarLast 0.75s forwards'
		}
	},
	plugins: [],
}
