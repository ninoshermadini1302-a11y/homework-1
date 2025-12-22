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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (loginname, password) => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get('#loginFrm_loginname').type(loginname);
    cy.get('#loginFrm_password').type(password);
    cy.get('button[title="Login"]').click();
}); //რეგისტრაციის მონაცემები
///////

Cypress.Commands.add('fillRegistrationForm', (user) => {
    // 9. ექაუნთის ინფორმაციის შევსება
    cy.get('#id_gender2').click();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select(user.day);
    cy.get('[data-qa="months"]').select(user.month);
    cy.get('[data-qa="years"]').select(user.year);

    // 10 & 11. ჩექბოქსები
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // 12. მისამართი
    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address1);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select('Canada'); 
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
});