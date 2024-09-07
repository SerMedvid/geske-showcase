import useStore from "@/store/useStore";
import ColorPickerItem from "./ColorPickerItem";
import GlassBase from "./GlassBase";

export default function ColorPickerPalette() {
	const colors = useStore((state) => state.colors);

	return (
		<GlassBase className="p-5 rounded-full fixed bottom-7 right-1/2 translate-x-1/2 shadow-sm md:right-7 md:translate-x-0 md:bottom-1/2 md:translate-y-1/2">
			<div className="flex flex-wrap gap-5 flex-row justify-center w-56 md:flex-col md:w-auto">
				{Array.from(colors.entries()).map(([id, color]) => (
					<ColorPickerItem
						key={id}
						id={id}
						color={color.hex}
					/>
				))}
			</div>
		</GlassBase>
	);
}
