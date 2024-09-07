import { useProgress } from "@react-three/drei";
import { useDebounceEffect } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import useStore from "@/store/useStore";
import Lottie from "lottie-react";
import * as animationData from "@/animation/loader.json";

export default function Loader() {
	const { progress } = useProgress();
	const prevProgress = useRef(0);
	const progressSpanRef = useRef<HTMLSpanElement>(null);
	const [canShow, setCanShow] = useState(true);
	const [animateOut, setAnimateOut] = useState(false);
	const isReady = progress === 100;
	const setIsReady = useStore((state) => state.setIsReady);

	useEffect(() => {
		prevProgress.current = Math.floor(Math.max(prevProgress.current, progress));

		if (progressSpanRef.current) {
			progressSpanRef.current.textContent = `${prevProgress.current}`;
		}
	}, [progress]);

	useDebounceEffect(
		() => {
			if (isReady) {
				setAnimateOut(true);

				setTimeout(() => {
					setCanShow(false);
					setIsReady(true);
				}, 1000);
			}
		},
		[isReady],
		{ wait: 100 }
	);

	if (!canShow) return null;

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-neutral-950 flex duration-1000 px-4 py-4 justify-center items-center z-50 ${
				animateOut ? "translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="flex flex-col max-w-xs text-white justify-center">
				<Lottie
					loop={true}
					autoplay={true}
					animationData={animationData}
				/>
				<h1 className="text-center">
					Cooking your experience <span ref={progressSpanRef} />%
				</h1>
			</div>
		</div>
	);
}
