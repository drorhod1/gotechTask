import { test, expect } from "@playwright/test";
import wikipedia from "../pageObjectsModel/wikipedia.pages";

test("Wikipedia home page load", async ({ page }) => {
  await page.goto(wikipedia.wikipediaHomePage);
  await expect(page).toHaveTitle(/Wikipedia/);
});

test("Wikipedia search with redirection check and click", async ({ page }) => {
  await page.goto(wikipedia.wikipediaHomePage);

  const input = await page.$("#searchInput");
  await input.fill("Pokemon");
  console.log("Filled search input with 'Pokemon'");

  const button = await page.$('#search-form button[type="submit"]');
  await button.click();
  console.log("Clicked search button");

  await page.waitForNavigation();

  console.log("No redirection occurred");
  const pageTitle = await page.title();
  console.log("Page title after search:", pageTitle);
  await expect(page).toHaveTitle(/Pokémon/);
});
