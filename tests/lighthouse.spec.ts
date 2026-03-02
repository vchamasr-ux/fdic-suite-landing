import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test.describe('Lighthouse Performance & SEO Audits', () => {
    // Lighthouse tests must run against Chromium with a fixed remote debugging port
    test.skip(({ browserName }) => browserName !== 'chromium', 'Lighthouse only runs on Chromium');

    test('should pass Lighthouse metrics for landing page', async ({ browser }) => {
        // Use a fixed remote debugging port — avoids the get-port dependency
        const REMOTE_DEBUG_PORT = 9222;

        const browserContext = await browser.browserType().launch({
            args: [`--remote-debugging-port=${REMOTE_DEBUG_PORT}`],
            headless: true,
        });

        const localPage = await browserContext.newPage();

        // In CI, Lighthouse points at the locally-built server (started by ci.yml).
        // Locally, it audits the live Vercel deployment.
        const urlToAudit = process.env.CI
            ? 'http://localhost:3000'
            : 'https://fdic-suite-landing.vercel.app';

        await localPage.goto(urlToAudit);

        // Enforce thresholds per "Fail Loudly" doctrine — zero tolerance for regressions
        await playAudit({
            page: localPage,
            port: REMOTE_DEBUG_PORT,
            thresholds: {
                performance: 80,
                accessibility: 90,
                'best-practices': 90,
                seo: 90,
            },
            ignoreError: false,
        });

        await browserContext.close();
    });
});
