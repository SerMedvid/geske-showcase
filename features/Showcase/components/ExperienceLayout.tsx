"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Preload, View } from "@react-three/drei";
import ColorPickerPalette from "@/components/ColorPickerPalette";
import Thumb from "./Thumb";
import { Suspense, useRef } from "react";
import PulseBackground from "./PulseBackground";
import Loader from "@/components/Loader";

export default function ExperienceLayout() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	return (
		<div
			className="h-svh w-svw"
			ref={containerRef}
		>
			<PulseBackground />

			<View className="absolute top-0 left-0 w-full h-full">
				<Suspense fallback={null}>
					<Experience />
				</Suspense>
			</View>

			<div className="fixed top-1/2 left-7 -translate-y-1/2 w-16 flex items-center justify-center flex-col gap-4">
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

			<Canvas
				shadows={true}
				gl={{ alpha: true }}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				eventSource={containerRef}
				ref={canvasRef}
				camera={{ position: [0, 5, 0] }}
			>
				<Preload all />
				<View.Port />
			</Canvas>

			<ColorPickerPalette />

			<Loader />
		</div>
	);
}
