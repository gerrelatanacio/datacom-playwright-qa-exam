// src/resources/projects/netlify/cucumber/support/world.ts
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import RegistrationFormPage from '../../pages/RegistrationFormPage';
import RegistrationFormValidations from '../../validations/RegistrationFormValidations';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  registrationFormPage?: RegistrationFormPage;
  registrationFormValidations?: RegistrationFormValidations

  async launchBrowser() {
    console.log('CustomWorld.launchBrowser() called');
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
    this.registrationFormPage = new RegistrationFormPage(this.page);
    this.registrationFormValidations = new RegistrationFormValidations(this.page)
  }

  async closeBrowser() {
    console.log('CustomWorld.closeBrowser() called');
    await this.browser.close();
  }
}

// Register your custom world with Cucumber
setWorldConstructor(CustomWorld);
