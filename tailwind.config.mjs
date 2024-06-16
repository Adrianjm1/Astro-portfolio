export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				jet: 'hsl(0, 0%, 22%)',
				onyx: 'hsl(240, 1%, 17%)',
				'eerie-black': {
					1: 'hsl(240, 2%, 13%)',
					2: 'hsl(240, 2%, 12%)',
				},
				'smoky-black': 'hsl(0, 0%, 7%)',
				white: {
					1: 'hsl(0, 0%, 100%)',
					2: 'hsl(0, 0%, 98%)',
				},
				'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
				'vegas-gold': 'hsl(45, 54%, 58%)',
				'light-gray': 'hsl(0, 0%, 84%)',
				'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
				'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			fontSize: {
				1: '24px',
				2: '18px',
				3: '17px',
				4: '16px',
				5: '15px',
				6: '14px',
				7: '13px',
				8: '11px',
			},
			fontWeight: {
				300: 300,
				400: 400,
				500: 500,
				600: 600,
			},
			boxShadow: {
				1: '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
				2: '0 16px 30px hsla(0, 0%, 0%, 0.25)',
				3: '0 16px 40px hsla(0, 0%, 0%, 0.25)',
				4: '0 25px 50px hsla(0, 0%, 0%, 0.15)',
				5: '0 24px 80px hsla(0, 0%, 0%, 0.25)',
			},
			// No direct support for gradients and transitions in theme.extend
		},
	},
	plugins: [],
}