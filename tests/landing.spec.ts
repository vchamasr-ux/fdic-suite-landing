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
});
