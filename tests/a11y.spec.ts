import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility (A11y) Checks', () => {
    test('Landing page should not have any automatically detectable accessibility issues', async ({ page }) => {
        // Go to the live application
        await page.goto('/');

        // Wait for the main elements to load (Hero section, TrustBar, etc.)
        await page.waitForSelector('main', { state: 'attached' });
        // Let Framer motion settle
        await page.waitForTimeout(1000);

        // Run Axe scanning
        const accessibilityScanResults = await new AxeBuilder({ page })
            // Some known issues might be ignored during initial setup if they're false positives or minor,
            // but we aim for zero tolerance based on rules. 
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        // The explicit fail loudly protocol demands zero violations if possible
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});
