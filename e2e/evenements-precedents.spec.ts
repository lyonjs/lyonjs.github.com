import { test, expect } from '@playwright/test';

test('navigate to the current year past events', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Évènements' }).click();
  await expect(page.getByRole('heading', { name: 'Évènements précédents' })).toBeVisible();
  await expect(page).toHaveURL(`/evenements-precedents/${new Date().getFullYear()}`);
});

test('display the past events of 2022', async ({ page }) => {
  await page.goto('/evenements-precedents/2022');

  await expect(page.getByTestId('past-events-list').getByRole('listitem')).toHaveCount(8);
});
