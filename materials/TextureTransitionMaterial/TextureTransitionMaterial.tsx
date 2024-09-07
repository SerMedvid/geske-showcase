import { useState, forwardRef } from "react";

import ThreeCustomShaderMaterial from "three-custom-shader-material";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { Material, ShaderMaterial } from "three";
import { MeshStandardMaterialProps } from "@react-three/fiber";

type TransitionMaterialProps = Pick<
	MeshStandardMaterialProps,
	| "metalnessMap"
	| "roughnessMap"
	| "aoMap"
	| "metalness"
	| "roughness"
	| "aoMap"
> & {
	baseMaterial: Material;
};

const TextureTransitionMaterial = forwardRef<
	ShaderMaterial,
	TransitionMaterialProps
>(({ baseMaterial, ...props }, ref) => {
	const [initialUniforms] = useState(() => {
		return {
			uTextureStart: { value: undefined },
			uTextureEnd: { value: undefined },
			uProgress: { value: 0 },
		};
	});

	return (
		<ThreeCustomShaderMaterial
			ref={ref}
			baseMaterial={baseMaterial}
			vertexShader={vertexShader}
			fragmentShader={fragmentShader}
			uniforms={initialUniforms}
			{...props}
		/>
	);
});

TextureTransitionMaterial.displayName = "TextureTransitionMaterial";

export default TextureTransitionMaterial;
