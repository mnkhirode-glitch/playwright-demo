const{test,expect} = require ('@playwright/test');


test.describe('Sauce Demo Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);
  });

  test('valid user can log in', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
    await page.locator('#react-burger-menu-btn').click();
    await expect(page.locator(".bm-menu")).toBeVisible();
  });

  test('Add item in Cart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });
});

test('Invalid username and password check', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('1234#');
  await page.getByRole('button', { name: 'Login' }).click();
  const errormsg = page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true });
  await expect(errormsg).toBeVisible();
});



















