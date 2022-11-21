/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				// mobile (320px)
				mb: '320px',

				// tablet (560px)
				tb: '560px',
			},

			gridTemplateColumns: {
				// header
				header: 'repeat(auto-fit, minmax(180px, auto))',

				// body
				body: 'repeat(auto-fit, minmax(500px, auto))',

				// media_src
				media: 'repeat(auto-fit, minmax(270px, auto))',
			},

			boxShadow: {
				custom: 'rgb(0 0 0 / 10%) 0px 3px 8px',
			},

			padding: {
				// paddings for left plan
				planPaddsL: '32px 220px 32px 25px',

				// paddings for right plan
				planPaddsR: '32px 210px 32px 25px',

				// paddings media
				planPaddsMedia: '32px 23px 50px',
			},
		},
	},
	plugins: [],
};
