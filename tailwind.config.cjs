/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// header
				header: 'repeat(auto-fit, minmax(180px, auto))',
			},
		},
	},
	plugins: [],
};
