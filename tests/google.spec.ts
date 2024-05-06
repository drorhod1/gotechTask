import { test, expect } from '@playwright/test';
import Google from '../pageObjectsModel/google.pages';

test('Google home page load', async ({ page }) => {
  await page.goto(Google.googleHomePage);
  await expect(page).toHaveTitle(/Google/);
});

test('Search for RailIL', async ({ page }) => {
  await page.goto(Google.googleHomePage);
  const textareaElement = await page.waitForSelector(Google.googleSearchLine);
  const searchButton = await page.waitForSelector(Google.googleSearchButton);
  textareaElement.fill(Google.textToSearch);
  searchButton.click();
  await page.waitForSelector(Google.googleSearchAllTab);
  await expect(page.textContent('html')).resolves.toContain(Google.searchText);
});
