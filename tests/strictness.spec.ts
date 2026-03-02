import { test, expect } from '@playwright/test';

test.describe('Zero Tolerance Strictness Checks', () => {

    test('Zero Console Errors or Warnings', async ({ page }) => {
        const messages: string[] = [];

        // Listen to console events
        page.on('console', msg => {
            if (msg.type() === 'error' || msg.type() === 'warning') {
                messages.push(`[${msg.type()}] ${msg.text()}`);
            }
        });

        // Listen to page errors (unhandled exceptions)
        page.on('pageerror', exception => {
            messages.push(`[uncaught exception] ${exception.message}`);
        });

        const response = await page.goto('/');

        // Ensure the page actually returned 200 OK
        expect(response?.status()).toBe(200);

        // Wait for hydration and animations to complete
        await page.waitForLoadState('networkidle');

        // Fail loudly if any error was captured
        expect(messages, `Console errors or warnings detected: \n${messages.join('\n')}`).toEqual([]);
    });

    test('Open Graph & SEO Meta Tag Validation', async ({ page }) => {
        await page.goto('/');

        // 1. Verify Title
        await expect(page).toHaveTitle('FDIC Intelligence Suite | Financial Analytics by Vincent Chamasrour');

        // 2. Verify og:title
        const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
        expect(ogTitle).toBe('FDIC Intelligence Suite | Financial Analytics by Vincent Chamasrour');

        // 3. Verify og:description
        const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
        expect(ogDesc).toBe('Four interconnected fintech tools for banking professionals. Live FDIC data. Gemini AI. No mock data.');

        // 4. Verify og:image is present and active
        const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
        expect(ogImage).toBeTruthy();

        // If it's a relative path, we construct the full URL to verify it's not a 404
        if (ogImage) {
            const imageUrl = ogImage.startsWith('http') ? ogImage : `https://fdic-suite-landing.vercel.app${ogImage}`;
            const imageResponse = await page.request.get(imageUrl);
            expect(imageResponse.status(), `og:image link is broken: ${imageUrl}`).toBe(200);
        }

        // 5. Verify Twitter card
        const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
        expect(twitterCard).toBe('summary_large_image');
    });
});
