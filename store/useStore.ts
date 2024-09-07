import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const colorsData = new Map([
	[
		"1",
		{ name: "White", hex: "#FFFFFF", texture: "/textures/Body_White_D.png" },
	],
	[
		"2",
		{ name: "Purple", hex: "#B4B5DF", texture: "/textures/Body_Purple_D.png" },
	],
	[
		"3",
		{ name: "Green", hex: "#BFCEC2", texture: "/textures/Body_Green_D.png" },
	],
	[
		"4",
		{ name: "Gray", hex: "#1D252D", texture: "/textures/Body_GreyBlack_D.png" },
	],
	[
		"5",
		{
			name: "Turquoise",
			hex: "#91DDE8",
			texture: "/textures/Body_Turquoise_D.png",
		},
	],
	[
		"6",
		{
			name: "Starlight",
			hex: "#E0DBE3",
			texture: "/textures/Body_Starlight_D.png",
		},
	],
	["7", { name: "Pink", hex: "#E6BCD8", texture: "/textures/Body_Pink_D.png" }],
	[
		"8",
		{ name: "Black", hex: "#2D2926", texture: "/textures/Body_Black_D.png" },
	],
	[
		"9",
		{
			name: "Aquamarine",
			hex: "#9BCBEB",
			texture: "/textures/Body_Aquamarine_D.png",
		},
	],
	[
		"10",
		{
			name: "Magenta",
			hex: "#C6007E",
			texture: "/textures/Body_Magenta_D.png",
		},
	],
	[
		"11",
		{
			name: "Midnight",
			hex: "#253746",
			texture: "/textures/Body_Midnight_D.png",
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
