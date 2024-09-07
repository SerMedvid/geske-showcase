import { Environment } from "@react-three/drei";

export default function Lights() {
	return (
		<>
			<ambientLight intensity={0.8} />

			<Environment
				preset="studio"
				environmentIntensity={0.2}
			/>
		</>
	);
}
