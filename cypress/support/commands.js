// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import dynamicMeerkatElements from "../POM/dynamicMeerkatElements"

Cypress.Commands.add('typeInElement', (elem, input) => {
   dynamicMeerkatElements.typeInElement(elem, input);
});

 Cypress.Commands.add('checkElementGradientColour', (selector, expectedGradient) => {
  (selector)
    .should('be.visible')
    .then(($el) => {
      const gradient = Cypress.$($el).css('background-image')
      expect(gradient).to.contain(expectedGradient)
    })
})

 Cypress.Commands.add('checkNumberOfImages', (selector, expectedNumber) => {
  (selector)
  .should('have.length', expectedNumber)
  .then(images => {
    const count = images.length;
    cy.log(`Found ${count} images on the page`);
  });
});

Cypress.Commands.add('countListItems', (selector, expectedNumber) => {
  selector.find("li").its("length").should("eq", expectedNumber);;
});

Cypress.Commands.add('CheckDownloadedPath', (path_to_downloaded_file) => {
  cy.readFile(path_to_downloaded_file).should('exist')
})
