type GlassBaseProps = JSX.IntrinsicElements["div"] & {
	children: React.ReactNode;
	className?: string;
};

export default function GlassBase({
	children,
	className,
	...props
}: GlassBaseProps) {
	return (
		<div
			{...props}
			className={` bg-slate-200 bg-opacity-20 backdrop-filter backdrop-blur-lg ${className}`}
		>
			{children}
		</div>
	);
}
