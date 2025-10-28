describe('App entry', () => {
  it('should load the app and show the Auth layout', () => {
    cy.visit('http://localhost:4200');

    // verifica que el header esté visible
    cy.get('app-auth-header').should('exist');

    // verifica que el footer esté visible
    cy.get('app-auth-footer').should('exist');

    // verifica que la URL inicial sea /auth/login o la que definas
    cy.url().should('include', '/auth/login');
  });
});
