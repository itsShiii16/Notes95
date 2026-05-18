import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/system",
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  webServer: [
    {
      command: "node ../backend/src/server.js",
      port: 5000,
      reuseExistingServer: true,
      timeout: 10000,
    },
    {
      command: "npx vite --port 3000",
      port: 3000,
      reuseExistingServer: true,
      timeout: 15000,
    },
  ],
});
