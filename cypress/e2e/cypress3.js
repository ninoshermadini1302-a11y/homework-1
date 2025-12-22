
////exercise 1


describe('Exercise1 - Registration', () => {
    
    beforeEach(function () {
        //  fixture-დან
        cy.fixture('user_data').then((user) => {
            this.userData = user;
        });
    });

    it('რეგისტრაცია და ექაუნთის წაშლა', function () {
        const user = this.userData;
        const email = `nino${Date.now()}@gmail.com`; 

        cy.visit('http://automationexercise.com');
        cy.get('.logo img').should('be.visible');

        // Signup / Login
        cy.contains(' Signup / Login').click();
        cy.get('.signup-form h2').should('contain', 'New User Signup!');

        //  სახელის და მეილის შევსება
        cy.get('[data-qa="signup-name"]').type(user.name);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();

        // 8-12.ფორმის შევსება
        cy.get('.login-form h2').first().should('contain', 'Enter Account Information');
        cy.fillRegistrationForm(user);

        // 13. Create Account
        cy.get('[data-qa="create-account"]').click();

        // 14-15. Account Created
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();

        // 16. Verify Login
        cy.get('li').contains(`Logged in as ${user.name}`).should('be.visible');

    });
});

/////// exercise 2

describe('Automation Exercise - Login and Delete Account', () => {

    beforeEach(function () {
        // მონაცემების წამოღება fixture ფაილიდან
        cy.fixture('user_data').then((user) => {
            this.userData = user;
        });
    });

    it('ავტორიზაცია და ექაუნთის წაშლა', function () {
        const user = this.userData;

        // 1 & 2. საიტზე გადასვლა
        cy.visit('http://automationexercise.com');

        // 3. მთავარი გვერდის შემოწმება
        cy.get('.logo img').should('be.visible');

        // 4. Signup / Login ღილაკზე დაჭერა
        cy.contains(' Signup / Login').click();

        // 5. შემოწმება, რომ 'Login to your account' ჩანს
        cy.get('.login-form h2').should('contain', 'Login to your account');

        // 6 & 7. ავტორიზაცია 
        cy.loginUser(user.email, user.password);

        // 8. შემოწმება 
        cy.get('li').contains(`Logged in as ${user.name}`).should('be.visible');

        // 9. Delete Account ღილაკზე დაჭერა
        cy.get('a[href="/delete_account"]').click();

        // 10. ACCOUNT DELETED! შემოწმება
        cy.get('[data-qa="account-deleted"]').should('be.visible');
    });
});

/////// exercise 3

describe('Automation Exercise - Login Error Test', () => {

    beforeEach(function () {
        
        cy.fixture('user_data').then((user) => {
            this.userData = user;
        });
    });

    it('უნდა აჩვენოს შეცდომის შეტყობინება არასწორი მონაცემებისას', function () {
        const data = this.userData;

        // 1 & 2. საიტზე გადასვლა
        cy.visit('http://automationexercise.com');

        // 3. მთავარი გვერდის შემოწმება
        cy.get('.logo img').should('be.visible');

        // 4. Signup / Login ღილაკზე დაჭერა
        cy.contains(' Signup / Login').click();

        // 5. შემოწმება, რომ 'Login to your account' ჩანს
        cy.get('.login-form h2').should('contain', 'Login to your account');

        // 6 & 7. არასწორი მონაცემებით შესვლა 
        cy.loginUser(data.wrongEmail, data.wrongPassword);

        // 8. შეცდომის შეტყობინების შემოწმება
        
        cy.get('.login-form p')
            .should('be.visible')
            .and('contain', data.loginErrorMessage);
    });
});