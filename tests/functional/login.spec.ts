import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach(async ({ page }) => {
    // launch url and assert title and header text
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator(".text-vertical-center h1")).toHaveText(
      "CURA Healthcare Service",
    );

    // click on the make appointment button
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("please login to make")).toBeVisible();
  });
  test("should login successfully", async ({ page }) => {
    // login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    // assert a text login successful
    await expect(page.locator("h2")).toHaveText("Make Appointment");
  });

  test("should prevent login with invalid credentials", async ({ page }) => {
    // login failed
    await page.getByLabel("Username").fill("John jyoti");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // assert a text login failed
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
