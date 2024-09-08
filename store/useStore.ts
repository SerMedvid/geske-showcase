import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const colorsData = new Map([
	[
		"1",
		{
			name: "White",
			hex: "#FFFFFF",
			texture: "/textures/512/Body_White_D.png.webp",
		},
	],
	[
		"2",
		{
			name: "Purple",
			hex: "#B4B5DF",
			texture: "/textures/512/Body_Purple_D.png.webp",
		},
	],
	[
		"3",
		{
			name: "Green",
			hex: "#BFCEC2",
			texture: "/textures/512/Body_Green_D.png.webp",
		},
	],
	[
		"4",
		{
			name: "Gray",
			hex: "#1D252D",
			texture: "/textures/512/Body_GreyBlack_D.png.webp",
			labelHex: ["#674223", "#2D2926"],
		},
	],
	[
		"5",
		{
			name: "Turquoise",
			hex: "#91DDE8",
			texture: "/textures/512/Body_Turquoise_D.png.webp",
		},
	],
	[
		"6",
		{
			name: "Starlight",
			hex: "#E0DBE3",
			texture: "/textures/512/Body_Starlight_D.png.webp",
		},
	],
	[
		"7",
		{
			name: "Pink",
			hex: "#E6BCD8",
			texture: "/textures/512/Body_Pink_D.png.webp",
		},
	],
	[
		"8",
		{
			name: "Black",
			hex: "#2D2926",
			texture: "/textures/512/Body_Black_D.png.webp",
		},
	],
	[
		"9",
		{
			name: "Aquamarine",
			hex: "#9BCBEB",
			texture: "/textures/512/Body_Aquamarine_D.png.webp",
		},
	],
	[
		"10",
		{
			name: "Magenta",
			hex: "#C6007E",
			texture: "/textures/512/Body_Magenta_D.png.webp",
		},
	],
	[
		"11",
		{
			name: "Midnight",
			hex: "#253746",
			texture: "/textures/512/Body_Midnight_D.png.webp",
		},
	],
]);

type Store = {
	selectedColorId: string;
	setSelectedColorId: (id: string) => void;
	rotateToPosition: [number, number, number] | null;
	setRotateToPosition: (
		rotateToPosition: [number, number, number] | null
	) => void;
	colors: typeof colorsData;
	isReady: boolean;
	setIsReady: (isReady: boolean) => void;
};

const DEFAULTS = {
	selectedColorId: "1",
	colors: colorsData,
	rotateToPosition: null,
	isReady: false,
};

const useStore = create<Store>()(
	subscribeWithSelector((set) => ({
		...DEFAULTS,
		setSelectedColorId: (id: string) => set({ selectedColorId: id }),
		setRotateToPosition: (rotateToPosition: [number, number, number] | null) =>
			set({ rotateToPosition }),
		setIsReady: (isReady: boolean) => set({ isReady }),
	}))
);

export default useStore;
