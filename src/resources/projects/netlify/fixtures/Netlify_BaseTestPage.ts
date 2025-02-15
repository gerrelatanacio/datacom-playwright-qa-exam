import { test as base, expect } from "@playwright/test";
import RegistrationFormPage from "../pages/RegistrationFormPage";

export const test = base.extend<{ registrationFormPage: RegistrationFormPage;   
}>({
    //Define new page fixtures
    registrationFormPage: async ({ page }, use) => {
        await use(new RegistrationFormPage(page));
    },

})

export {expect};
