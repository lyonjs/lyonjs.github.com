import { test, expect } from '@playwright/test';

test('display the about page', async ({ page }) => {
  await page.goto('/code-de-conduite');

  await expect(page.getByRole('heading', { name: 'Code de conduite' })).toBeVisible();
});
