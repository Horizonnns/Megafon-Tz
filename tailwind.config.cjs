/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				// mobile (270px)
				mb: '270px',

				// tablet (560px)
				tb: '560px',
			},

			gridTemplateColumns: {
				// header
				header: 'repeat(auto-fit, minmax(180px, auto))',

				// body
				body: 'repeat(auto-fit, minmax(390px, auto))',
			},

			boxShadow: {
				custom: 'rgb(0 0 0 / 10%) 0px 3px 8px',
			},
		},
	},
	plugins: [],
};
