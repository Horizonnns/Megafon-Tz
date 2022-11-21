/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// header
				header: 'repeat(auto-fit, minmax(180px, auto))',

				// body
				body: 'repeat(auto-fit, minmax(500px, auto))',
			},

			boxShadow: {
				custom: 'rgb(0 0 0 / 10%) 0px 3px 8px',
			},
		},
	},
	plugins: [],
};
