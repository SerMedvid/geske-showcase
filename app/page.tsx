import dynamic from "next/dynamic";

const ExperienceLayout = dynamic(
	() => import("@/features/Showcase/components/ExperienceLayout"),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<main className="h-svh w-svw bg-neutral-950">
			<ExperienceLayout />
		</main>
	);
}
