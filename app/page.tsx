import dynamic from "next/dynamic";

const ExperienceLayout = dynamic(
	() => import("@/features/Showcase/components/ExperienceLayout"),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<main className="h-svh w-svw">
			<ExperienceLayout />
		</main>
	);
}
