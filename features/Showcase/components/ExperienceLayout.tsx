"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Preload, View } from "@react-three/drei";
import ColorPickerPalette from "@/components/ColorPickerPalette";
import { useRef } from "react";
import PulseBackground from "./PulseBackground";
import Loader from "@/components/Loader";
import { Perf } from "r3f-perf";
import ThumbPanels from "./ThumbPanels";

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
				<Experience />
			</View>

			<ThumbPanels />

			<Canvas
				gl={{ alpha: true }}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				eventSource={containerRef}
				ref={canvasRef}
				camera={{ position: [0, 5, 0] }}
			>
				<Preload all />
				<View.Port />
				{/** use this to check for performance insights */}
				{false && <Perf position="top-left" />}
			</Canvas>

			<ColorPickerPalette />

			<Loader />
		</div>
	);
}
