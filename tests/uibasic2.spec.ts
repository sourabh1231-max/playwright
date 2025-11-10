const {test,expect} = require('@playwright/test');

test('rt playwright', async ({browser, page })=>
{
 
//const context=await browser.newContext();
//const page=await context.newPage();
const username= await page.locator("#userEmail");
const password= await page.locator("#userPassword");
const cardTitles= await page.locator(".card-body b");
await page.goto("https://rahulshettyacademy.com/client");

console.log(await page.title);
//await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
await username.fill("test");
await password.fill("test1");
await page.locator("#login").click();
//console.log(await page.locator("[style*='none']").textContent());
//await expect (page.locator("[style*='none']")).toContainText('Incorrect username/password');
await username.fill("");
await username.fill("sourabhshrivastava569@gmail.com");
await password.fill("");
await password.fill("Rahulshetty@123");
await page.locator("#login").click();

console.log(await cardTitles.first().textContent());
const allTitles=await cardTitles.allTextContents();
await console.log(allTitles);
});


