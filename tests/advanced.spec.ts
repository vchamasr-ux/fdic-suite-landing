import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Advanced Landing Page E2E Tests', () => {

    test('Mobile Responsiveness', async ({ page, isMobile }) => {
        // Only run this test block if the context is mimicking a mobile device
        test.skip(!isMobile, 'This test is only relevant for mobile viewports');

        await page.goto('/');

        // On mobile, the desktop navigation should be hidden
        const desktopNav = page.locator('nav.hidden.md\\:flex');
        await expect(desktopNav).toBeHidden();

        // The hero CTA should still be fully visible
        const heroCta = page.getByLabel('Explore the FDIC Intelligence Suite');
        await expect(heroCta).toBeVisible();
    });

    test('Scroll Animations (Framer Motion)', async ({ page }) => {
        await page.goto('/');

        // Get a reference to "The Suite" heading which has a whileInView animation
        const suiteHeading = page.locator('h2', { hasText: 'The Suite' });

        // Initially we scroll the page to top
        await page.evaluate(() => window.scrollTo(0, 0));

        // It should eventually become visible as we scroll into view
        await suiteHeading.scrollIntoViewIfNeeded();

        // Framer Motion adds style="opacity: 1" when in view. 
        // We wait for it to be visible in the viewport and verify its opacity style is roughly 1
        await expect(suiteHeading).toBeVisible();

        // Wait for the animation to complete
        await page.waitForTimeout(1000);

        // Assert CSS opacity is 1
        const opacity = await suiteHeading.evaluate((node) => window.getComputedStyle(node).opacity);
        expect(Number(opacity)).toBeGreaterThanOrEqual(0.9);
    });

    test('Accessibility (a11y) Audit', async ({ page }) => {
        await page.goto('/');

        // Analyze the page with axe-core
        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        // We expect 0 accessibility violations
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Visual Regression (Hero Snapshot)', async ({ page }) => {
        await page.goto('/');

        // Wait for fonts and hero background gradient/image to load stably
        await page.waitForLoadState('networkidle');

        // Taking a screenshot of the Hero section and comparing it against the baseline
        // Note: The baseline image will automatically be generated on the first run. 
        // Subsequent runs will fail if the pixels deviate by the specified threshold.
        const heroSection = page.locator('section').first();
        await expect(heroSection).toHaveScreenshot('hero-section.png', {
            maxDiffPixelRatio: 0.1, // Allow up to 10% pixel difference for minor font/rendering discrepancies across CI
        });
    });

});
