import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import getPort from 'get-port';

test.describe('Lighthouse Performance & SEO Audits', () => {
    // Lighthouse tests must run against Chromium
    test.skip(({ browserName }) => browserName !== 'chromium', 'Lighthouse only runs on Chromium');

    test('should pass Lighthouse metrics for landing page', async ({ browser }) => {
        const port = await getPort();

        // Launch a new context and expose the remote debugging port for Lighthouse
        const browserContext = await browser.browserType().launch({
            args: [`--remote-debugging-port=${port}`],
            headless: true,
        });

        const localPage = await browserContext.newPage();

        // Use production build locally if we want to test CI, but since tests run against Vercel by default
        // as per the playwright.config.ts (baseURL: 'https://fdic-suite-landing.vercel.app'),
        // we should point Lighthouse to the environment baseURL
        const urlToAudit = process.env.CI
            ? 'http://localhost:3000'
            : 'https://fdic-suite-landing.vercel.app';

        await localPage.goto(urlToAudit);

        // Required for playAudit to work out of the box
        await playAudit({
            page: localPage,
            port: port,
            // Enforce thresholds as per "Fail Loudly" doctrine
            thresholds: {
                performance: 80,
                accessibility: 90,
                'best-practices': 90,
                seo: 90, // Enforcing 90+ SEO
            },
            ignoreError: false,
        });

        await browserContext.close();
    });
});
