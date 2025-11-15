//@ts-check
const lint = "biome check --write";
/**
 * @type {import("lint-staged").Configuration}
 */
export default {
    "src/**/*.{js,json,md,ts}": lint,
    "*.{mjs,js,json}": lint,
};
