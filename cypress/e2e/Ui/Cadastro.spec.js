/// <reference types="cypress" />
const faker = require('faker-br')

describe('US002 - Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')  
    });


    it.only('Deve fazer o cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.firstName())
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-submit"]').click()

        //Resultado esperado
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
        
    });
});




 /*
    antes de tudo
    before

    antes de cada cenário
    beforeEach

    depois de tudo
    after

    depois de cada cenário
    afterEach
    */
   