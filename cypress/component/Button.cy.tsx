/* eslint-disable react/react-in-jsx-scope */
import Button from '../../src/components/Button';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button>Click Me</Button>);

    cy.get('button').contains('Click Me');
  });
});
