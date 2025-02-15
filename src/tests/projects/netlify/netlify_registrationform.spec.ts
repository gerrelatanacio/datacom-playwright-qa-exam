import {test, expect} from "../../../resources/projects/netlify/fixtures/Netlify_BaseTestPage";
import * as Enums from "../../../resources/projects/netlify/testdata/testdata.ts";

test.describe("Netlify Registation Form Tests", () => {
  
    test("First Name with Valid Name", async ({ page, registrationFormPage }) => {
        await registrationFormPage.goto();
        await registrationFormPage.enterFirstName(Enums.FirstName.valid);
    })

    test("First Name with Two Names", async ({ page, registrationFormPage }) => {
        await registrationFormPage.goto();
        await registrationFormPage.enterFirstName(Enums.FirstName.validTwoNames);
    })
})