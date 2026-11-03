const{test,expect} = require ('@playwright/test');

/*test('Valid user login',async({page})=>
{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.getByRole('button' ,{name: 'Open Menu'}).click()
    await expect(page.locator('#react-burger-cross-btn')).toBeVisible()
    await page.locator('#react-burger-cross-btn').click()

});*/

test('valid user can log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_item')).toHaveCount(6);
  await expect(page.locator('#react-burger-menu-btn')).toBeVisible()
  await page.locator('#react-burger-menu-btn').click()
  await expect(page.locator(".bm-menu")).toBeVisible()
  //await expect(
  //page.locator('.bm-item-list').getByRole('link')).toHaveText(['All Items', 'About', 'Logout', 'Reset App State']);
});