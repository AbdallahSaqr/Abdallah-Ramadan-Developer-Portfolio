import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const src = fileURLToPath(new URL("./src", import.meta.url));
const imageStub = fileURLToPath(
  new URL("./tests/mocks/image-stub.ts", import.meta.url)
);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // next/image static imports resolve to an object, not a URL string.
      { find: /^.+\.(png|jpe?g|webp|avif)$/, replacement: imageStub },
      { find: "@", replacement: src },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      // Routes and metadata files are exercised by the Playwright suite.
      include: ["src/components/**", "src/lib/**"],
      exclude: ["src/lib/motion.ts"],
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 },
    },
  },
});
