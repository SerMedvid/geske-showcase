import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			keyframes: {
				pusleCircle: {
					"0%": { opacity: "0", transform: "scale(0.8)" },
					"25%": { opacity: "0.5", transform: "scale(1)" },
					"100%": { opacity: "0", transform: "scale(2)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
