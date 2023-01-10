import { ChainablePromiseElement } from 'webdriverio';

class SubscriptionPage {

    public get btnEnglish () {
        return $('#translation-btn');
    }

    public get btnCountry () {
        return $('#country-btn');
    }

    public get planLite () {
        return $('#name-lite');
    }

    public get planClassic () {
        return $('#name-classic');
    }

    public get planPremium () {
        return $('#name-premium');
    }

    public get currencyLite () {
        return $('#currency-lite');
    }

    public get currencyClassic () {
        return $('#currency-classic');
    }

    public get currencyPremium () {
        return $('#currency-premium');
    }
    
    public async selectEnglish () {
        await this.btnEnglish.click();
    }

    public async selectCountryFromHeader () {
        await this.btnCountry.click();
    }

    public async selectCountry (countryName: string) {
        let country: string;
        switch(countryName) {
            case "KSA":
                country = "sa"
              break;
            case "Bahrain":
              country = "bh"
              break;
            case "Kuwait":
                country = "kw"
                break;
            default:
              throw new Error("Please use options: KSA, Bahrain, Kuwait")
          }
          await $(`#${country}`).click();
    }
}

export default new SubscriptionPage();
