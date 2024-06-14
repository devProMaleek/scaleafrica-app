import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/lib/**/*.js",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'xs': '480px',
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				"share-story": "url('/assets/images/share-story.png')",
				"logo": "url('/assets/images/logo-white-overlay.svg')",
				"interview-image1": "url('/assets/images/olu-ibitoye.png')",
				"interview-image2": "url('/assets/images/alex-idris.png')",
				"interview-image3": "url('/assets/images/samuel-martin.png')",
				"interview-image4": "url('/assets/images/dapson-dray.png')",
				"interview-story": "url('/assets/images/pen.png')"

			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#532c89",
							50: "#f3eaff",
							100: "#d7c4ef",
							200: "#E2D5F4",
							300: "#9e78d4",
							400: "#8351c6",
							500: "#6938ad",
							600: "#522b87",
							700: "#3a1f62",
							800: "#23123c",
							900: "#0e0419",
						},
						secondary: {
							DEFAULT: "#c47d15",
							50: "#fff3dd",
							100: "#fadfb5",
							200: "#f4c989",
							300: "#eeb35d",
							400: "#e99e30",
							500: "#cf8416",
							600: "#a1670f",
							700: "#744908",
							800: "#472b00",
							900: "#1c0e00",
						},
					},
				},
			},
		}),
		require("flowbite/plugin"),
	],
};
export default config;
