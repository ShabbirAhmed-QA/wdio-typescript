import SubscriptionPage from '../pageobjects/subscription.page.js'
import priceInfo from '../data/testdata.json' assert { type: "json" }

describe('STC tv packages', () => {

    before(async () => {
        // launch App
        await browser.url('/');
        // select language as english
        await SubscriptionPage.selectEnglish();
    });

    priceInfo.country.forEach(country => {
        it(`validate subscription package for ${country.countryName}`, async () => {
            await SubscriptionPage.selectCountryFromHeader();
            // select country
            await SubscriptionPage.selectCountry(`${country.countryName}`);

            // validate all 3 plans are displayed
            await expect(await SubscriptionPage.planLite).toBeDisplayed();
            await expect(await SubscriptionPage.planClassic).toBeDisplayed();
            await expect(await SubscriptionPage.planPremium).toBeDisplayed();

            // validate price for all plans in their respective currency
            await expect(await SubscriptionPage.currencyLite).toHaveTextContaining(`${country.price.lite} ${country.currency}/month`)
            await expect(await SubscriptionPage.currencyClassic).toHaveTextContaining(`${country.price.classic} ${country.currency}/month`)
            await expect(await SubscriptionPage.currencyPremium).toHaveTextContaining(`${country.price.premium} ${country.currency}/month`)
        })
    });
})


