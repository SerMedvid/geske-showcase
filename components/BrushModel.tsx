/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/model.glb -o features/Showcase/components/Model2.tsx -t -T 
Files: public/models/model.glb [677.94KB] > D:\Projects\trilpea\triple-a-showcase\features\Showcase\components\model-transformed.glb [315.16KB] (54%)
*/

import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import useStore from "@/store/useStore";
import gsap from "gsap";
import { TextureTransitionMaterial } from "@/materials/TextureTransitionMaterial";

type GLTFResult = GLTF & {
	nodes: {
		B0007_SonicThermoFacialBrush6in1_Bits: THREE.Mesh;
		B0007_SonicThermoFacialBrush6in1_Metal: THREE.Mesh;
		B0007_SonicThermoFacialBrush6in1_Body: THREE.Mesh;
	};
	materials: {
		M_B0007_SonicThermoFacialBrush6in1_Bits: THREE.MeshStandardMaterial;
		M_B0007_SonicThermoFacialBrush6in1_Metal: THREE.MeshStandardMaterial;
		M_B0007_SonicThermoFacialBrush6in1_Body: THREE.MeshStandardMaterial;
	};
};

export function BrushModel(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("/models/model.glb") as GLTFResult;

	const bodyMaterialRef = useRef<THREE.ShaderMaterial>(null);
	const metalMaterialRef = useRef<THREE.ShaderMaterial>(null);
	const bitsMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

	const bodyMeshRef =
		useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null);
	const colors = useStore((state) => state.colors);

	const availableTextures = useMemo(() => {
		return Object.fromEntries(
			[...colors].map(([, color]) => [color.name, color.texture])
		);
	}, [colors]);

	const textures = useTexture(availableTextures, (entries) => {
		for (const key in entries) {
			entries[key].colorSpace = THREE.SRGBColorSpace;
			entries[key].flipY = false;
		}
	});

	const { bitsTexture, ormTexture } = useTexture(
		{
			bitsTexture: "/textures/Bits_ORM.png",
			ormTexture: "/textures/Body_ORM.png",
		},
		(entries: Record<string, THREE.Texture>) => {
			for (const key in entries) {
				entries[key].colorSpace = THREE.NoColorSpace;
				entries[key].flipY = false;
			}
		}
	);

	useEffect(() => {
		const unsubscribe = useStore.subscribe(
			(state) => state.colors.get(state.selectedColorId),
			(selectedColor) => {
				if (
					!selectedColor ||
					!metalMaterialRef.current ||
					!bodyMaterialRef.current
				)
					return;

				const nextTexture = textures?.[selectedColor.name];

				const prevTexture =
					metalMaterialRef.current.uniforms.uTextureEnd.value ?? nextTexture;

				if (!prevTexture || !nextTexture) return;

				gsap.set(
					[
						metalMaterialRef.current.uniforms.uProgress,
						bodyMaterialRef.current.uniforms.uProgress,
					],
					{
						value: 0,
					}
				);
				gsap.set(
					[
						metalMaterialRef.current.uniforms.uTextureStart,
						bodyMaterialRef.current.uniforms.uTextureStart,
					],
					{
						value: prevTexture,
					}
				);
				gsap.set(
					[
						metalMaterialRef.current.uniforms.uTextureEnd,
						bodyMaterialRef.current.uniforms.uTextureEnd,
					],
					{
						value: nextTexture,
					}
				);

				gsap.to(
					[
						metalMaterialRef.current.uniforms.uProgress,
						bodyMaterialRef.current.uniforms.uProgress,
					],
					{
						value: 1,
						duration: 0.5,
					}
				);
			},
			{
				fireImmediately: true,
			}
		);

		return () => unsubscribe();
	}, [textures]);

	const bitsMaterial = useMemo(() => {
		const material = materials.M_B0007_SonicThermoFacialBrush6in1_Bits;
		material.metalnessMap = bitsTexture;
		material.roughnessMap = bitsTexture;
		material.aoMap = bitsTexture;

		return material;
	}, [bitsTexture, materials.M_B0007_SonicThermoFacialBrush6in1_Bits]);

	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.B0007_SonicThermoFacialBrush6in1_Bits.geometry}
				material={bitsMaterial}
				castShadow
			>
				<meshStandardMaterial
					ref={bitsMaterialRef}
					color={"#787878"}
				/>
			</mesh>
			<mesh
				geometry={nodes.B0007_SonicThermoFacialBrush6in1_Metal.geometry}
				castShadow
			>
				<TextureTransitionMaterial
					ref={metalMaterialRef}
					baseMaterial={materials.M_B0007_SonicThermoFacialBrush6in1_Metal}
					metalnessMap={ormTexture}
					roughnessMap={ormTexture}
					aoMap={ormTexture}
					metalness={0.7}
				/>
			</mesh>
			<mesh
				ref={bodyMeshRef}
				geometry={nodes.B0007_SonicThermoFacialBrush6in1_Body.geometry}
				castShadow
			>
				<TextureTransitionMaterial
					ref={bodyMaterialRef}
					baseMaterial={materials.M_B0007_SonicThermoFacialBrush6in1_Body}
					metalnessMap={ormTexture}
					roughnessMap={ormTexture}
					aoMap={ormTexture}
				/>
			</mesh>
		</group>
	);
}

useGLTF.preload("/models/model.glb");

useStore.getState().colors.forEach((color) => {
	useTexture.preload(color.texture);
});
useTexture.preload("/textures/Bits_ORM.png");
useTexture.preload("/textures/Body_ORM.png");
