import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';
import { fields } from '../../testdata/testdata';
import { locators } from '../../pages/locators/registrationForm';
import RegistrationFormValidations from '../../validations/RegistrationFormValidations';

Given('User navigates to Registration Form Page', async function (this: CustomWorld) {
  await this.registrationFormPage?.goto();
});


When('User enters a {string} input in the {string} field', async function (this: CustomWorld, inputValue: string, fieldName: string) {

  await this.registrationFormPage?.enterInput(objectExtractor(fieldName, inputValue, fields), fieldName);
});


When('User selects {string} option from the {string} dropdown', async function (this: CustomWorld, inputValue: string, fieldName: string) {

  await this.registrationFormPage?.selectDropdown(inputValue, objectExtractor(
    'dropdowns',
    fieldName.toLowerCase(),
    locators));
});

When('User ticks the {string} field', async function (this: CustomWorld, field: string) {
  let fieldName = field
    .replace(/\s/g, '').toLowerCase();

  await this.registrationFormPage?.tickCheckbox(objectExtractor('checkboxes', fieldName, locators));

});

When('User clicks on the {string} button', async function (this: CustomWorld, button: string) {

  await this.registrationFormPage?.clickButton(objectExtractor('buttons', button.toLowerCase(), locators));
});


Then('Validate {string} registration', async function (this: CustomWorld, scenario: string) {
  await this.registrationFormValidations?.validateBannerMessage(scenario);
});

export function objectExtractor(param: string, fieldName: string, source: Object) {

  const primaryKey = param as keyof typeof source;
  const entity = source[primaryKey];
  const locatorKey = fieldName as keyof typeof entity;
  const locator = entity[locatorKey];
  return locator;
}