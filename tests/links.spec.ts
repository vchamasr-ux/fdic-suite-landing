import { test, expect } from '@playwright/test';

test.describe('Fail Loudly: Outbound Connectivity Guarantee', () => {
    test('All outbound links must resolve with 200 OK', async ({ page, request }) => {
        await page.goto('/');

        // Grab all anchor tags with an href
        const links = await page.locator('a[href]').all();
        const hrefs = new Set<string>();

        for (const link of links) {
            const href = await link.getAttribute('href');
            if (href && href.startsWith('http')) {
                hrefs.add(href);
            }
        }

        // Validate each unique external link in parallel
        await Promise.all(
            Array.from(hrefs).map(async (href) => {
                // LinkedIn blocks automated fetch requests with 999, skip strict check
                if (href.includes('linkedin.com')) {
                    console.log(`Skipping strict 200 check for restricted social graph domain: ${href}`);
                    return;
                }

                const response = await request.get(href);
                expect(response.status(), `Link failed to return 200 OK: ${href}`).toBe(200);
            })
        );
    });
});
