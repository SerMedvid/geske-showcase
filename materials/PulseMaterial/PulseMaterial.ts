import { shaderMaterial } from "@react-three/drei";
import { ReactThreeFiber } from "@react-three/fiber";

import fragmentShader from "./shaders/fragment.glsl";
import vertextShader from "./shaders/vertex.glsl";

export const PulseMaterial = shaderMaterial(
	{
		uTime: 0,
		uResolution: [1, 1],
	},
	vertextShader,
	fragmentShader
);

export type PulseMaterialT = typeof PulseMaterial &
	JSX.IntrinsicElements["shaderMaterial"] & {
		uTime: number;
		uResolution: [number, number];
	};

declare module "@react-three/fiber" {
	interface ThreeElements {
		pulseMaterial: ReactThreeFiber.Object3DNode<
			PulseMaterialT,
			typeof PulseMaterial
		>;
	}
}
