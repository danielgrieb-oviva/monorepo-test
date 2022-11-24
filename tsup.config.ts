import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  noExternal: ["math-helpers"],
  dts: {
    resolve: true,
    entry: ["../math-helpers/src/index.ts"],
  },
  splitting: false,
  sourcemap: true,
  clean: true,
});
