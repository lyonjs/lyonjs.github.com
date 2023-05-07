import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('LyonJS - Communauté lyonnaise des utilisateurs de JavaScript');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('MeetupLyonJS');
});

test('display the next event', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Prochain évènement' })).toBeVisible();
});
