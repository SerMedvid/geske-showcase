import Thumb from "./Thumb";

export default function ThumbPanels() {
	return (
		<div className="fixed left-1/2 top-10 -translate-x-1/2 flex items-center justify-center flex-row  gap-4 md:top-1/2 md:left-7 md:-translate-y-1/2 md:translate-x-0 md:flex-col">
			<Thumb
				displayRotation={[-Math.PI / 2, -Math.PI / 2, 0]}
				modelRotation={[0, -Math.PI / 2, 0]}
			/>
			<Thumb
				displayRotation={[-Math.PI / 2, -Math.PI / 5, 0]}
				modelRotation={[0, -Math.PI / 5, 0]}
			/>
			<Thumb
				displayRotation={[-Math.PI / 2, Math.PI, 0]}
				modelRotation={[0, Math.PI, 0]}
			/>
		</div>
	);
}
