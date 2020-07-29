const {Builder, By, Key, util} =require('selenium-webdriver');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
    url: "https://www.irctc.co.in/",
    referrer: "https://www.irctc.co.in/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });





 // ==========================================================
let driver=new Builder().forBrowser("chrome").build();
async function openWebsite(siteName)
{
    console.log(siteName);
    await driver.get(siteName);
}
async function Login(username, password)
{
    let login=driver.findElement(By.tagName("button"));
    (await login).click();
    (await driver).manage().window().maximize();
    let loginText=driver.findElement(By.id("loginText"));
    // (await loginText.click());
    // let userId=driver.findElement(By.id("userId"));
    // userId.sendKeys(username);
    // let pwd=driver.findElement(By.id("pwd"));
    // pwd.sendKeys(password);

    console.log(dom.window);
    // let from=(await driver).findElement(By.className('ui-inputtext'));
    // from.sendKeys('DELHI - DLI');
    // let date=(await driver).findElement(By.className('ng-tns-c12-5'));
    // console.log(date);
    // date.sendKeys('29-08-2020');
    // let to=(await driver).findElement(By.className('ui-corner-all'));
    // to.sendKeys('Ghazipur - GCT');
    // console.log(to);

    //window.getElementsByClassName('ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted')[0].placeholder='Delhi';
    //window.getElementsByClassName('ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted')[1].placeholder='Ghazipur';
    //to.placeholder='Ghazipur';
}


async function completeProcess()
{
    openWebsite('http://www.irctc.co.in');
    Login('arai7857','abhinav');
}

completeProcess();