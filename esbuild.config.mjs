import esbuild from "esbuild";
import { argv, exit } from "process";
import { builtinModules } from "module";
import { solidPlugin } from "esbuild-plugin-solid";
import pluginModule from "esbuild-ssr-css-modules-plugin";
const cssPlugin = pluginModule.default;

// Add a descriptive header at the top of the output file
const fileHeader = `/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/
`;

// Determine if we're in production mode based on command-line arguments
const isProduction = argv.includes("production");

// Esbuild configuration
const buildContext = await esbuild.context({
        banner: {
                js: fileHeader, // Attach the banner to JavaScript output
        },
        entryPoints: ["src/index.ts"], // Specify the main entry point
        bundle: true, // Enable bundling for all dependencies
        external: ["hollow-api", ...builtinModules], // Exclude Electron and Node.js core modules
        format: "cjs", // CommonJS format for Node.js compatibility
        target: "es2022", // Use the ES2022 standard for output
        logLevel: "info", // Display build logs with info level
        sourcemap: isProduction ? false : "inline", // Include sourcemaps in development
        treeShaking: true, // Remove unused code for optimized builds
        outfile: "index.js", // Output file path
        metafile: true,
        plugins: [cssPlugin({ jsCSSInject: true }), solidPlugin()],
        //loader: {
        //        ".css": "css",
        //        ".module.css": "css",
        //},
});

// Handle production and development modes differently
if (isProduction) {
        await buildContext.rebuild(); // Build once for production
        exit(0); // Exit after building
} else {
        await buildContext.watch(); // Enable watch mode in development
}
