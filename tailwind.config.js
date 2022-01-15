module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			satisfy: ['Satisfy', 'cursive'],
			akromin: ['Akronim', 'cursive'],
		},
		extend: {},
	},
	variants: {
		scrollbar: ['rounded'],
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar'),
		require('tailwind-scrollbar-hide'),
	],
}
