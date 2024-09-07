import { BrushModel } from "@/components/BrushModel";
import Lights from "./Lights";
import {
	ContactShadows,
	PresentationControls,
	PresentationControlsRef,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import useStore from "@/store/useStore";
import { Group } from "three";
import gsap from "gsap";

export default function Experience() {
	const presentationControlsRef = useRef<PresentationControlsRef>(null);
	const groupRef = useRef<Group>(null);
	const setRotateToPosition = useStore((state) => state.setRotateToPosition);

	useEffect(() => {
		const unsubscribe = useStore.subscribe(
			(state) => state.rotateToPosition,
			(rotateToPosition) => {
				if (!rotateToPosition) return;

				presentationControlsRef.current?.rotateTo(rotateToPosition);
				setRotateToPosition(null);
			}
		);

		return () => {
			unsubscribe();
		};
	}, [setRotateToPosition]);

	useEffect(() => {
		const unsubscribe = useStore.subscribe(
			(state) => state.isReady,
			(isReady) => {
				if (isReady && groupRef.current) {
					gsap.to(groupRef.current.rotation, {
						y: Math.PI * 0.1,
						duration: 1,
						ease: "expo.inOut",
					});
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<>
			<Lights />

			<ContactShadows
				blur={4}
				position={[-0.05, -1.5, 0]}
			/>

			<PresentationControls
				ref={presentationControlsRef}
				rotation={[-Math.PI / 2, 0, 0]}
				polar={[0, 0]}
			>
				<group
					ref={groupRef}
					rotation={[0, -Math.PI * 1.8, 0]}
				>
					<BrushModel scale={40} />
				</group>
			</PresentationControls>
		</>
	);
}
