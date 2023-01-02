
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
				menubarFirst: {
					'0%': {
						transform: 'translateY(10px) rotate(45deg)'
					},			
					'50%': {
						transform: 'translateY(10px) rotate(0)'
					},
					'100%': {
						transform: 'translateY(0) rotate(0)'
					}
				},
				menubarLast: {
					'0%': {
						transform: 'translateY(-10px) rotate(-45deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(0)'
					},		
					'100%': {
						transform: 'translateY(0) rotate(0)'
					}
				},
				activeMenubarFirst: {
					'0%': {
						transform: 'translateY(0) rotate(0)'
					},
					'50%': {
						transform: 'translateY(10px) rotate(0)'
					},
					'100%': {
						transform: 'translateY(10px) rotate(45deg)'
					}
				},
				activeMenubarLast: {
					'0%': {
						transform: 'translateY(0) rotate(0)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(0)'
					},
					'100%': {
						transform: 'translateY(-10px) rotate(-45deg)'
					}
				}
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
