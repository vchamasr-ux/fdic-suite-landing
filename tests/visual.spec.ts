import { test, expect } from '@playwright/test';

test.describe('Visual Stability & Layout Regression Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for animations and fonts to settle completely to avoid flaky visual tests
        await page.waitForTimeout(1500);
    });

    test('Hero section locked in via pixel-perfect snapshot', async ({ page }) => {
        // We select the hero section by its role or structure
        // Since it's the first section containing the 'The FDIC Intelligence' h1
        const heroSection = page.locator('section').first();

        await expect(heroSection).toBeVisible();
        // Take a screenshot of the hero section and compare to baseline
        // maxDiffPixels allows a tiny bit of rendering difference between runs
        await expect(heroSection).toHaveScreenshot('hero-section.png', {
            maxDiffPixels: 100,
        });
    });
});
