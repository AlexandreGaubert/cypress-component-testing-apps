/// <reference types="cypress" />

Cypress.Commands.add('getId', (dataTestId: string) => {
  cy.get(`[data-testid="${dataTestId}"]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      getId(dataTestId: string): Chainable<Element>,
    }
  }
}

export {};
