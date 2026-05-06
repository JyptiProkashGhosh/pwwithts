import {test, expect} from '@playwright/test';
test('should have the correct title', async ({page}) => {
    // Go to the home page
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    // Assert if the title is correct
    await expect(page).toHaveTitle('CURA Healthcare Service');
    // Assert header text
    await expect(page.locator('.text-vertical-center h1')).toHaveText('CURA Healthcare Service');
  
});