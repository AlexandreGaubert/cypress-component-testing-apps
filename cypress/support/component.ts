import { mount } from 'cypress/react';
import dayjs from 'dayjs';
import dayjsLocalizedFormat from 'dayjs/plugin/localizedFormat';
import './commands';

dayjs.extend(dayjsLocalizedFormat);
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount);
