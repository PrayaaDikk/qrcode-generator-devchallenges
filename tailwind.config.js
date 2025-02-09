/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
			colors: {
				white: "#F2F5F9",
				white2: "#FAFAF9",
				black: "#030616",
				lightGray: "#F8FAFC1A",
				blue: "#263FA9",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [],
};
