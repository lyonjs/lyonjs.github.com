import { test, expect } from '@playwright/test';

test('display the about page', async ({ page }) => {
  await page.goto('/about');

  await expect(page.getByRole('heading', { name: 'A propos' })).toBeVisible();
});
