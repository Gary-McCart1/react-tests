import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // allows `describe`, `test`, `expect` without imports
    environment: "jsdom",// simulates a browser for React Testing Library
    setupFiles: "./src/setupTests.ts" // optional, for jest-dom matchers
  },
});
