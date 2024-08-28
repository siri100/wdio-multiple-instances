

describe('Demo app', () => {
  it('sample test ', async () => {

    await chromeInstance.url("https://www.google.com")
    await (await chromeInstance.$("(//textarea)[1]")).click()
    await (await chromeInstance.$("(//textarea)[1]")).addValue('ChromeInstance')
    await appiumInstance.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
    await(await appiumInstance.$("~Text")).click();
    await (await chromeInstance.$("(//textarea)[1]")).addValue('ChromeInstance')
    await browser.keys(['Enter']);
  });


});


