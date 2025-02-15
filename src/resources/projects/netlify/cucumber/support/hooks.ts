// src/resources/projects/netlify/cucumber/support/hooks.ts
import { setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setDefaultTimeout(60000);

Before(async function (this: CustomWorld) {
  console.log('Before hook: launching browser');
  await this.launchBrowser();
});

After(async function (this: CustomWorld) {
  console.log('After hook: closing browser');
  await this.closeBrowser();
});
