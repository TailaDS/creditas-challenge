describe('Loan Simulation - Automated test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it('When the form receives the correct data, the loan should be calculated', () => {
    cy.get('[data-testid="loan-value-input"]').type('35000');
    cy.get('[data-testid="payment-deadline-input"]').type('42');
    cy.get('[data-testid="birthdate-input"]').type('1999-04-07');
    cy.contains('Simular Empréstimo').click();

    cy.get('[data-testid="age"]').should('have.text', '26 anos')
    cy.get('[data-testid="interest-rate-value"]').should('contain', '3%')
    cy.get('[data-testid="installment-value"]').should('contain', 'R$ 878.89')
    cy.get('[data-testid="total-amount-value"]').should('contain', 'R$ 36913.34')
    cy.get('[data-testid="total-interest-value"]').should('contain', 'R$ 1913.34')
  });
})