import { test, expect } from '@playwright/test';

const testUrl = process.env.TESTURL
    ? process.env.TESTURL
    : 'https://playwright.dev/';

test('has title', async ({ page }) => {
  await page.goto(testUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(testUrl);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
