import { test, expect } from "@playwright/test";
import Google from "../pageObjectsModel/google.pages";

test("Google home page load", async ({ page }) => {
  await page.goto(Google.googleHomePage);
  await expect(page).toHaveTitle(/Google/);
});

test("Search for RailIL", async ({ page }) => {
  await page.goto(Google.googleHomePage);
  Google.searchForText(page, Google.textToSearch);
  Google.clickOnSearchButton(page);
  await page.waitForSelector(Google.googleSearchAllTab);
  await expect(page.textContent("html")).resolves.toContain(Google.searchText);
});
