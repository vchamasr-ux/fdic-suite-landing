import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.describe('Automated App Thumbnail Generation', () => {
    // Override the timeout for this suite because some maps take a while to render and we want quality
    test.setTimeout(60000);

    // Make sure the directory exists
    test.beforeAll(() => {
        const dir = path.join(__dirname, '../public/screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    test('Capture Bank Value Benchmark Dashboard', async ({ page }) => {
        // Deep link to JP Morgan (CERT 628) or similar large bank with rich data
        // CERT 3510 is another good one used as an example in your codebase.
        await page.goto('https://bank-value-benchmark-mvp.vercel.app/?acq=3510');

        // Wait for network requests to finish and the charts to render
        await page.waitForLoadState('networkidle');

        // Let's specifically wait for the main dashboard elements to appear
        // Assuming there are recharts or gauges
        await page.waitForSelector('text=Total Assets', { state: 'visible', timeout: 15000 });

        // Wait a small extra amount to let Framer Motion animations settle
        await page.waitForTimeout(3000);

        await page.screenshot({
            path: 'public/screenshots/benchmark.png',
            fullPage: false,
        });
    });

    test('Capture Bank M&A Radar', async ({ page }) => {
        // Navigate to M&A Radar
        await page.goto('https://bank-ma-radar.vercel.app');

        // Wait for page to initialize
        await page.waitForLoadState('networkidle');

        // Let radar map load
        await page.waitForTimeout(4000);

        await page.screenshot({
            path: 'public/screenshots/ma_radar.png',
            fullPage: false,
        });
    });

    test('Capture B2B Fintech Prospector', async ({ page }) => {
        await page.goto('https://fintechprospector.vercel.app');
        await page.waitForLoadState('networkidle');

        // Allow data table to populate
        await page.waitForTimeout(4000);

        await page.screenshot({
            path: 'public/screenshots/prospector.png',
            fullPage: false,
        });
    });

    test('Capture De Novo Whitespace Explorer', async ({ page }) => {
        await page.goto('https://de-novo-whitespace-explorer.vercel.app');
        await page.waitForLoadState('networkidle');

        // Note: Mapbox or leaflet maps take a moment to download tiles
        await page.waitForTimeout(6000);

        await page.screenshot({
            path: 'public/screenshots/denovo.png',
            fullPage: false,
        });
    });
});
