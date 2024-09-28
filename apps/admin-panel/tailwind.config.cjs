/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'../../node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FF8144',
					50: '#FFFDFC',
					100: '#FFEFE7',
					200: '#FFD3BE',
					300: '#FFB896',
					400: '#FF9C6D',
					500: '#FF8144',
					600: '#FF5B0C',
					700: '#D34500',
					800: '#9B3200',
					900: '#632000',
					950: '#471700'
				}
			}
		}
	}
}

module.exports = config
