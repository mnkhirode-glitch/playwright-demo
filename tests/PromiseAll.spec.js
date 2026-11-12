const{test,expect} = require ('@playwright/test');

test('@Child windows handle', async ({page,context})=>
 {
    await page.goto("https://practice-automation.com/window-operations/")
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'New Tab' }).click()
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/automatenow/);
  await expect(newPage.locator('.tutorial')).toHaveCount(21);
  await newPage.locator("[alt='Jenkins tutorials']").click()
  await expect(newPage).toHaveURL(/jenkins-tutorials/);
  await expect(newPage.locator('#get-started').isVisible())
  await expect(newPage.locator('.wp-block-paragraph')).toHaveCount(17);
  const heading = await newPage.locator('.wp-block-heading').allTextContents()
  console.log(heading)
  const lastelement = newPage.locator('.wp-block-heading').last()
  console.log(await lastelement.textContent())
  await expect(lastelement).toBeVisible()



 })