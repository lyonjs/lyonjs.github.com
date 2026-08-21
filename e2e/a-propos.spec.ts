import { test, expect } from '@playwright/test';

test('display the a propos page', async ({ page }) => {
  await page.goto('/a-propos');

  await expect(page.getByRole('heading', { name: 'A propos' })).toBeVisible();
});
