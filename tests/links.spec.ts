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

        // Validate each unique external link
        for (const href of hrefs) {
            // Some professional networks (LinkedIn) block automated fetch requests with 429/999, 
            // so we'll log those instead of hard failing if it's a known restricted domain.
            if (href.includes('linkedin.com')) {
                console.log(`Skipping strict 200 check for restricted social graph domain: ${href}`);
                continue;
            }

            try {
                const response = await request.get(href);
                // The Product Spec strictly dictates checking for 200 OK
                expect(response.status(), `Link failed to return 200 OK: ${href}`).toBe(200);
            } catch (error) {
                // Fail loudly if fetch completely fails (DNS error, etc)
                throw new Error(`Failed to ping ${href}: ${(error as Error).message}`);
            }
        }
    });
});
