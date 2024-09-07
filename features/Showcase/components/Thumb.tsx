import { BrushModel } from "@/components/BrushModel";
import Lights from "./Lights";
import { PerspectiveCamera, useCursor, View } from "@react-three/drei";
import GlassBase from "@/components/GlassBase";
import useStore from "@/store/useStore";
import { useState } from "react";

type ThumbProps = {
	modelRotation?: [number, number, number];
	displayRotation: [number, number, number];
};

export default function Thumb({
	displayRotation,
	modelRotation = [0, 0, 0],
}: ThumbProps) {
	const setRotateToPosition = useStore((state) => state.setRotateToPosition);

	const [isHovered, setIsHovered] = useState(false);

	useCursor(isHovered);

	return (
		<GlassBase
			className="w-full h-full rounded-md"
			onClick={() => setRotateToPosition(displayRotation)}
			onPointerEnter={() => setIsHovered(true)}
			onPointerLeave={() => setIsHovered(false)}
		>
			<View className="w-full h-16 relative">
				<BrushModel
					scale={35}
					rotation={modelRotation}
				/>
				<PerspectiveCamera
					makeDefault
					position={[0, 0, 6]}
				/>
				<Lights />
			</View>
		</GlassBase>
	);
}
