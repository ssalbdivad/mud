import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/exports/index.ts",
    internal: "src/exports/internal.ts",
    "deprecated/node": "src/deprecated/node/index.ts",
  },
  target: "esnext",
  format: ["esm"],
  dts: !process.env.TSUP_SKIP_DTS,
  sourcemap: true,
  clean: true,
  minify: true,
});
