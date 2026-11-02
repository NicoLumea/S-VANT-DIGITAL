import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:8787', browserName: 'chromium', trace: 'retain-on-failure' },
  webServer: {
    command: 'npx wrangler dev --local --port 8787',
    url: 'http://127.0.0.1:8787',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
