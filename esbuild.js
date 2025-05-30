const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./frontend/application.tsx"],
		outdir: "./static/",
		bundle: true,
		minify: false
	})
	.then(() => console.log("build complete!"))
	.catch(() => process.exit(1));
