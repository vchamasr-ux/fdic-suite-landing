import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E Tests', () => {

    test('Hero & Trust Bar Validation', async ({ page }) => {
        await page.goto('/');

        // Verify page title
        await expect(page).toHaveTitle(/FDIC Intelligence Suite/i);

        // Verify hero heading
        const heading = page.locator('h1').first();
        await expect(heading).toBeVisible();

        // Verify stats in Trust Bar
        const stat = page.getByText('4,500+');
        await expect(stat).toBeVisible();
    });

    test('App Suite Validation and Connectivity', async ({ page, request }) => {
        await page.goto('/');

        // Verify Bank Value Benchmark card and link
        await expect(page.getByRole('heading', { name: 'Bank Value Benchmark' })).toBeVisible();
        const benchmarkLink = page.getByRole('link', { name: 'Launch Bank Value Benchmark application' });
        await expect(benchmarkLink).toHaveAttribute('href', 'https://bank-value-benchmark-mvp.vercel.app');

        // Verify Bank M&A Radar card and link
        await expect(page.getByRole('heading', { name: 'Bank M&A Radar' })).toBeVisible();
        const maRadarLink = page.getByRole('link', { name: 'Launch Bank M&A Radar application' });
        await expect(maRadarLink).toHaveAttribute('href', 'https://bank-ma-radar.vercel.app');

        // Verify B2B Fintech Prospector card and link
        await expect(page.getByRole('heading', { name: 'B2B Fintech Prospector' })).toBeVisible();
        const prospectorLink = page.getByRole('link', { name: 'Launch B2B Fintech Prospector application' });
        await expect(prospectorLink).toHaveAttribute('href', 'https://fintechprospector.vercel.app');

        // Verify De Novo Whitespace Explorer card and link
        await expect(page.getByRole('heading', { name: 'De Novo Whitespace Explorer' })).toBeVisible();
        const denovoLink = page.getByRole('link', { name: 'Launch De Novo Whitespace Explorer application' });
        await expect(denovoLink).toHaveAttribute('href', 'https://de-novo-whitespace-explorer.vercel.app');

        // Outbound Link Checking (Live Connections Only, Fail Loudly)
        // Check Bank Value Benchmark
        const response1 = await request.get('https://bank-value-benchmark-mvp.vercel.app');
        expect(response1.ok()).toBeTruthy();

        // Check Bank M&A Radar
        const response2 = await request.get('https://bank-ma-radar.vercel.app');
        expect(response2.ok()).toBeTruthy();
    });

    test('Header & Hero Navigation and Scrolling', async ({ page }) => {
        await page.goto('/');

        // Click "The Suite" in header and verify it scrolls
        await page.getByRole('link', { name: 'The Suite' }).click();
        await expect(page).toHaveURL(/#suite/);

        // Wait briefly for scroll animation
        await page.waitForTimeout(500);
        const suiteSection = page.locator('#suite');
        await expect(suiteSection).toBeInViewport();

        // Click "Explore the Suite" in Hero doesn't exist uniquely as role link with that exact name if it's an a tag
        // The hero CTA is an <a> tag with aria-label="Explore the FDIC Intelligence Suite"
        await page.goto('/');
        await page.getByLabel('Explore the FDIC Intelligence Suite').click();
        await expect(page).toHaveURL(/#suite/);
        await page.waitForTimeout(500);
        await expect(suiteSection).toBeInViewport();
    });

    test('Contact Outbound Links', async ({ page }) => {
        await page.goto('/');

        // Verify LinkedIn link
        const linkedin = page.getByRole('link', { name: 'Connect with Vincent on LinkedIn' });
        await expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/vincent-chamasrour/');

        // Verify YouTube link
        const youtube = page.getByRole('link', { name: "View Vincent's YouTube channel" });
        await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/@vincentchamasrour7278');
    });

    test('Clipboard Interaction', async ({ page, context }) => {
        // Grant clipboard permissions to the browser context
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);

        await page.goto('/');

        // Click the email button
        const emailBtn = page.getByRole('button', { name: 'Copy email address' }).or(page.getByLabel("Copy Vincent's email to clipboard"));
        await emailBtn.click();

        // Verify clipboard content
        const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
        const clipboardText = await handle.jsonValue();
        expect(clipboardText).toBe('vchamasr@gmail.com');

        // Verify "Copied!" tooltip appears
        await expect(page.getByText('Copied!')).toBeVisible();
    });

    test('Core Content Rendering', async ({ page }) => {
        await page.goto('/');

        // Verify How It Works rendering
        await expect(page.getByRole('heading', { name: 'How It Works' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'FDIC API' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'KPI Engine' })).toBeVisible();

        // Verify The Stack rendering
        await expect(page.getByRole('heading', { name: 'Built With' })).toBeVisible();
        await expect(page.getByText('Next.js', { exact: true })).toBeVisible();
        await expect(page.getByText('Tailwind CSS', { exact: true })).toBeVisible();

        // Verify Philosophy rendering
        await expect(page.getByRole('heading', { name: 'The Philosophy' })).toBeVisible();
        await expect(page.getByText('Uncompromising Data Integrity')).toBeVisible();
    });
});
