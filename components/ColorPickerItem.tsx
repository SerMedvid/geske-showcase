import useStore from "@/store/useStore";

interface ColorPickerItemProps {
	id: string;
	color: string;
	labelHex?: string[];
}

export default function ColorPickerItem({
	id,
	color,
	labelHex,
}: ColorPickerItemProps) {
	const { selectedColorId, setSelectedColorId } = useStore((state) => ({
		selectedColorId: state.selectedColorId,
		setSelectedColorId: state.setSelectedColorId,
	}));

	const isSelected = selectedColorId === id;

	return (
		<button
			className="relative w-4 h-4 group "
			onClick={() => setSelectedColorId(id)}
		>
			<div
				className={`w-full h-full rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-200 overflow-hidden rotate-45 ${
					isSelected ? "scale-75" : "scale-100"
				} group-hover:scale-75`}
				style={{
					backgroundColor: labelHex && labelHex.length > 0 ? "" : color,
				}}
			>
				{labelHex && labelHex.length > 0
					? labelHex.map((hexColor, index) => (
							<div
								key={index}
								className="absolute w-full h-full"
								style={{
									backgroundColor: hexColor,
									transform: `rotate(${(index * 360) / labelHex.length}deg)`,
									clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)`,
								}}
							/>
					  ))
					: null}
			</div>
			<div
				className={`absolute -inset-1.5 rounded-full border-2 transform pointer-events-none  group-hover:opacity-50 group-hover:scale-100 transition duration-300  ${
					isSelected ? "opacity-50 scale-100" : "opacity-0 scale-0"
				}`}
				style={{
					borderColor: color,
				}}
			/>
		</button>
	);
}
