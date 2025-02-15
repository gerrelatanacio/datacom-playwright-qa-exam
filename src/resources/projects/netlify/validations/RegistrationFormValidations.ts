import { expect, Locator, Page } from "@playwright/test";
import { fields } from '../testdata/testdata';
import { locators } from '../pages/locators/registrationForm';

import { objectExtractor } from "../cucumber/steps/registrationFormPage.steps";


export default class RegistrationFormValidations {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async validateBannerMessage(scenario:string) {

        const allResultSectionFields: Locator[] = await this.page.locator("#results-section div").all();
        let element: Locator;

        for (let i = 0; i < allResultSectionFields.length; i++) {
            let elementID = await allResultSectionFields[i].getAttribute("id");
            if (elementID == objectExtractor(
                'banners',
                'message',
                locators
            )) {
                element = await allResultSectionFields[i];
            }
        }

        await expect(element!).toHaveText(
            objectExtractor(
                'bannerMessages',
                scenario.toLowerCase(),
                fields
            )
        );
        console.log(await element!.textContent());

    }



}

