/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["three"],
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			loader: "ts-shader-loader",
		});

		return config;
	},
};

export default nextConfig;
