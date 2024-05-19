import { test, expect } from "@playwright/test";
import Wikipedia from "../pageObjectsModel/wikipedia.pages";

test("test", async ({ page }) => {
  await page.goto(Wikipedia.wikipediaHomePage);
  await page.getByLabel(Wikipedia.searchLable).click();
  await page.getByLabel(Wikipedia.searchLable).fill("Pokemon");
  await page.getByLabel(Wikipedia.searchLable).press("Enter");
  await page
    .getByRole("heading", { name: "Pokémon", exact: true })
    .locator("i")
    .click({
      button: "right",
    });
  await expect(page).toHaveTitle(/Pokémon/);
});
