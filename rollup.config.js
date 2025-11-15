import typescript from "@rollup/plugin-typescript";
import { createPathTransform } from "rollup-sourcemap-path-transform";
import packageJson from "./package.json" with { type: "json" };

const version = packageJson.version;
const name = packageJson.name;

const sourcemapPathTransform = createPathTransform({
    prefixes: {
        ".": `/${name}/`,
    },
    requirePrefix: true,
});

const output = {
    format: "es",
    name: name,
    validate: true,
    file: `dist/${name}_${version}.js`,
    sourcemap: true,
    sourcemapPathTransform: sourcemapPathTransform,
};

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: "src/main.ts",
    output: [output],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
};
