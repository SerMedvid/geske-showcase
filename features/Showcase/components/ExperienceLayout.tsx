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
			className="h-svh w-svw select-none touch-none"
			ref={containerRef}
		>
			<PulseBackground />

			<View className="absolute top-0 left-0 w-full h-full">
				<Suspense fallback={null}>
					<Experience />
				</Suspense>
			</View>

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
