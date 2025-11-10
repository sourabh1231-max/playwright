import { test } from '@playwright/test';

test('login once and save storage', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  await page.locator('#userEmail').fill('sourabhshrivastava569+56@gmail.com');
  await page.locator('#userPassword').fill('Rajumadhu@123');
  await page.locator('#login').click();

  await page.waitForURL('**/dashboard/**');

  // Save session
  await page.context().storageState({ path: 'auth.json' });
});