const {test,expect} = require('@playwright/test');

test('first playwright', async ({browser, page })=>
{
 
//const context=await browser.newContext();
//const page=await context.newPage();
const username= await page.locator("input#username");
const password= await page.locator("#password");
const cardTitles= await page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

console.log(await page.title);
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
await username.fill("test");
await password.fill("test1");
await page.locator("#signInBtn").click();
console.log(await page.locator("[style*='none']").textContent());
await expect (page.locator("[style*='none']")).toContainText('Incorrect username/password');
await username.fill("");
await username.fill("rahulshettyacademy");
await password.fill("");
await password.fill("learning");
await page.locator("#signInBtn").click();

console.log(await cardTitles.first().textContent());
const allTitles=await cardTitles.allTextContents();
await console.log(allTitles);
});

test('UIcontrols', async ({browser, page })=>
{

    const username= await page.locator("input#username");
    const password= await page.locator("#password");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await page.locator(".checkmark").last().click();
    await page.locator("#okayBtn").click(); 
    console.log(await page.locator(".checkmark").nth(1).isChecked());
    await expect(page.locator(".checkmark").last()).toBeChecked();
    const dropdown= await page.locator("select.form-control");
    dropdown.selectOption("consult")
    //await page.pause();
    await page.locator("#signInBtn").click();
    


});
 

test('secondPage', async ({browser})=>
{
    const context= await browser.newContext();
    const page = await context.newPage();
    const username= await page.locator("input#username");
    const password= await page.locator("#password");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await username.fill("rahulshettyacademy");
    //await password.fill("learning");
    const document=await page.locator("[href*='documents-request']");
    const [newPage]=await Promise.all(
    [
    context.waitForEvent('page'),
    document.click(), 
    
    ])
    let text  = await newPage.locator(".red").textContent();
    const text2= await text.split('@');
    const text3 = await text2[1].split(' ');
    console.log(text3[0]);
    await page.locator("input#username").fill(text3[0]);
     await page.pause();
});

test('Newpagelogin', async ({page})=>
{
   
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("sourabhshrivastava569+56@gmail.com");
await page.locator("#userPassword").fill("Rajumadhu@123");
await page.locator("#login").click();
await page.waitForSelector('.card-body');
const products=await page.locator('.card-body');
const counter= await products.count();
for(let i=0;i<counter;i++){
    const product =await products.nth(i);
    const text= await product.textContent();
if(text.includes('ADIDAS ORIGINAL'))
{
    
    await product.locator('button:has-text(" Add To Cart")').click();
    await page.waitForSelector('css=[routerlink="/dashboard/cart"]', { state: 'visible' });
    await page.locator('[routerlink="/dashboard/cart"]').click();
    console.log(await page.title()); 
    await expect(page.locator('text=My Cart')).toContainText('My Cart');
    const itemNumber= await page.locator("p.itemNumber").textContent();
    console.log("Product has been added to Cart");
    console.log(itemNumber);
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.locator("input[value='4542 9931 9292 2293']").fill("2233 9341 1112 1113");
    await page.locator("select.input").first().selectOption("09"); 
    await page.locator("select.input").last().selectOption("11"); 
    await page.locator("input[type='text']").nth(1).fill("232")
    await page.locator("input[type='text']").nth(2).fill("Ankit Nagar")
    await page.locator("input[type='text']").nth(3).fill("test")
    await page.locator("input.text-validated").last().pressSequentially("ind");
    await page.waitForSelector("span.ng-star-inserted");
    await page.locator("span.ng-star-inserted").nth(1).click();
    await page.locator(".action__submit ").click();
    await expect(page.locator(".hero-primary")).toContainText("Thankyou for the order.");
    const id=await page.locator("tr.ng-star-inserted").first().textContent();
    console.log(id);
    
    await page.locator("tr.ng-star-inserted").first().click();

    break;
    
    }


}}); 
