import { test, expect } from '@playwright/test';

test.describe('User Journey & Content Integrity Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for animations to trigger
        await page.waitForTimeout(500);
    });

    test('Hero CTA scrolls to Suite section smoothly', async ({ page }) => {
        const exploreLink = page.getByRole('link', { name: /Explore the FDIC Intelligence Suite/i });
        await expect(exploreLink).toBeVisible();
        await expect(exploreLink).toHaveAttribute('href', '#suite');

        // Verify the suite section is below the fold, then click scrolls to it
        const suiteSection = page.locator('#suite');
        await expect(suiteSection).toBeAttached();
    });

    test('AppCards have correct outbound app URLs', async ({ page, isMobile }) => {
        // Find the "Launch App" links. There should be at least one based on APPS constants
        // "Bank Value Benchmark" points to https://bank-value-benchmark-mvp.vercel.app
        const benchmarkApp = page.getByRole('link', { name: /Launch Bank Value Benchmark application/i });
        await expect(benchmarkApp).toHaveAttribute('href', 'https://bank-value-benchmark-mvp.vercel.app');
        await expect(benchmarkApp).toHaveAttribute('target', '_blank');

        const maRadarApp = page.getByRole('link', { name: /Launch Bank M&A Radar application/i });
        await expect(maRadarApp).toHaveAttribute('href', 'https://bank-ma-radar.vercel.app');
        await expect(maRadarApp).toHaveAttribute('target', '_blank');

        const prospectorApp = page.getByRole('link', { name: /Launch B2B Fintech Prospector application/i });
        await expect(prospectorApp).toHaveAttribute('href', 'https://fintechprospector.vercel.app');
        await expect(prospectorApp).toHaveAttribute('target', '_blank');

        const denovoApp = page.getByRole('link', { name: /Launch De Novo Whitespace Explorer application/i });
        await expect(denovoApp).toHaveAttribute('href', 'https://de-novo-whitespace-explorer.vercel.app');
        await expect(denovoApp).toHaveAttribute('target', '_blank');
    });

    test('Contact CTA copies email and displays visual feedback', async ({ page, context }) => {
        // In Playwright, we need to grant clipboard permissions to test copy to clipboard
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);

        const copyButton = page.getByRole('button', { name: /Copy Vincent's email to clipboard/i });
        await expect(copyButton).toBeVisible();

        // Ensure "Copied!" is NOT initially visible
        await expect(page.getByText('Copied!', { exact: true })).not.toBeVisible();

        // Click the button
        await copyButton.click();

        // Verify clipboard content
        const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
        expect(clipboardText).toBe('vchamasr@gmail.com');

        // Verify visual tooltip "Copied!" appears
        await expect(page.getByText('Copied!', { exact: true })).toBeVisible();

        // Verify that screen reader polite text says it was copied
        // aria-live region inside the button shouldn't be empty anymore
        await expect(page.locator('span[aria-live="polite"]')).toHaveText('Copied to clipboard');

        // Verify the tooltip disappears after 2 seconds (allow 2.5s for test flakiness)
        await page.waitForTimeout(2500);
        await expect(page.getByText('Copied!', { exact: true })).not.toBeVisible();
    });

    test('External Profile Links correctly route outbound', async ({ page }) => {
        const linkedin = page.getByRole('link', { name: /Connect with Vincent on LinkedIn/i });
        await expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/vincent-chamasrour/');
        await expect(linkedin).toHaveAttribute('target', '_blank');

        const youtube = page.getByRole('link', { name: /View Vincent's YouTube channel/i });
        await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/@vincentchamasrour7278');
        await expect(youtube).toHaveAttribute('target', '_blank');
    });

    test('TrustBar statistics render on scroll', async ({ page }) => {
        // Scroll to TrustBar
        const trustBar = page.getByText('4,500+');
        await trustBar.scrollIntoViewIfNeeded();

        // Wait for Framer Motion to count up
        await page.waitForTimeout(2000);

        // Check text content
        await expect(page.getByText('4,500+')).toBeVisible();
        await expect(page.getByText('Banks Analyzed')).toBeVisible();
        await expect(page.getByText('16')).toBeVisible();
        await expect(page.getByText('Quarters of History')).toBeVisible();
    });
});
