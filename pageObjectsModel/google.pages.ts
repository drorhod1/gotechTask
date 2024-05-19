import { Page } from "@playwright/test";

class Google {
  constructor() {}
  get googleHomePage(): string {
    return "https://www.google.co.il/";
  }
  get googleSearchLine(): string {
    return "textarea.gLFyf";
  }
  get googleSearchButton(): string {
    return 'div.FPdoLc.lJ9FBc input[name="btnK"]';
  }
  get googleSearchAllTab(): string {
    return 'div[jsname="bVqjv"]';
  }
  get textToSearch(): string {
    return "RailIL";
  }
  get searchText(): string {
    return "רכבת ישראל";
  }
  async searchForText(page: Page, text: string) {
    const textareaElement = await page.waitForSelector(this.googleSearchLine);
    await textareaElement.fill(text);
  }
  async clickOnSearchButton(page: Page) {
    const searchButton = await page.waitForSelector(this.googleSearchButton);
    await searchButton.click();
  }
}
export default new Google();
