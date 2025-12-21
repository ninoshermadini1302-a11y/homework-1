
describe('Automation Test Store - Account Management', () => {
    
    beforeEach(() => {
        // რეგისტრაციისას მითითებული მონაცემები
        cy.login('Nino123', 'Shermadini2003'); 
    });

    it('უნდა შეცვალოს ანგარიშის დეტალები და გადაამოწმოს', () => {
        cy.get('a[data-original-title="Edit account details"]').click();
        
        const newFirstName = 'Nina';
        const newLastName = 'SShermadini';

        cy.get('#AccountFrm_firstname').clear().type(newFirstName);
        cy.get('#AccountFrm_lastname').clear().type(newLastName);
        cy.get('button[title="Continue"]').click();
        // შემოწმება + წარმატების მესიჯი
        cy.get('.alert-success').should('contain', 'Success: Your account has been successfully updated.');
        
        // დამატებითი შემოწმება
        cy.get('a[data-original-title="Edit account details"]').click();
        cy.get('#AccountFrm_firstname').should('have.value', newFirstName);
    });

    it('უნდა დაამატოს ახალი მისამართი', () => {
       cy.get('.nav-dash li').eq(2).click();
        cy.get('a[title="New Address"]').click();

        cy.get('#AddressFrm_firstname').type('Nina');
        cy.get('#AddressFrm_lastname').type('SShermadini');
        cy.get('#AddressFrm_address_1').type('tvalchrelidze ave 1');
        cy.get('#AddressFrm_city').type('Tbilisi');
        cy.get('#AddressFrm_postcode').type('0173');
        
        
        cy.get('#AddressFrm_country_id').select('Georgia');
        cy.get('#AddressFrm_zone_id').select('Tbilisi');

        cy.get('button[title="Continue"]').click();

        cy.get('.alert-success').should('contain', 'Your address has been successfully inserted');
    });

    it('უნდა შეცვალოს პაროლი', () => {
        cy.get('a[data-original-title="Change password"]').click();

        const currentPassword = 'Nina123';
        const password = 'Shermadini2003';
        
        cy.get('#PasswordFrm_current_password').type(password);
        cy.get('#PasswordFrm_password').type(currentPassword);
        cy.get('#PasswordFrm_confirm').type(currentPassword);

        cy.get('button[title="Continue"]').click();

        cy.get('.alert-success').should('contain', 'Success: Your password has been successfully updated.');
    });
});