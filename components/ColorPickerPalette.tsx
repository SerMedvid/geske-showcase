import useStore from "@/store/useStore";
import ColorPickerItem from "./ColorPickerItem";
import GlassBase from "./GlassBase";

export default function ColorPickerPalette() {
	const colors = useStore((state) => state.colors);

	return (
		<GlassBase className="p-5 rounded-full fixed bottom-7 right-7 shadow-sm md:bottom-1/2 md:translate-y-1/2">
			<div className="flex flex-wrap gap-5 flex-col">
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
