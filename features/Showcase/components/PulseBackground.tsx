import useStore from "@/store/useStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DEFAULT_COLOR = "#dfe3e4";

export default function PulseBackground() {
	const containerRef = useRef<HTMLDivElement>(null);
	const pulseRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		useStore.subscribe(
			(state) => state.colors.get(state.selectedColorId)?.hex,
			(hex) => {
				if (!hex) return;

				gsap.to(containerRef.current, {
					backgroundColor: hex,
					duration: 1,
					ease: "power1.inOut",
				});

				gsap.to(pulseRef.current, {
					"--pulse-color": hex,
					duration: 1,
					ease: "power1.inOut",
				});
			},
			{ fireImmediately: true }
		);
	}, []);

	return (
		<>
			<div
				ref={containerRef}
				className="w-full h-full fixed top-0 left-0 pointer-events-none flex items-center justify-center brightness-50"
			></div>
			<div className="w-full h-full fixed top-0 left-0 pointer-events-none flex items-center justify-center brightness-90">
				<div
					ref={pulseRef}
					className="w-[40vw] h-[40vw] rounded-full relative"
					style={{ "--pulse-color": DEFAULT_COLOR } as React.CSSProperties}
				>
					{Array.from({ length: 4 }).map((_, i) => (
						<span
							className="absolute w-full h-full rounded-full opacity-0 animate-[pusleCircle_8s_linear_infinite]"
							key={i}
							style={{
								animationDelay: `${i * -2}s`,
								backgroundColor: "var(--pulse-color)",
							}}
						/>
					))}
				</div>
			</div>
		</>
	);
}
